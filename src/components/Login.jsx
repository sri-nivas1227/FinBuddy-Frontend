import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  if (localStorage.getItem("token")) {
    window.location.href = "/";
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem(
          "token",
          response.headers.authorization.split(" ")[1]
        );
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-gray-700 rounded-md hover:bg-slate-800 hover:shadow-md hover:shadow-green-400 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Login
          </button>
        </form>
        <div className="text-base">
          Newbie? Let's create a FinBuddy for you!{" "}
          <span
            className="cursor-pointer text-blue-500 font-semibold hover:underline"
            onClick={() => (window.location.href = "/signup")}
          >
            Signup
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
