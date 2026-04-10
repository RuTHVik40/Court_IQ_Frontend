import React, { useState } from "react";
import loginImg from "../assets/login_image.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="h-screen flex bg-[#0b0f1a] text-white overflow-hidden">

      {/* LOGO */}
      <div className="absolute top-6 left-8 text-xl font-bold tracking-wide z-20">
        CourtIQ
      </div>

      {/* ================= LEFT (FIXED) ================= */}
      <div className="w-1/2 relative flex items-center justify-center overflow-hidden">

        {/* ORIGINAL GRADIENT (kept as you wanted) */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/15 via-[#0b0f1a] to-purple-600/15"></div>

        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[700px] bg-green-400/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[700px] bg-purple-600/20 blur-[120px]"></div>

        <div className="relative z-10 w-[68%] h-[88%] rounded-2xl overflow-hidden shadow-2xl bg-black/40 backdrop-blur-lg p-8 flex flex-col justify-end">
          <img
            src={loginImg}
            alt="athlete"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          <div className="relative z-10">
            <h1 className="text-4xl font-bold leading-tight">
              Master the <br />
              <span className="text-cyan-400">Digital Arena.</span>
            </h1>

            <p className="text-sm text-gray-300 mt-4">
              Real-time analytics and seamless facility management designed for
              modern athletes.
            </p>
          </div>
        </div>

        <div className="absolute bottom-4 left-6 text-xs text-gray-500">
          © 2024 COURTIO DYNAMICS
        </div>
      </div>

      {/* ================= RIGHT ================= */}
<div className="w-1/2 h-screen flex flex-col relative">

  {/* TOP BAR */}
  <div className="flex justify-end p-4">
    <div
      onClick={() => setIsSignup(!isSignup)}
      className="text-sm text-gray-400 cursor-pointer hover:text-white"
    >
      {isSignup ? "SIGN IN" : "SIGN UP"}
    </div>
  </div>

  {/* SCROLLABLE CONTENT */}
  <div className="flex-1 overflow-y-auto flex justify-center">

    <div className="w-[440px] pt-10 pb-16 relative">

      {/* LOGIN */}
      <div
        className={`transition-all duration-500 ease-in-out absolute w-full ${
          isSignup
            ? "-translate-x-10 opacity-0 pointer-events-none"
            : "translate-x-0 opacity-100"
        }`}
      >
        <AuthCard
          title="Welcome Back"
          subtitle="Enter your credentials to access the dashboard."
          isSignup={false}
          toggle={() => setIsSignup(true)}
        />
      </div>

      {/* SIGNUP */}
      <div
        className={`transition-all duration-500 ease-in-out absolute w-full ${
          isSignup
            ? "translate-x-0 opacity-100"
            : "translate-x-10 opacity-0 pointer-events-none"
        }`}
      >
        <AuthCard
          title="Create Account"
          subtitle="Join CourtIQ and manage smarter."
          isSignup={true}
          toggle={() => setIsSignup(false)}
        />
      </div>

      {/* Spacer to prevent collapse */}
      <div className="invisible">
        <AuthCard isSignup />
      </div>

    </div>
  </div>

  {/* FOOTER */}
  <div className="flex justify-end gap-6 px-10 py-4 text-xs text-gray-500 border-t border-white/5">
    <span className="hover:text-white cursor-pointer">PRIVACY</span>
    <span className="hover:text-white cursor-pointer">TERMS</span>
    <span className="hover:text-white cursor-pointer">HELP</span>
  </div>

</div>
    </div>
  );
};

/* ================= COMPONENT ================= */

const AuthCard = ({ title, subtitle, isSignup, toggle }) => {
  return (
    <div className="bg-[#111827] p-10 rounded-2xl shadow-2xl border border-white/5">

      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400 text-sm mb-6">{subtitle}</p>

      {isSignup && <Input label="FULL NAME" />}

      <Input label="EMAIL ADDRESS" placeholder="name@facility.com" />
      <Input label="PASSWORD" type="password" />

      {isSignup && <Input label="CONFIRM PASSWORD" type="password" />}

      <button className="w-full bg-lime-400 text-black font-semibold py-3 rounded-md hover:bg-lime-300 transition">
        {isSignup ? "CREATE ACCOUNT" : "SIGN IN"}
      </button>

      <div className="text-center text-xs text-gray-500 my-6">
        OR CONTINUE WITH
      </div>

      <div className="flex gap-4">
        <button className="flex-1 flex items-center justify-center gap-2 bg-black py-2 rounded-md hover:bg-gray-800">
          <FcGoogle /> Google
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-black py-2 rounded-md hover:bg-gray-800">
          <FaApple /> Apple
        </button>
      </div>

      <p className="text-xs text-gray-400 text-center mt-6">
        {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
        <span onClick={toggle} className="text-cyan-400 cursor-pointer">
          {isSignup ? "Sign in" : "Create one"}
        </span>
      </p>
    </div>
  );
};

/* INPUT */
const Input = ({ label, placeholder, type = "text" }) => (
  <>
    <label className="text-xs text-gray-400">{label}</label>
    <div className="bg-black rounded-md mt-2 mb-4 px-3 py-3">
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent w-full outline-none text-sm"
      />
    </div>
  </>
);

export default LoginPage;