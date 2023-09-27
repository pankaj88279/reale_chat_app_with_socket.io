console.log('hello')


const express = require('express'); // using express
const socketIO = require('socket.io');
const http = require('http')
const port = process.env.PORT || 3000 // setting the port
let app = express();
let server = http.createServer(app)

let io = socketIO(server)

// make a connection with the user from server side
io.on('connection', (socket) => {
    console.log('New user connected',socket.id);
});

app.use(express.static("./public"))


app.get("/", (req, res) => {
    res.sendFile(__dirname + "./public/index.html");
});




server.listen(port,()=>{
    console.log('listening on port no. ',port)
});
