import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://192.168.88.34:5000"); // Connect to backend

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Listen for welcome message
    socket.on("welcome", (data) => {
      console.log(data);
      setMessage(data);
    });

    // Cleanup listener on unmount
    return () => {
      socket.off("welcome");
    };
  }, []);

  // Example: Send message to server
  const sendMessage = () => {
    socket.emit("message", "Hi server, this is Jeremiah 😎");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React + Socket.IO 🔌</h2>
      <p>Server says: {message}</p>

      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
