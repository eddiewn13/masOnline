import io from "socket.io-client";
import { useEffect, useState } from "react";
import DeckClass from './utilities/DeckClass'
import roomCreation from './utilities/randomCodeGenerator'
const socket = io.connect("http://127.0.0.1:3001");

function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const sendMessage = () => {
        socket.emit("send_message", { message });
  };


  console.log(roomCreation(10))
  let Deck = new DeckClass()
  console.log(Deck)

  useEffect(() => {
        socket.on("receive_message", (data) => {
              setMessageReceived(data.message);
        });
  }, [socket]);

  return (
    <div className="App">
    <input
          type="text"
          placeholder="Message..."
          onChange={(event) => {
                setMessage(event.target.value);
          }}
    />
    <button onClick={sendMessage} type="submit">
          Send Message
    </button>
    <h1> Message:</h1>
    {messageReceived}
</div>

  )
}

export default App
