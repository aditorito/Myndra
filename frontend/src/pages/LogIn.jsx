import React, { useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import RImg from "../components/RImg.jsx";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu.jsx";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function LogIn() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");


  const handleNavigation = (path) => {
    console.log(`Navigate to ${path}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen w-full bg-white text-[#2F2F2F]">
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-[1200px] px-4 h-16 flex items-center justify-between">
          {/* Logo - Responsive sizing */}
          <button
            onClick={() => navigate("/")}
            aria-label="Myndra"
            className="h-8 w-32 sm:w-36 md:w-40 inline-flex items-center flex-shrink-0"
          >
            <RImg
              path="/images/myndralogotypebt_1.png"
              mobPath="/images/myndralogotypebt_1.png"
              alt="Myndra"
              imgProps={{ className: "h-full w-full object-contain" }}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-lg">
            <nav className="flex items-center gap-6 xl:gap-8">
              <button
                onClick={() => navigate("/")}
                className="hover:opacity-70 transition-opacity"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/AboutUs")}
                className="hover:opacity-70 transition-opacity"
              >
                About Us
              </button>
              <button
                onClick={() => navigate("/WhatWeDo")}
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                What We Do
              </button>
              <button
                onClick={() => navigate("/Careers")}
                className="hover:opacity-70 transition-opacity"
              >
                Careers
              </button>
            </nav>

            <button
              onClick={() => navigate("/LogIn")}
              className="border border-black text-black px-4 xl:px-5 py-1.5 rounded-xl hover:bg-black hover:text-white transition-colors whitespace-nowrap"
            >
              Log in
            </button>
          </div>

          {/* Mobile Hamburger - Fixed visibility */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors flex-shrink-0 min-w-[2.5rem]"
            aria-label="Open menu"
          >
            <RImg
              path="assets/images/hamburger.svg"
              alt="menu"
              imgProps={{
                className: "h-5 w-5",
                onError: (e) => {
                  // Fallback if image fails to load
                  e.target.style.display = 'none';
                  const parent = e.target.parentElement;
                  if (parent && !parent.querySelector('.hamburger-fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'hamburger-fallback flex flex-col justify-center items-center h-5 w-5';
                    fallback.innerHTML = `
                <span class="block h-0.5 w-4 bg-gray-600 mb-1"></span>
                <span class="block h-0.5 w-4 bg-gray-600 mb-1"></span>
                <span class="block h-0.5 w-4 bg-gray-600"></span>
              `;
                    parent.appendChild(fallback);
                  }
                }
              }}
            />
          </button>
        </div>
      </header>

      {/* Centered login form */}
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-4 sm:py-8 px-4 sm:px-6">
        <main className="relative isolate mx-auto w-full max-w-[800px]">
          {/* Outer Blue Container - Responsive */}
          <div
            className="flex justify-center w-full px-3 sm:px-6 md:px-8 lg:px-0"
            style={{
              backgroundColor: "#436E8C",
              borderRadius: "40px",
              padding: "24px 16px",
            }}
          >
            <section
              className="relative z-10 w-full max-w-[500px] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl"
              style={{
                backgroundColor: "#2C4E66",
                border: "2px solid rgba(255,255,255,0.4)",
              }}
            >
              {/* Logo/Header */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 font-sans">
                  Login
                </h1>
              </div>

              <div className="grid gap-3 sm:gap-4 lg:gap-5">
                {/* Email */}
                <div className="grid gap-2">
                  <span className="text-sm text-white/90 font-medium font-sans">
                    Email
                  </span>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="username@gmail.com"
                    className="h-10 sm:h-12 rounded-lg border px-3 sm:px-4 outline-none bg-white text-gray-800 placeholder-gray-400 text-sm sm:text-base font-sans w-full"
                  />
                </div>

                {/* Phone Number */}
                <div className="grid gap-2">
                  <span className="text-sm text-white/90 font-medium font-sans">
                    Phone Number
                  </span>
                  <input
                    onChange={(e) => {
                      setPhoneNo(e.target.value);
                    }}
                    type="tel"
                    placeholder="+1 234 567 890"
                    className="h-10 sm:h-12 rounded-lg border px-3 sm:px-4 outline-none bg-white text-gray-800 placeholder-gray-400 text-sm sm:text-base font-sans w-full"
                  />
                </div>

                {/* Password */}
                <div className="grid gap-2">
                  <span className="text-sm text-white/90 font-medium font-sans">
                    Password
                  </span>
                  <div className="relative">
                    <input
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="h-10 sm:h-12 w-full rounded-lg border px-3 sm:px-4 pr-10 sm:pr-12 outline-none bg-white text-gray-800 text-sm sm:text-base font-sans"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      <div className="h-4 w-4 sm:h-5 sm:w-5 bg-gray-400 rounded opacity-60"></div>
                    </button>
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="flex items-center justify-start">
                  <button
                    type="button"
                    className="text-sm text-white/80 hover:text-white underline transition-colors font-sans"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Sign In Button */}
                <button
                  onClick={async () => {
                    try {
                      const response = await axios.post(`${backendUrl}/waitinglist`, {
                        email: email,
                        phoneNo: phoneNo,
                        password: password
                      });
                      console.log(response);
                      if (response.data.status === 'pending') {
                        // Save email for OTP verification step
                        localStorage.setItem("pendingEmail", email);

                        alert("OTP sent successfully. Please check your email.");

                        // Reset form fields
                        setEmail('');
                        setPhoneNo('');
                        setPassword('');

                        // Navigate to OTP page
                        navigate("/otp");
                      } else {
                        alert("Failed to send OTP");
                      }
                    } catch (error) {
                      console.error(error);
                      alert("Something went wrong while adding to waiting list");
                    }
                  }}

                  className="h-10 sm:h-12 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors shadow-lg text-sm sm:text-base font-sans w-full"
                >
                  Sign In
                </button>

                {/* Continue with */}
                <div className="text-center text-sm text-white/70 font-sans">
                  or continue with
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {/* Google */}
                  <button
                    type="button"
                    className="h-10 sm:h-12 rounded-lg bg-white hover:bg-gray-100 flex items-center justify-center transition-colors shadow-md border border-gray-200"
                  >
                    <img
                      src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.0.0/google.svg"
                      alt="Google"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      style={{ filter: 'none' }}
                    />
                  </button>

                  {/* GitHub */}
                  <button
                    type="button"
                    className="h-10 sm:h-12 rounded-lg bg-white hover:bg-gray-100 flex items-center justify-center transition-colors shadow-md border border-gray-200"
                  >
                    <img
                      src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/11.0.0/github.svg"
                      alt="GitHub"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                    />
                  </button>
                </div>

                {/* Register link */}
                <div className="mt-2 sm:mt-3 lg:mt-4 text-center text-sm text-white/70 font-sans">
                  Don't have an account yet?{" "}
                  <button
                    type="button"
                    className="text-white underline hover:text-orange-300 transition-colors"
                  >
                    Register for free
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Footer - Only show on larger screens */}
          <Footer />
        </main>
      </div>

      {/* Autofill Fix */}
      <style>{`
        input:-webkit-autofill {
          background-color: white !important;
          -webkit-box-shadow: 0 0 0px 1000px white inset !important;
          -webkit-text-fill-color: #333 !important;
        }
      `}</style>
    </div>
  );
}
