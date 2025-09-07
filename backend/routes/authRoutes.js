const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken'); // ✅ Added
const verifyToken = require('../middleware/middleware');
const WaitingList = require('../models/WaitingList');

dotenv.config();

// --- Email transporter (using Gmail App Password) ---
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Helper: send OTP by email
async function sendEmailOtp(email, otpCode) {
  const mailOptions = {
    from: `"${process.env.FROM_NAME}" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: 'Your OTP Code',
    html: `
      <p>Hello,</p>
      <p>Your OTP code is: <b>${otpCode}</b></p>
      <p>It will expire in 10 minutes.</p>
    `,
  };
  return transporter.sendMail(mailOptions);
}

// In-memory OTP store (for demo only → replace with Redis/DB in prod)
const otpStore = new Map(); // key=email, value={ otp, expiresAt, tempUser }

// STEP 1: Register & send OTP via Email
router.post('/waitinglist', async (req, res) => {
  try {
    const { email, phoneNo, password } = req.body;

    // hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // generate 6-digit OTP
    const otpCode = crypto.randomInt(100000, 999999).toString();
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 min expiry

    // store temp user with OTP
    otpStore.set(email, {
      otp: otpCode,
      expiresAt,
      tempUser: { email, phoneNo, hashedPassword },
    });

    // send OTP email
    await sendEmailOtp(email, otpCode);

    res.status(200).json({
      message: 'OTP sent successfully to your email. Please verify.',
      status: 'pending',
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', status: 'error' });
  }
});

// STEP 2: Verify OTP & save user + issue JWT
router.post('/waitinglist/verify', async (req, res) => {
  try {
    const { email, otpCode } = req.body;
    const otpRecord = otpStore.get(email);

    if (!otpRecord) {
      return res.status(400).json({ message: 'No OTP request found', status: 'error' });
    }
    if (Date.now() > otpRecord.expiresAt) {
      otpStore.delete(email);
      return res.status(400).json({ message: 'OTP expired', status: 'error' });
    }
    if (otpRecord.otp !== otpCode) {
      return res.status(400).json({ message: 'Invalid OTP', status: 'error' });
    }

    // Save user in DB
    const { email: savedEmail, phoneNo, hashedPassword } = otpRecord.tempUser;
    let user = await WaitingList.findOne({ email: savedEmail });
    if (!user) {
      user = new WaitingList({
        email: savedEmail,
        phoneNo,
        password: hashedPassword,
      });
      await user.save();
    }

    // clear OTP
    otpStore.delete(email);

    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({
      message: 'User verified & added to waiting list',
      status: 'success',
      token, // ✅ frontend should save this in localStorage
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', status: 'error' });
  }
});

// Middleware: Verify JWT


// STEP 3: Protected Profile Route
router.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await WaitingList.findById(req.userId).select("-password"); // hide password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch profile", details: err.message });
  }
});

// STEP 4: Update Profile (Protected)
router.put("/profile/update", verifyToken, async (req, res) => {
  try {
    const updates = {};

    // Only allow certain fields to be updated
    const allowedFields = [
      "fullName",
      "nickName",
      "gender",
      "country",
      "city",
      "language",
      "timeZone",
    ];

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    // If no valid fields were sent
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ message: "No valid fields provided for update" });
    }

    // Find user by ID from JWT and update
    const updatedUser = await WaitingList.findByIdAndUpdate(
      req.userId,
      { $set: updates },
      { new: true, runValidators: true, select: "-password" } // return updated user without password
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });

  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).json({
      error: "Failed to update profile",
      details: err.message,
    });
  }
});

module.exports = router;
