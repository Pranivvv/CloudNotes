const express = require('express')
const { body, validationResult } = require('express-validator')
const Users = require('../models/User')
const router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const jwtSecretKey = '56593e3a139c4e5f8b5c1a1e474239e6'

//EndPoint for creating user Using : POST "/api/auth/createuser" no login required
router.post('/createuser', [
    //validations of user data
    body('name', 'Enter a valid name').trim().isLength({ min: 3 }).escape(),
    body('name', 'Enter a valid username').trim().isLength({ min: 5 }).escape(),
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
            let duplicateEmail = await Users.findOne({ email: req.body.email })
            let duplicateUsername = await Users.findOne({ username: req.body.username })
            if (duplicateEmail && duplicateUsername) {
                return res.status(400).json({ error: 'User with this Username and Email already exists'})
            }
            if (duplicateEmail) {
                return res.status(400).json({ error: 'User with this email already exists' })
            }
            if (duplicateUsername) {
                return res.status(400).json({ error: 'User with this username already exists' })
            }

            // Save user data to database
            const salt = await bcrypt.genSalt(10)
            const hashPass = await bcrypt.hash(req.body.password, salt)
            let user = await Users.create({
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: hashPass,
            })
            const data = {
                user:{
                    id : user.id
                }
            }
            console.log(data)
            var token = jwt.sign(data, jwtSecretKey);
            res.json({token})
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ Error: 'Internal server error' })
        }
    })

//EndPoint for user login Using : POST "/api/auth/login" no login required
router.post('/login',[
    body('username', 'Enter valid Username').trim().isLength({ min: 5 }).escape(),
    body('password', 'Enter valid Password').trim().isLength({ min: 8 }).escape()
],  async ( req, res) =>{
    // validate username and password if they are to short
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }
    const { username, password } = req.body
    try {
        let user = await Users.findOne({ username })
        if(!user){
            return res.status(400).json({ error: 'Enter valid credentials'})
        }
        const comparePassword = await bcrypt.compare(password, user.password)
        if(!comparePassword){
            return res.status(400).json({error: 'Enter valid credentials'})
        }
        const data = {
            user:{
                id : user.id
            }
        }
        console.log(data)
        var token = jwt.sign(data, jwtSecretKey);
        res.json({token})

    } catch (err) {
        console.log(err)
        return res.status(500).json({ Error: 'Internal server error' })
    }
})

module.exports = router