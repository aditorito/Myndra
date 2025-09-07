const mongoose = require("mongoose");

const waitingListSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, // ✅ stays required
  },
  phoneNo: {
    type: String,
    required: true, // ✅ stays required
  },
  password: {
    type: String,
    required: true, // ✅ stays required
  },

  // 🆕 Profile fields (all optional)
  fullName: {
    type: String,
    required: false,
  },
  nickName: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other", ""], // restrict to valid values if you want
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  language: {
    type: String,
    required: false,
  },
  timeZone: {
    type: String,
    required: false,
  },
});

const WaitingList = mongoose.model("WaitingList", waitingListSchema);

module.exports = WaitingList;
