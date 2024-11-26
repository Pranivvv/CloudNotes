const express = require('express')
const { body, validationResult } = require('express-validator')
const Users = require('../models/User')
const router = express.Router();

//EndPoint to create user Using : POST /api/auth/createuser 
router.post('/createuser', [
    //validations of user data
    body('name', 'Enter a valid name').trim().isLength({ min: 3 }).escape(),
    body('email', 'Enter a valid Email').isEmail().escape(),
    body('password', 'Password should be atleast 8 characters').isLength({ min: 8 }).escape(),
],  async (req, res) => {
        const errors = validationResult(req);
        // console.log(obj)
        //check for validation errors if there are errors send responce as bad request 400 with errors 
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        //added try-catch bolck to find unknown errors
        try {
            // check if email alredy exist in database
            let notValidEmail = await Users.findOne({ email: req.body.email })
            if (notValidEmail) {
                return res.status(400).json({ error: 'User with this email already exists' })
            }

            // Save user data to database
            let user = await Users.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })
            res.json(user)
        }
        catch (err) {
            // console.log(err)
            return res.status(500).json({ Error: 'err' })
        }
    })

module.exports = router