import React, { useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";

export default function LogIn() {
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
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-[1200px] px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => handleNavigation("/")}
            aria-label="Myndra"
            className="h-8 w-40 inline-flex items-center"
          >
            <div className="h-full w-full bg-gray-300 rounded flex items-center justify-center text-sm font-bold">
              Myndra
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-8 text-lg">
            <nav className="flex items-center gap-8">
              <button onClick={() => handleNavigation("/")} className="hover:opacity-70">
                Home
              </button>
              <button
                onClick={() => handleNavigation("/AboutUs")}
                className="hover:opacity-70"
              >
                About Us
              </button>
              <button className="font-bold">What we do</button>
              <button
                onClick={() => handleNavigation("/WhatWeDo")}
                className="hover:opacity-70"
              >
                Careers
              </button>
            </nav>

            <button
              onClick={() => handleNavigation("/LogIn")}
              className="border border-black text-black px-5 py-1.5 rounded-xl hover:bg-black hover:text-white transition-colors"
            >
              Log in
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border"
            aria-label="Open menu"
          >
            <div className="h-5 w-5 bg-gray-400 rounded"></div>
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
                    const responsce = await axios.post(`http://localhost:5000/api/v1/users/waitinglist`, {
                      email: email,
                      phoneNo: phoneNo,
                      password: password
                    });

                    console.log(responsce);

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
                    className="h-10 sm:h-12 rounded-lg bg-white hover:bg-gray-100 flex items-center justify-center transition-colors shadow-md"
                  >
                    <div className="h-5 w-5 sm:h-6 sm:w-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      G
                    </div>
                  </button>

                  {/* GitHub */}
                  <button
                    type="button"
                    className="h-10 sm:h-12 rounded-lg bg-white hover:bg-gray-100 flex items-center justify-center transition-colors shadow-md"
                  >
                    <div className="h-5 w-5 sm:h-6 sm:w-6 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold">
                      GH
                    </div>
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
