const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, ()=>{
    console.log(`listining at URL http://localhost:${port}` )
})
