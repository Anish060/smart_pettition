import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  localStorage.setItem("userEmail", email);

  useEffect(() => {
    fetch("http://localhost:8081/u_info")
      .then((res) => res.json())
      .then((dataa) => {
        console.log("Fetched data:", dataa); // ✅ Debugging
        setData(dataa);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []); // ✅ Run only once on mount

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
  };

  const handleLogin = () => {
    if (data.length === 0) {
      alert("User data not loaded yet. Please try again.");
      return;
    }

    const user = data.find(
      (u) =>
        u.username.trim().toLowerCase() === email.trim().toLowerCase() &&
        String(u.password).trim() === password.trim()
    );
    
    if (user) {
      
      
      alert("Login successful!");
      navigate("/user",{state:{email}});
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#d2e0ff] overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 z-0 before:absolute before:inset-0 before:bg-[url('https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1470&q=80')] before:bg-cover before:bg-center before:opacity-20 before:blur-sm before:animate-fadeIn" />

  {/* Main content */}
  <div className="relative z-10 flex flex-col min-h-screen">
    {/* Header */}
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/223f4f43b00bf6d9de1545efb7107a8b5ae7317d"
        alt="Logo"
        className="h-12 w-auto"
      />
      <div className="flex gap-6 items-center max-sm:hidden text-lg font-semibold text-gray-700">
        <a href="#" className="hover:underline transition">About</a>
        <a href="#" className="hover:underline transition">Contact us</a>
      </div>
    </div>

    {/* Login Form */}
    <div className="flex flex-col items-center justify-center px-4 py-16 flex-grow">
      <h1 className="text-3xl font-bold text-gray-800 underline mb-6">Smart Petition</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white/90 backdrop-blur-md border border-gray-300 rounded-2xl shadow-xl flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-base text-gray-700 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-3 text-base rounded-lg border border-slate-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-base text-gray-700 font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="px-4 py-3 text-base rounded-lg border border-slate-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white py-3 rounded-lg text-base font-semibold hover:bg-gray-800 transition"
          onClick={handleLogin}
        >
          Log In
        </button>

        <a href="#" className="text-sm text-gray-700 underline text-center">
          Forgot password?
        </a>
      </form>
    </div>
  </div>

  {/* Tailwind fade animation */}
  <style>
    {`
      @keyframes fadeIn {
        0% { opacity: 0; transform: scale(1.02); }
        100% { opacity: 0.2; transform: scale(1); }
      }

      .animate-fadeIn {
        animation: fadeIn 2.5s ease-in-out forwards;
      }
    `}
  </style>
</div>

  );
}
