const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })

var websockets = new Map();

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`Received message => ${message}`)
    websockets.set(message.toString(), ws)
  })
  ws.send('websocket connection established')
})

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
  let procesID = req.query.id
  console.log(procesID)
  res.send('Request received: ' + procesID);
  ws = websockets.get(procesID.toString())
  ws.send('batch of data for: '+procesID);
});

app.listen(port, () => console.log(`listening on port ${port}!`))

// function startLoading(){
//     console.log('1');
//
//     var waitTill = new Date(new Date().getTime() + 5 * 1000);
//     while(waitTill > new Date()){}
//
//     websocket.send('lets go!')
//
//     console.log('2');
// }
