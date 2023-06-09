const express = require('express');
const api = express()
require('dotenv').config();
const path = require('path');
const http = require('http').Server(api);

//attaching socket.io to the http server
const io = require('socket.io')(http);





api.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, '/source/index.html'));
})

//cretae a new connection
io.on('connection', socket => {
    console.log('new connection made');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    })

});



http.listen(process.env.PORT, ()=>{ console.log(`server running on port ${process.env.PORT}`)})
