import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ identifier: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/login",
        form
      );
      const token = res.data.token;

      // Save token to localStorage
      localStorage.setItem("token", token);

      alert("Login successful!");

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <form
      className='bg-white p-6 rounded shadow-md max-w-md mx-auto mt-10'
      onSubmit={handleSubmit}
    ><h2 className='text-4xl mb-4 font-bold text-center'>Todo App</h2>

      <h2 className='text-2xl mb-4 font-bold text-center'>Login</h2>

      <input
        type='text'
        name='identifier'
        placeholder='Email or Username'
        value={form.identifier}
        onChange={handleChange}
        className='mb-3 p-2 w-full border rounded'
        required
      />

      <input
        type='password'
        name='password'
        placeholder='Password'
        value={form.password}
        onChange={handleChange}
        className='mb-4 p-2 w-full border rounded'
        required
      />

      <button
        type='submit'
        className='bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600'
      >
        Login
      </button>
    </form>
  );
};

export default Login;
