import { useState } from "react";
import "../../css/UI/Login.css";
export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <label htmlFor="login">
        Phone/email
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </div>
  );
}
