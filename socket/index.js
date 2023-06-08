const express = require('express');
const api = express()
require('dotenv').config();


api.get('/', (req, res) => { 
    res.send('Hello World!')
})





api.listen(process.env.PORT, ()=>{ console.log(`server running on port ${process.env.PORT}`)})
