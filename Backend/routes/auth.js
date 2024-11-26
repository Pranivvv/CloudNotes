const express = require('express')
const { body, validationResult } = require('express-validator')
const Users = require('../models/User')
const router = express.Router();

router.post('/', [
    body('name','Enter a valid name').trim().isLength({ min:3 }).escape(),
    body('email','Enter a valid Email').isEmail().escape(),
    body('password','Password should be atleast 8 characters').isLength({ min:8 }).escape(),
], (req, res)=>{
    const errors = validationResult(req);
    obj=req.body
    // console.log(obj)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors : errors.array() })
    }
    const user=Users(obj)
    user.save().then(user => res.json(obj)).catch(err=>{
        console.log(err)
        return res.json({Error:'Enter unique email'})
    })
})

module.exports = router