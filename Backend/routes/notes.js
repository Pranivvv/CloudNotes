const express = require('express');
const Notes = require('../models/Notes')
const { body, validationResult } = require('express-validator')
const fetchUser = require('../middleware/fetchuser');
const { find } = require('../models/User');
const router = express.Router();

//EndPoint1: Fetching all notes of user Using : get "/api/notes/getnotes" login required
router.get('/fetchnotes', fetchUser, async (req, res) => {
    try {
        // fetching user notes from db using userId
        let notes = await Notes.find({ user: req.user.id })
        // console.log(notes)
        res.json(notes)
    } catch (err) {
        // any un known ewrror will be thrown
        // console.log(err)
        return res.status(500).json({ Error: 'Internal server error' })
    }
    let notes = await Notes.find({ user: req.user.id })
})

//EndPoint2: Add notes of user Using : post "/api/notes/addnotes" login required
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
        // console.log(err)
        return res.status(500).json({ Error: 'Internal server error' })
    }
}) 

//EndPoint3: Update perticular note using note id Using : PUT "/api/notes/updatenote" login required
router.put('/updatenote/:id', fetchUser, async (req, res) => {
    try {
        // fetching user note from body using 
        let { title, description, tag } = req.body

        // adding updated feild with new info
        const newNote = {}
        if(title){ newNote.title= title }
        if(description){ newNote.description= description }
        if(tag){ newNote.tag= tag }

        let note = await Notes.findById(req.params.id)
        if(!note){
            return res.status(404).send('Note Not Found')
        }
        if(note.user.toString()!==req.user.id){
            return res.status(401).send('Permissions Denied')
        }

        note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
        res.json(note)

    } catch (err) {
        // any un known ewrror will be thrown
        // console.log(err)
        return res.status(500).json({ Error: 'Internal server error' })
    }
})

//EndPoint4: Deletete perticular note using note id Using : DELETE "/api/notes/deletenote" login required
router.delete('/deletenote/:id', fetchUser, async (req, res) => {
    try {
        let note = await Notes.findById(req.params.id)
        if(!note){
            return res.status(404).send('Note Not Found')
        }
        if(note.user.toString()!==req.user.id){
            return res.status(401).send('Permissions Denied')
        }

        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({sucess:'Deleted Note Successfully'})

    } catch (err) {
        // any un known ewrror will be thrown
        // console.log(err)
        return res.status(500).json({ Error: 'Internal server error' })
    }
})

module.exports = router