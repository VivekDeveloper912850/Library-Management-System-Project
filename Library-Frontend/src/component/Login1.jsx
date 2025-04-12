import { useState } from "react";
import { loginUser } from "./Api";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(user);
      if (res.data) alert("Login Successful!");
      else alert("Invalid credentials");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="border p-2 w-full mb-2" type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input className="border p-2 w-full mb-2" type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button className="bg-green-500 text-white p-2 w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;