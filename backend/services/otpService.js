const axios = require('axios');

const MSG91_AUTH_KEY = process.env.MSG91_AUTH_KEY;
const MSG91_TEMPLATE_ID = process.env.MSG91_TEMPLATE_ID;

// Send OTP
async function sendOtp(phoneNo) {
  try {
    const url = `https://control.msg91.com/api/v5/otp`;

    const response = await axios.post(
      url,
      {
        template_id: MSG91_TEMPLATE_ID,
        mobile: phoneNo,
        authkey: MSG91_AUTH_KEY,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    return {
      type: "success",
      message: response.data?.message || "OTP sent",
      data: response.data,
    };

  } catch (error) {
    console.error("sendOtp error:", error.response?.data || error.message);

    return {
      type: "error",
      message: error.response?.data?.message || "Failed to send OTP",
      data: error.response?.data,
    };
  }
}

// Verify OTP
async function verifyOtp(phoneNo, otp) {
  try {
    const url = `https://control.msg91.com/api/v5/otp/verify`;

    const response = await axios.post(
      url,
      {
        mobile: phoneNo,
        otp: otp,
        authkey: MSG91_AUTH_KEY,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    return {
      type: "success",
      message: response.data?.message || "OTP verified",
      data: response.data,
    };

  } catch (error) {
    console.error("verifyOtp error:", error.response?.data || error.message);

    return {
      type: "error",
      message: error.response?.data?.message || "Invalid OTP",
      data: error.response?.data,
    };
  }
}

module.exports = { sendOtp, verifyOtp };
