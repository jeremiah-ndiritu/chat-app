import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import InputBar from "../components/partials/InputBar";

const socket = io("http://192.168.88.34:5000"); // Connect to backend

function Home() {
  const [messages, setMessages] = useState([]);
  const [replys, setReplys] = useState([]);

  useEffect(() => {
    // Listen for welcome message
    socket.on("welcome", (data) => {
      console.log(data);
      setMessages((prev) => [data, ...prev]);
    });

    // Cleanup listener on unmount
    return () => {
      socket.off("welcome");
    };
  }, []);

  // Example: Send message to server
  const sendMessage = (message = "hi") => {
    socket.emit("message", message);
  };

  useEffect(() => {
    socket.on("reply", (reply) => {
      console.log("reply :>> ", reply);
      setReplys((p) => [reply, ...p]);
    });
    return () => {
      socket.off("reply");
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React + Socket.IO 🔌</h2>
      <p>Server says: {messages.at(-1)}</p>

      <InputBar onSend={sendMessage} />
      <div className="m">
        {replys.map((reply, i) => (
          <p key={i}>{reply}</p>
        ))}
      </div>
    </div>
  );
}

export default Home;
