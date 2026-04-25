
const express = require('express')
const router = express.Router()
const usersModel = require('../models/usersModel')

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post('/login', async (req, res) => {

    const { username, password } = req.body;

    const user = await usersModel.findOne({ username });

    if(!user) {
        return res.status(500).json({
            success: false,
            message: "User not found",
        });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
        return res.status(400).json({
            success: false,
            message: "Invalid password",
        });
    }

    const accessToken = jwt.sign({id: user._id}, process.env.ACCESS_TOKEN_SECRET);

    return res.status(200).json({
        success: true,
        message: "Login successful",
        accessToken,
    });

})

module.exports = router;