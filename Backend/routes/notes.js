const express = require('express');
const Notes = require('../models/Notes')
const { body, validationResult } = require('express-validator')
const fetchUser = require('../middleware/fetchuser');
const { find } = require('../models/User');
const router = express.Router();

//EndPoint1: Fetching all notes of user Using : get "/api/auth/getnotes" login required
router.get('/fetchnotes', fetchUser, async (req, res) => {
    try {
        // fetching user notes from db using userId
        let notes = await Notes.find({ user: req.user.id })
        console.log(notes)
        res.json(notes)
    } catch (err) {
        // any un known ewrror will be thrown
        console.log(err)
        return res.status(500).json({ Error: 'Internal server error' })
    }
    let notes = await Notes.find({ user: req.user.id })
})

//EndPoint2: Add notes of user Using : post "/api/auth/addnotes" login required
router.post('/addnotes', fetchUser, [
    body('title', 'enter title with more than 3 character').trim().isLength({ min: 3 }).escape(),
    body('description', 'enter description with more than 8 character').trim().isLength({ min: 8 }).escape()
], async (req, res) => {
    // input validation 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        // destructure nores data from body
        let { title, description, tag } = req.body
        // add user notes to database
        let note= new Notes({
            user:req.user.id, title, description, tag
        })
        let savenote = await note.save()
        res.json(savenote)
        
    } catch (err) {
        // catch any unkonwn errors
        console.log(err)
        return res.status(500).json({ Error: 'Internal server error' })
    }
}) 

module.exports = router