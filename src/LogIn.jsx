import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";
import { Eye, EyeOff } from "lucide-react";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("weak");
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      evaluatePasswordStrength(value);
    }
  };

  const evaluatePasswordStrength = (password) => {
    if (password.length >= 12 && /[A-Z]/.test(password) && /\d/.test(password)) {
      setPasswordStrength("strong");
    } else if (password.length >= 8) {
      setPasswordStrength("medium");
    } else {
      setPasswordStrength("weak");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const respond = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.email,
          password: formData.password,
        }),
      });

      if (respond.status === 200) {
        localStorage.setItem("isLoggedIn", true);
        setLoginSuccess(true);
        navigate("/recruiter");
      } else {
        alert("Incorrect credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case "strong":
        return "rgb(34, 197, 94)";
      case "medium":
        return "rgb(250, 204, 21)";
      default:
        return "rgb(248, 113, 113)";
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Secure Account Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group" style={{ position: "relative" }}>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className="form-input"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle"
              aria-label="Toggle Password Visibility"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {formData.password && (
              <div
                className="password-strength"
                style={{ backgroundColor: getStrengthColor() }}
              ></div>
            )}
          </div>

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? (
              <>
                Signing In <span className="spinner"></span>
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {loginSuccess && (
          <div className="success-message">✅ Logged in successfully!</div>
        )}
      </div>
    </div>
  );
};

export default LogIn;
