import React from 'react'
import { Link } from 'react-router-dom'

function mai() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#d2e0ff] overflow-hidden">
    {/* Background image layer */}
    <div className="absolute inset-0 z-0 before:absolute before:inset-0 before:bg-[url('https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1470&q=80')] before:bg-cover before:bg-center before:opacity-20 before:blur-sm before:animate-fadeIn" />
  
    <div className="relative z-10 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f13a0ea89897aa06d7cb1702529c28ba0314f5a"
          alt="Logo"
          className="h-12 w-auto"
        />
        <div className="flex gap-9 items-center max-sm:hidden text-lg font-semibold text-gray-700">
          <div className="hover:underline cursor-pointer transition">About</div>
          <div className="hover:underline cursor-pointer transition">Contact us</div>
        </div>
      </div>
  
      {/* Content */}
      <div className="flex flex-col items-center px-4 mt-14 mx-auto max-w-[535px]">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-800 text-center tracking-wide">
          SMART PETITION
        </h1>
  
        {/* Card */}
        <div className="relative p-12 max-w-[800px] w-full bg-white/90 backdrop-blur-lg rounded-3xl border border-black shadow-xl max-sm:p-8 transition hover:scale-[1.01] duration-300">
          <div className="flex flex-col gap-10 items-center">
            {/* Admin & User */}
            <div className="flex gap-14 items-center max-sm:flex-col">
              {/* Admin */}
              <div className="flex flex-col gap-4 items-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2d8b4bef737cb7ff5cbce430470872bb0d13693"
                  alt="Admin"
                  className="h-25 w-25 "
                />
                <Link to="/loginA">
                  <div className="px-6 py-2 text-2xl text-white bg-black rounded-2xl hover:bg-gray-800 transition shadow-md">
                    Admin
                  </div>
                </Link>
              </div>
  
              {/* User */}
              <div className="flex flex-col gap-4 items-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/adb5e7b576dcc0825b1738f256f49d44b8ac39df"
                  alt="User"
                  className="h-25 w-25"
                />
                <Link to="/login">
                  <div className="px-6 py-2 text-2xl text-white bg-black rounded-2xl hover:bg-gray-800 transition shadow-md">
                    User
                  </div>
                </Link>
              </div>
            </div>
  
            {/* Slogan */}
            <div className="text-2xl text-center text-gray-800 italic font-medium">
              "Raise Your Voice to Make a Change!"
            </div>
          </div>
        </div>
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
  
  )
}

export default mai