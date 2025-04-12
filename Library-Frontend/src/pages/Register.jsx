
{/*

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [message, setMessage] = useState(""); // State to store response message

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/register", user);
      alert(response.data); // Show success message
      navigate("/login");
    } catch (error) {
      setMessage(error.response?.data || "Registration failed!"); // Show error message
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
        {message && <p className="text-red-500 text-center mb-4">{message}</p>} {/* Show error message 
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
*/}


import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [message, setMessage] = useState(""); // State to store response message

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^[0-9]{10}$/.test(user.phone)) {
      setMessage("Phone number must be exactly 10 digits.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/api/register", user);
      alert(response.data); // Show success message
      navigate("/login");
    } catch (error) {
      setMessage(error.response?.data || "Registration failed!"); // Show error message
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
        {message && <p className="text-red-500 text-center mb-4">{message}</p>} {/* Show error message */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number (10 digits)"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
