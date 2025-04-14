

{/*
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [admin, setAdmin] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/admin/login", admin);
      alert("Admin Login Successful!");
      localStorage.setItem("adminToken", response.data.token);
      navigate("/admin/dashboard");
    } catch (error) {
      console.error(error);
      alert("Invalid Admin Credentials!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
          <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
*/}

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [admin, setAdmin] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://lms-backend-production-0f0a.up.railway.app/api/admin/login", admin);
      alert("Admin Login Successful!");
      localStorage.setItem("adminToken", response.data.token);
      navigate("/admin/dashboard");
    } catch (error) {
      console.error(error);
      alert("Invalid Admin Credentials!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:outline-none"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded-xl text-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
