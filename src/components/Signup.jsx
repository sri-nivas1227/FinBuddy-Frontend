import React, { useState } from "react";
import axios from "axios";
const Signup = () => {
  if (localStorage.getItem("token")) {
    window.location.href = "/";
  }
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    axios
      .post(`${import.meta.env.VITE_API_URL}/auth/register`, formData)
      .then((res) => {
        if (res.data.success) {
          console.log(res);
          alert(res.data.message);
          window.location.href = "/login";
        } else {
          alert(res.data.data.message);
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });

    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
              placeholder="First Name"
            />

            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
              placeholder="Choose a username"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
              placeholder="Enter your email"
            />
          </div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
              placeholder="Enter a password"
            />
          </div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              id="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
              placeholder="Confirm your password"
            />
          </div>
          <div
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
            className="text-end cursor-pointer hover:underline text-blue-400 hover:text-blue-500"
          >
            Show Password
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-gray-700 rounded-md hover:bg-slate-800 hover:shadow-md hover:shadow-green-400 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Sign Up
          </button>
        </form>
        <div className="text-base">
          Have a FinBuddy already?{" "}
          <span
            className="cursor-pointer text-blue-500 hover:text-green-400 font-semibold hover:underline"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
