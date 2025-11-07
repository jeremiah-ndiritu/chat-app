import { useState } from "react";

export default function InputBar({
  onSend = (message = "hi") => {
    message;
  },
}) {
  const [input, setInput] = useState("");
  return (
    <div className="input-bar">
      <input
        type="text"
        placeholder="Text here..."
        onChange={(e) => setInput(e.target.value.trim())}
      />
      <div className="options">
        <span className="send-btn" onClick={() => onSend(input)}>
          📤
        </span>
        <span className="link-btn">🔗</span>
      </div>
    </div>
  );
}
