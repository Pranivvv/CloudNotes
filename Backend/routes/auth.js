const express = require('express')
const Users = require('../models/User')
const router = express.Router();

router.post('/', (req, res)=>{
    obj=req.body
    console.log(obj)
    const user=Users(obj)
    user.save()
    res.json(obj)
})

module.exports = router