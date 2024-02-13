const express = require('express')
const app = express()
const PORT = 4000;

const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());


const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

socketIO.on('connection', (socket)=>{
    console.log(`${socket.id} user just connected!`);
    socket.on('disconnect', ()=>{
        console.log('A user just disconnected');
    })
})

app.get('/api',(req,res)=>{
    res.json({
        message: 'Okay',
    })
})

http.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})