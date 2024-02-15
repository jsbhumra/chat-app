const express = require('express')
const app = express()
const PORT = 4000;

const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());


const socketIO = require('socket.io')(http, {
    cors: {
        origin: '*'
    }
})

let activeUsers = []

socketIO.on('connection', (socket)=>{
    console.log(`${socket.id} user just connected!`);
    socketIO.emit('userChange', activeUsers);

    socket.on('addUser', (data) => {
        activeUsers.push(data);
        socketIO.emit('userChange', activeUsers);
    });

    socket.on('newMess', (data) => {
        socketIO.emit('newMessResp', data);
    });

    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');

        activeUsers = activeUsers.filter((user) => user.socketID !== socket.id);

        socketIO.emit('userChange', activeUsers);
        socketIO.emit('chatDisc')
        socket.disconnect();
    });

})



app.get('/api',(req,res)=>{
    res.json({
        message: 'Okay',
    })
})

http.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})