const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const WaitingList = require('../models/WaitingList');

router.post('/waitinglist', async (req, res) => {
  try {
    const { email, phoneNo, password } = req.body;

    // hash the password before saving
    const saltRounds = 10; // higher = more secure but slower
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newWaitingListEntry = new WaitingList({
      email,
      phoneNo,
      password: hashedPassword, // store hashed
    });

    await newWaitingListEntry.save();

    res.status(201).json({
         message: 'Added to waiting list successfully',
         status: 'success'
        });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
        message: 'Internal Server Error',
        status: 'error'
    });
  }
});

module.exports = router;
