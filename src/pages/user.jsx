import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function user() {
  const location = useLocation();
  const email = location.state?.email || localStorage.getItem("userEmail");

  const [law, setLaw] = useState([]);
  

  // Fetch lawyer details on mount

  const [conte,setConte]=useState({
    contextt:"",
    issu:"",
    catt:"",
    name:email,
    emo:""
  })
  
 
  async function geans() {
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAgaxmNhCv8mD4OoUijls12OVMev3t82Kc",
        method: "post",
        data: {
          contents: [{ parts: [{ text: conte.issu + " analyse it and give the response as a single word whether it's Infrastructure, Health, Education, or Tax problem." }] }],
        },
      });


      return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.log(error);
      return "Unknown";  // Return a fallback category in case of error
    }
  }
  async function geans1() {
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAgaxmNhCv8mD4OoUijls12OVMev3t82Kc",
        method: "post",
        data: {
          contents: [{ parts: [{ text: conte.issu + "  from 0 to 10 provide a value for this message based on sentiment analysis and integrity of the request for a government based petition just give the number alone the more emotional or sad it is the higher the value and only for more emotional cases and needs immediate action gets more value compared to others and also make sure that there is a slight difference between previous values dont hesitate to give 0" }] }],
        },
      });
      

      return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.log(error);
      return "Unknown";  // Return a fallback category in case of error
    }
  }

  const handleSubmit = async () => {
    try {
      //setConte( { ...conte, name:email })
      const emoval=await geans1();
      const category = await geans();  // Wait for AI category
      const updatedConte = { ...conte, catt: category ,emo: emoval};  // Create a new object with updated category
      
      const response = await axios.post("http://localhost:8081/sen", updatedConte);
      console.log("Response:", response.data);

      setConte({ contextt: "", issu: "", catt: "" ,name:email,emo:""});  // Clear input only on success
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };
  
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#d2e0ff] overflow-hidden">
  {/* Background image layer */}
  <div className="absolute inset-0 z-0 before:absolute before:inset-0 before:bg-[url('https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1470&q=80')] before:bg-cover before:bg-center before:opacity-20 before:blur-sm before:animate-fadeIn" />

  <div className="relative z-10 flex flex-col min-h-screen">
    {/* Header */}
    <div className="flex gap-4 items-center px-6 py-4 bg-white shadow-md">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/223f4f43b00bf6d9de1545efb7107a8b5ae7317d"
        alt="Logo"
        className="h-12 w-auto"
      />
      <div className="flex gap-10 items-center flex-1 text-lg font-semibold text-gray-700">
        <Link to="/usersent" className="hover:underline transition">Sent</Link>
        <div className="hover:underline cursor-default">Response</div>
        <div className="ml-auto flex gap-6">
          <div className="hover:underline cursor-default">Send</div>
          <Link to="/" className="hover:underline">Log out</Link>
        </div>
      </div>
    </div>

    {/* Form Content */}
    <div className="flex flex-col gap-6 p-6 w-full max-w-[600px] mx-auto mt-12 bg-white/90 backdrop-blur-md rounded-3xl border border-gray-300 shadow-lg">
      {/* Context */}
      <div className="flex flex-col gap-2">
        <label className="text-base text-gray-800 font-medium">Context</label>
        <input
          type="text"
          placeholder="e.g., Hostel maintenance"
          className="px-4 py-3 text-base rounded-lg border border-slate-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          onChange={(e) => setConte({ ...conte, contextt: e.target.value })}
        />
      </div>

      {/* Issue */}
      <div className="flex flex-col gap-2">
        <label className="text-base text-gray-800 font-medium">Issue</label>
        <textarea
          placeholder="Describe your issue here..."
          className="px-4 py-3 text-base rounded-lg border border-slate-300 min-h-[100px] resize-none text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          onChange={(e) => setConte({ ...conte, issu: e.target.value })}
        />
      </div>

      {/* Submit Button */}
      <Link to="/usersent" state={{ email }}>
        <button
          onClick={handleSubmit}
          className="w-full py-3 text-base font-semibold bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </Link>
    </div>
  </div>

  {/* Animation style */}
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

  )
}
