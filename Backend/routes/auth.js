const express = require('express')
const router = express.Router();

router.post('/', (req, res)=>{
    obj={
        name:'praniv',
        email:'praniv@warungshe.com',
        password:'xyz'
    }
    res.json(obj)
})

module.exports = router