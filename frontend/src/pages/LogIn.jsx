import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RImg from "../components/RImg.jsx";
import Footer from "../components/Footer.jsx";

export default function LogIn() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white text-[#2F2F2F]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-[1200px] px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            aria-label="Myndra"
            className="h-8 w-40 inline-flex items-center"
          >
            <RImg
              path="assets/images/myndralogotypebt_1.png"
              mobPath="assets/images/myndralogotypebt_1.png"
              alt="Myndra"
              imgProps={{ className: "h-full w-full object-contain" }}
            />
          </button>

          <div className="hidden lg:flex items-center gap-8 text-lg">
            <nav className="flex items-center gap-8">
              <button onClick={() => navigate("/")} className="hover:opacity-70">
                Home
              </button>
              <button
                onClick={() => navigate("/AboutUs")}
                className="hover:opacity-70"
              >
                About Us
              </button>
              <button className="font-bold">What we do</button>
              <button
                onClick={() => navigate("/WhatWeDo")}
                className="hover:opacity-70"
              >
                Careers
              </button>
            </nav>

            <button
              onClick={() => navigate("/LogIn")}
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
            <RImg
              path="assets/images/hamburger.svg"
              alt="menu"
              imgProps={{ className: "h-5 w-5" }}
            />
          </button>
        </div>
      </header>

      {/* Centered login form */}
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-8">
        <main className="relative isolate mx-auto max-w-[800px] w-full">
          {/* Outer Green Container */}
          <div
            className="flex justify-center"
            style={{
              backgroundColor: "#436E8C",
              borderRadius: "100px",
              margin: "10% -15%",
              padding: "80px 160px", // 80px top/bottom, 160px left/right
            }}
          >
            <section
              className="relative z-10 w-full max-w-[500px] rounded-3xl p-8 shadow-xl"
              style={{
                backgroundColor: "#2C4E66",
                border: "2px solid rgba(255,255,255,0.4)",
              }}
            >
              {/* Logo/Header */}
              <div className="flex justify-center mb-6">
                <h1
                  className="text-2xl font-bold text-white flex items-center gap-2"
                  style={{ fontFamily: "Gilroy-Bold" }}
                >
                  Login
                </h1>
              </div>

              <form className="grid gap-5">
                {/* Email */}
                <label className="grid gap-2">
                  <span
                    className="text-sm text-white/90 font-medium"
                    style={{ fontFamily: "Gilroy-Regular" }}
                  >
                    Email
                  </span>
                  <input
                    type="email"
                    placeholder="username@gmail.com"
                    className="h-12 rounded-lg border px-4 outline-none bg-white text-gray-800 placeholder-gray-400"
                    style={{ fontFamily: "Gilroy-Regular" }}
                  />
                </label>
                <label className="grid gap-2">
                  <span
                    className="text-sm text-white/90 font-medium"
                    style={{ fontFamily: "Gilroy-Regular" }}
                  >
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    placeholder="+1 234 567 890"
                    className="h-12 rounded-lg border px-4 outline-none bg-white text-gray-800 placeholder-gray-400"
                    style={{ fontFamily: "Gilroy-Regular" }}
                  />
                </label>


                {/* Password */}
                <label className="grid gap-2">
                  <span
                    className="text-sm text-white/90 font-medium"
                    style={{ fontFamily: "Gilroy-Regular" }}
                  >
                    Password
                  </span>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="h-12 w-full rounded-lg border px-4 pr-12 outline-none bg-white text-gray-800"
                      style={{ fontFamily: "Gilroy-Regular" }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      <RImg
                        path={
                          showPassword
                            ? "assets/images/eye-show.svg"
                            : "assets/images/eye-hide.svg"
                        }
                        mobPath={
                          showPassword
                            ? "assets/images/eye-show.svg"
                            : "assets/images/eye-hide.svg"
                        }
                        alt=""
                        imgProps={{ className: "h-5 w-5 opacity-60" }}
                      />
                    </button>
                  </div>
                </label>

                {/* Forgot Password */}
                <div className="flex items-center justify-start">
                  <button
                    type="button"
                    className="text-sm text-white/80 hover:text-white underline transition-colors"
                    style={{ fontFamily: "Gilroy-Regular" }}
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="h-12 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors shadow-lg"
                  style={{ fontFamily: "Gilroy-Bold" }}
                >
                  Sign In
                </button>

                {/* Continue with */}
                <div
                  className="text-center text-sm text-white/70"
                  style={{ fontFamily: "Gilroy-Regular" }}
                >
                  or continue with
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Google */}
                  <button
                    type="button"
                    className="h-12 rounded-lg bg-white hover:bg-gray-100 flex items-center justify-center transition-colors shadow-md"
                  >
                    <RImg
                      path="assets/images/group_2212.svg"
                      mobPath="assets/images/group_2212.svg"
                      alt="Google"
                      imgProps={{ className: "h-6 w-6" }}
                    />
                  </button>

                  {/* GitHub */}
                  <button
                    type="button"
                    className="h-12 rounded-lg bg-white hover:bg-gray-100 flex items-center justify-center transition-colors shadow-md"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
                      alt="GitHub"
                      className="h-6 w-6"
                    />
                  </button>
                </div>

                {/* Register link */}
                <div
                  className="mt-4 text-center text-sm text-white/70"
                  style={{ fontFamily: "Gilroy-Regular" }}
                >
                  Don't have an account yet?{" "}
                  <button
                    type="button"
                    className="text-white underline hover:text-orange-300 transition-colors"
                  >
                    Register for free
                  </button>
                </div>
              </form>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-8">
            <Footer />
          </div>
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
