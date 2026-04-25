
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

        if (existingUser || existingUsername ) {
        return res.status(400).json({
            success: false,
            message: "Email or username already used",
        });
        }
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
})

module.exports = router;