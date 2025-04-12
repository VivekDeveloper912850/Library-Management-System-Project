import { useState } from "react";
import { loginUser } from "./AuthService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await loginUser(credentials);
      localStorage.setItem("token", token);  // Save JWT token
      alert("Login successful!");
      navigate("/dashboard"); // Redirect to dashboard
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
