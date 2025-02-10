import React, { useState } from "react";
import { users } from "../public/data/mockapi"; // Import the mock users

const Auth = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the user exists in the mock users array
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setError("");
      onLogin(); // Call onLogin callback on successful login
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              className="border rounded p-3 w-full text-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="border rounded p-3 w-full text-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-3 w-full rounded text-lg font-bold"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
