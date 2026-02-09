import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./AdminLogin.css";

export default function AdminLogin() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setError("");

    if (!user || !pass) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("https://varasa-backend.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: user,
          password: pass
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid credentials");
        setLoading(false);
        return;
      }

      // ⭐ SAVE TOKEN
      localStorage.setItem("token", data.token);

      // go to dashboard
      window.location.href = "/admin-dashboard";

    } catch (err) {
      setError("Cannot connect to backend server");
    } finally {
      setLoading(false);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") login();
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-box">
        <h2>Admin Login</h2>

        <input
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          onKeyDown={handleEnter}
        />

        <div className="password-field">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            onKeyDown={handleEnter}
          />

          <span className="toggle-pass" onClick={() => setShowPass(!showPass)}>
            {showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>

        {error && <p className="admin-error">{error}</p>}

        <button onClick={login} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}
