
const express = require('express')
const router = express.Router()
const usersModel = require('../models/usersModel')

router.post('/create-account', async (req, res) => {
try {
        const createAccount = await usersModel(req.body);
        await createAccount.save();
        res.status(201).json(createAccount);
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

module.exports = router;