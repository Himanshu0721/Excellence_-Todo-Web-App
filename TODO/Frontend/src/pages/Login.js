
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ identifier: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", form);
      alert("Login successful!");
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-xl mb-4 font-bold">Login</h2>
      <input type="text" name="identifier" placeholder="Email or Username" value={form.identifier} onChange={handleChange} className="mb-2 p-2 w-full border" required />
      <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="mb-4 p-2 w-full border" required />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
};

export default Login;
