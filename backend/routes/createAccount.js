
const express = require('express')
const router = express.Router()
const usersModel = require('../models/usersModel')

router.post("/create-account", async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await usersModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already used",
      });
    }

    const createAccount = await usersModel(req.body);
    await createAccount.save();

    res.status(201).json({
      success: true,
      user: createAccount,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/check-existing", async (req, res) => {
  try {
    const { email, username } = req.body;

    const existingEmail = await usersModel.findOne({ email });
    const existingUsername = await usersModel.findOne({ username });

    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already used",
      });
    }

    if (existingUsername) {
      return res.status(400).json({
        success: false,
        message: "Username already taken",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Available",
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;