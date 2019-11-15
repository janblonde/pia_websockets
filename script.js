const url = 'ws://127.0.0.1:8080'
const connection = new WebSocket(url)

connection.onopen = () => {
  connection.send(Math.floor((Math.random() * 100) + 1))
}

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
  console.log(e.data)
}
