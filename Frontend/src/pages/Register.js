
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/auth/register", form);
      alert("Registered successfully!");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-xl mb-4 font-bold">Register</h2>
      <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} className="mb-2 p-2 w-full border" required />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="mb-2 p-2 w-full border" required />
      <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="mb-4 p-2 w-full border" required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
    </form>
  );
};

export default Register;
