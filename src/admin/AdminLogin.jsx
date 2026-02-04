import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./AdminLogin.css";

export default function AdminLogin() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const login = () => {
    if (!user || !pass) {
      setError("Please fill all fields");
      return;
    }

    if (user === "admin" && pass === "varasa123") {
      localStorage.setItem("isAdmin", "true");
      window.location.href = "/admin-dashboard";
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-box">
        <h2>Admin Login</h2>

        <input
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <div className="password-field">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <span
            className="toggle-pass"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>

        {error && <p className="admin-error">{error}</p>}

        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
