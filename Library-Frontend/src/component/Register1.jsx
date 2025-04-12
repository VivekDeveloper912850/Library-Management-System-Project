import { useState } from "react";
import { registerUser } from "./Api";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(user);
      alert("Registration Successful!");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <input className="border p-2 w-full mb-2" type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input className="border p-2 w-full mb-2" type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input className="border p-2 w-full mb-2" type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button className="bg-blue-500 text-white p-2 w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;