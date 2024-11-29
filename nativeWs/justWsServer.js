// http is a core node module
const http = require('http');
//ws is a 3rd party module
const websocket = require('ws');

const server = http.createServer((req, res)=>{
    res.end('I am connected!');
});

const wss = new websocket.WebSocketServer({server});

// wss.on('headers',(headers, req)=>{
    
//We're using our HTTP from the browser because that's what the browser needs to be able to get here.
//That's how we hit this server.
//And once it's gotten here, it sees, oh, this is website web socket traffic right back over here,web socket traffic.
//This needs to change, which is exactly what it does right here, this 101.

//     console.log(headers);
// })

wss.on('connection',(ws,req)=>{
    // console.log(ws);
    ws.send('Welcome to the websocket server!!!');
    ws.on('message',(data)=>{
        console.log(data.toString());
    })
})

server.listen(8000);