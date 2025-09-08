import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu.jsx";
import RImg from "../components/RImg.jsx";
import Footer from "../components/Footer.jsx";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export default function WhatWeDo() {

  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

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
                onClick={() => navigate(isAuthenticated ? "/profile" : "/LogIn")}
              className="border border-black text-black px-4 xl:px-5 py-1.5 rounded-xl hover:bg-black hover:text-white transition-colors whitespace-nowrap"
            >
              {isAuthenticated ? "Profile" : "Log in"}
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

      {/* Hero Background Text */}
      <div className="relative">
        {/* Background word */}
        <div className="absolute inset-0 flex justify-center items-start mt-12 pointer-events-none select-none opacity-20 z-0">
          <span
            className="bg-[linear-gradient(152deg,#FF3D00_0%,#075056_65%,#F8BBD0_100%)] bg-clip-text text-transparent font-extrabold lowercase"
            style={{
              fontFamily: "Montserrat",
              fontSize: "clamp(4rem, 18vw, 12.5rem)",
            }}
          >
            myndra
          </span>
        </div>

        {/* Foreground Content */}
        <main className="relative z-10 mx-auto max-w-[1100px] px-4 pt-[14rem] pb-20">
          <section className="text-center">
            <h1
              className="text-[clamp(1.75rem,5vw,4rem)] font-extrabold text-[#055258]"
              style={{ fontFamily: "Poppins" }}
            >
              What We Do.
            </h1>
            <p
              className="mt-14 text-[clamp(1rem,2.4vw,1.5rem)] font-extrabold text-[#075056]"
              style={{ fontFamily: "Playfair Display" }}
            >
              Myndra brings advanced, personalized education within everyone’s reach
            </p>
          </section>

          {/* Features Section */}
          <section className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
            <article>
              <div className="relative w-fit mx-auto">
                {/* Original image */}
                <RImg
                  path="/images/group_48.svg"
                  alt="Affordable mentorship"
                  imgProps={{ className: "h-14 w-14 mx-auto" }}
                />

                {/* Overlay image fully covering the original */}
                <img
                  src="/images/ai_chip_with_golden_prongs_and_stars-removebg-preview.png"
                  alt="Overlay"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <div
                className="mt-3 text-base font-medium"
                style={{ fontFamily: "Poppins" }}
              >
                Cutting edge AI
              </div>
            </article>

            <article>
              <div className="relative w-fit mx-auto">
                {/* Original image */}
                <RImg
                  path="/images/group_48.svg"
                  alt="Affordable mentorship"
                  imgProps={{ className: "h-14 w-14 mx-auto" }}
                />

                {/* Overlay image fully covering the original */}
                <img
                  src="/images/minimalist_3d_location_pin_icon-removebg-preview.png"
                  alt="Overlay"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <div
                className="mt-3 text-base font-medium"
                style={{ fontFamily: "Poppins" }}
              >
                No location boundaries
              </div>
            </article>

            <article>
              <div className="relative w-fit mx-auto">
                {/* Original image */}
                <RImg
                  path="/images/group_48.svg"
                  alt="Affordable mentorship"
                  imgProps={{ className: "h-14 w-14 mx-auto" }}
                />

                {/* Overlay image fully covering the original */}
                <img
                  src="/images/pencil_on_textured_paper_mob_-removebg-preview.png"
                  alt="Overlay"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <div
                className="mt-3 text-base font-medium"
                style={{ fontFamily: "Poppins" }}
              >
                Tailored Examination Prep
              </div>
            </article>

            <article className="sm:col-span-2 lg:col-start-1 lg:col-end-3 lg:row-start-2">
              <div className="relative w-fit mx-auto">
                {/* Original image */}
                <RImg
                  path="/images/group_48.svg"
                  alt="Affordable mentorship"
                  imgProps={{ className: "h-14 w-14 mx-auto" }}
                />

                {/* Overlay image fully covering the original */}
                <img
                  src="/images/minimalist_analog_clock_design-removebg-preview.png"
                  alt="Overlay"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <div
                className="mt-3 text-base font-medium"
                style={{ fontFamily: "Poppins" }}
              >
                Round-the-clock expert guidance
              </div>
            </article>

            <article className="sm:col-start-1 sm:col-end-3 lg:col-start-2 lg:col-end-4 lg:row-start-2">
              <div className="relative w-fit mx-auto">
                {/* Original image */}
                <RImg
                  path="/images/group_48.svg"
                  alt="Affordable mentorship"
                  imgProps={{ className: "h-14 w-14 mx-auto" }}
                />

                {/* Overlay image fully covering the original */}
                <img
                  src="/images/minimalist_3d_user_icon-removebg-preview.png"
                  alt="Overlay"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>

              <div
                className="mt-3 text-base font-medium"
                style={{ fontFamily: "Poppins" }}
              >
                Affordable - Top-quality mentorship
              </div>
            </article>


          </section>

          {/* Text Section */}
          <section className="mt-20">
            <p
              className="mx-auto max-w-[80ch] text-center text-[clamp(1rem,2.2vw,1.25rem)] leading-7"
              style={{ fontFamily: "Playfair Display" }}
            >
              We make <strong>personalisation, cost, and quality</strong> the core of everything we deliver.
              <br /><strong>Myndra</strong> adapts to your goals, tracks your progress, and provides precise support exactly when you need it.
            </p>
            <p
              className="mx-auto max-w-[86ch] text-center text-[clamp(1rem,2.2vw,1.25rem)] leading-7 mt-8"
              style={{ fontFamily: "Playfair Display" }}
            >
              With <strong>Myndra</strong>, success isn't limited by circumstance.
              <br />We give learners the tools to compete, excel, and shape their futures—driven by innovation and focused on results.
            </p>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
