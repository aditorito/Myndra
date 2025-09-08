// src/pages/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu.jsx";
import Footer from "../components/Footer.jsx";
import { motion } from "motion/react"
import { useContext } from "react";
import { AuthContext } from "../../src/context/AuthContext.jsx";

export default function Home() {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen w-full bg-white text-[#2F2F2F] text-base">
        {/* Mobile overlay menu */}
        <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* Header */}
        <header className="relative top-0 bg-[#075056] opacity-70 text-white z-40">
          <div className="mx-auto w-full px-4 h-16 flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => navigate("/")}
              aria-label="Myndra"
              className="h-8 w-32 sm:w-36 md:w-44 inline-flex items-center flex-shrink-0"
            >
              <img
                src="/images/myndralogotypebt_1.png"
                alt="Myndra"
                className="h-full w-full brightness-0 invert object-contain"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-10 text-[1.08rem]">
              <span className="font-semibold">Home</span>
              <button
                onClick={() => navigate("/AboutUs")}
                className="opacity-80 hover:opacity-100 transition-opacity"
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
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                Careers
              </button>
              <button
                onClick={() => navigate(isAuthenticated ? "/profile" : "/LogIn")}
                className="border border-white text-white px-4 xl:px-5 py-1.5 rounded-xl hover:bg-white hover:text-[#075056] transition-colors"
              >
                {isAuthenticated ? "Profile" : "Log in"}
              </button>
            </nav>

            {/* Mobile hamburger - Fixed visibility */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/30 hover:border-white/60 transition-colors flex-shrink-0"
              aria-label="Open menu"
            >
              {/* Fallback hamburger icon if image doesn't load */}
              <img
                src="/images/hamburger.svg"
                alt="menu"
                className="h-5 w-5 brightness-0 invert"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              {/* CSS hamburger fallback */}
              <div className="hidden flex-col justify-center items-center">
                <span className="block h-0.5 w-5 bg-white mb-1"></span>
                <span className="block h-0.5 w-5 bg-white mb-1"></span>
                <span className="block h-0.5 w-5 bg-white"></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Overlay (add this if you don't have it) */}
          {menuOpen && (
            <div className="lg:hidden fixed inset-0 bg-[#075056] z-50">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between px-4 h-16 border-b border-white/20">
                  <img
                    src="/images/myndralogotypebt_1.png"
                    alt="Myndra"
                    className="h-8 w-32 brightness-0 invert object-contain"
                  />
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/30"
                    aria-label="Close menu"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* ================= HERO ================= */}
        <section className="relative h-[530px] flex flex-col justify-center items-center overflow-hidden px-2 md:px-0">
          <motion.div
            initial={{ width: 0, height: 0, opacity: 0.3, top: "1400px" }}
            animate={{ width: 1866, height: 1674, opacity: 0.7, top: "-1200px" }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 14,
            }}
            className="absolute"
            style={{
              backgroundColor: "#075056",
              borderRadius: "50%",
              left: "50%",
              top: "-1200px",
              transform: "translateX(-50%)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
            }}
          />

          <div
            aria-hidden="true"
            className="
            absolute left-1/2 -translate-x-1/2
            -top-[30vw] md:-top-[18vw] xl:-top-[12vw]
            w-[150vw] md:w-[120vw] xl:w-[100vw]
            aspect-square rounded-full
            bg-[#5B8083]
            shadow-[12px_20px_0px_#E6E6E6]
            -z-10
          "
          />
          <div className="w-full max-w-6xl  z-10 mx-auto  mt-[-150px] pb-10 flex flex-col items-center">
            <h1
              className="
              text-center
              leading-[1.06]
              font-extrabold
              text-[#FEF6E3]
              text-[clamp(2.5rem,8vw,5.5rem)]
              tracking-[-0.01em]
            "
              style={{
                fontFamily: "Playfair Display",
                textShadow:
                  "4px 4px 0 rgba(0,0,0,0.11), 10px 10px 0 rgba(0,0,0,0.07)",

              }}
            >
              Break Barriers.  <br /> Build Dreams.
              <br />
              Be You.
            </h1>

          </div>

        </section>

        <div className="  flex justify-center">
          <button
            onClick={() => navigate("/LogIn")}
            className="rounded-[1rem] bg-[#FEF6E3] px-8 py-3 text-[1.05rem]  font-extrabold text-[#FF5B04] shadow-[inset_0_6px_4px_rgba(0,0,0,0.15)]"
            style={{ fontFamily: "Playfair Display", height: "92px", width: "414px", fontSize: "36px" }}
          >
            Join Waitlist
          </button>
        </div>
        {/* ============ WHY MYNDRA — 3 PILLARS (RESPONSIVE) ============ */}
        <section className="w-full max-w-[1450px] mx-auto px-2 py-14 md:px-6 relative">
          {/* Heading */}
          <div className="mb-3">
            <span
              className="block text-xs tracking-widest text-[#2F2F2F]/70 uppercase"
              style={{ fontFamily: "Work Sans" }}
            >
              MEANING
            </span>
            <h2
              className="text-[2.1rem] md:text-[2.7rem] font-semibold leading-tight"
              style={{ fontFamily: "Inter" }}
            >
              Why <span className="not-italic font-extrabold">Myndra</span> Matters? -{" "}
              <br className="hidden md:block" />
              Our 3 Pillars
            </h2>
          </div>

          {/* Decorative cluster inside Why Myndra - only for larger screens */}
          <div className="hidden xl:block pointer-events-none select-none">
            <img
              src="/images/star.svg"
              alt=""
              className="absolute right-10 top-10 h-96 rotate-[10deg] opacity-90"
            />
            <img
              src="/images/star_2.svg"
              alt=""
              className="absolute right-96 top-84 h-28 -rotate-[20deg] opacity-90"
            />
            <img
              src="/images/vector_5.svg"
              alt=""
              className="absolute left-0 top-[-20px]"
            />
            <div className="absolute left-0 top-64 h-[162px] w-[154px] rounded-full bg-[#FFDE81]" />
            <div className="absolute right-10 bottom-[20%] h-[86px] w-[84px] rounded-full bg-[#BF4200]" />
            <div className="absolute left-[60%] top-[38%] h-[86px] w-[84px] rounded-full bg-[#075056]" />
          </div>

          {/* 3 Pillars — responsive layout using CSS Grid for tablet and desktop */}
          <div className="hidden md:block mt-6">
            {/* Container with responsive grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">

              {/* CARD 1 - Takes full width on tablet, positioned left on desktop */}
              <article className="lg:col-start-1 lg:col-end-5 lg:row-start-1 bg-[#FEF6E3] rounded-3xl p-6 shadow-sm z-20">
                <div className="flex items-center gap-3">
                  <div
                    className="text-[2rem] italic font-black"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    01
                  </div>
                  <div
                    className="text-base font-bold uppercase"
                    style={{ fontFamily: "Work Sans" }}
                  >
                    MYNDRA PREP
                  </div>
                </div>
                <ul
                  className="mt-4 space-y-2 text-[1rem] leading-snug"
                  style={{ fontFamily: "Poppins" }}
                >
                  <li>• AI-powered exam prep with custom study plans.</li>
                  <li>• Targets your strengths and weaknesses.</li>
                  <li>• Gamified goals and instant feedback.</li>
                  <li>• Real-time progress tracking keeps you on track.</li>
                </ul>
              </article>

              {/* CARD 2 - Positioned center on desktop, second on tablet */}
              <article className="lg:col-start-6 lg:col-end-10 xl:col-start-5 xl:col-end-9 lg:row-start-2 lg:mt-8 bg-[#FEF6E3] rounded-3xl p-6 shadow-sm z-20">
                <div className="flex items-center gap-3">
                  <div
                    className="text-[2rem] italic font-black"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    02
                  </div>
                  <div
                    className="text-base font-bold uppercase"
                    style={{ fontFamily: "Work Sans" }}
                  >
                    MYNDRA TUTOR
                  </div>
                </div>
                <ul
                  className="mt-4 space-y-2 text-[1rem] leading-snug"
                  style={{ fontFamily: "Poppins" }}
                >
                  <li>• Your 24/7 AI teacher ready to help anytime.</li>
                  <li>• Clears doubts, explains concepts step-by-step.</li>
                  <li>• Based on syllabus, past papers, and trusted books.</li>
                  <li>• Expert guidance whenever you need it.</li>
                </ul>
              </article>

              {/* CARD 3 - Positioned right on desktop, third on tablet */}
              <article className="lg:col-start-9 lg:col-end-13 lg:row-start-3 lg:mt-16 bg-[#FEF6E3] rounded-3xl p-6 shadow-sm z-20">
                <div className="flex items-center gap-3">
                  <div
                    className="text-[2rem] italic font-black"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    03
                  </div>
                  <div
                    className="text-base font-bold uppercase"
                    style={{ fontFamily: "Work Sans" }}
                  >
                    MYNDRA COUNSELOR
                  </div>
                </div>
                <ul
                  className="mt-4 space-y-2 text-[1rem] leading-snug"
                  style={{ fontFamily: "Poppins" }}
                >
                  <li>• AI-driven college and career advisor.</li>
                  <li>• Finds the right colleges & opportunities.</li>
                  <li>• Supports essays and manages deadlines.</li>
                  <li>• Premium mentoring for free or minimal cost.</li>
                </ul>
              </article>

              {/* Copy block - positioned on left for desktop with blue left border */}
              <div className="lg:col-start-1 lg:col-end-6 lg:row-start-2 lg:row-end-4 lg:mt-24 relative">
                {/* Blue left border */}
                <div className="absolute left-0 top-0 w-1 h-32 bg-[#075056]"></div>

                <div className="pl-8">
                  <h3
                    className="text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] font-bold leading-tight mb-2"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    Today's learners are <br />overwhelmed.
                  </h3>
                  <h3
                    className="text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] font-bold leading-tight mb-8 text-[#075056]"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    We bring back meaning.
                  </h3>
                  <p
                    className="text-[1.1rem] lg:text-[1.2rem] leading-relaxed text-[#2F2F2F] max-w-lg"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    We blend timeless storytelling with adaptive AI to craft a learning
                    experience that's intuitive, supportive, and deeply human.
                  </p>
                </div>

                {/* Orange triangle decoration - positioned at bottom right */}
                <div className="absolute bottom-4 right-12">
                  <div
                    className="w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[24px] border-b-[#FF8C42]"
                    style={{ transform: 'rotate(15deg)' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile stacked layout */}
          <div className="md:hidden space-y-6 mt-8">
            <article className="bg-[#FEF6E3] rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div
                  className="text-[2rem] italic font-black"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  01
                </div>
                <div
                  className="text-base font-bold uppercase"
                  style={{ fontFamily: "Work Sans" }}
                >
                  MYNDRA PREP
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-[1rem]" style={{ fontFamily: "Poppins" }}>
                <li>• AI-powered exam prep with custom study plans.</li>
                <li>• Targets your strengths and weaknesses.</li>
                <li>• Gamified goals and instant feedback.</li>
                <li>• Real-time progress tracking keeps you on track.</li>
              </ul>
            </article>

            <article className="bg-[#FEF6E3] rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div
                  className="text-[2rem] italic font-black"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  02
                </div>
                <div
                  className="text-base font-bold uppercase"
                  style={{ fontFamily: "Work Sans" }}
                >
                  MYNDRA TUTOR
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-[1rem]" style={{ fontFamily: "Poppins" }}>
                <li>• Your 24/7 AI teacher ready to help anytime.</li>
                <li>• Clears doubts, explains concepts step-by-step.</li>
                <li>• Based on syllabus, past papers, and trusted books.</li>
                <li>• Expert guidance whenever you need it.</li>
              </ul>
            </article>

            <article className="bg-[#FEF6E3] rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div
                  className="text-[2rem] italic font-black"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  03
                </div>
                <div
                  className="text-base font-bold uppercase"
                  style={{ fontFamily: "Work Sans" }}
                >
                  MYNDRA COUNSELOR
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-[1rem]" style={{ fontFamily: "Poppins" }}>
                <li>• AI-driven college and career advisor.</li>
                <li>• Finds the right colleges & opportunities.</li>
                <li>• Supports essays and manages deadlines.</li>
                <li>• Premium mentoring for free or minimal cost.</li>
              </ul>
            </article>

            <div>
              <h3
                className="text-[1.1rem] font-normal leading-snug mb-2"
                style={{ fontFamily: "Playfair Display" }}
              >
                Today's learners are overwhelmed.
                <br />
                <span className="text-[#075056] font-bold">We bring back meaning.</span>
              </h3>
              <p
                className="mt-2 text-[1rem] leading-7"
                style={{ fontFamily: "Playfair Display" }}
              >
                We blend timeless storytelling with adaptive AI to craft a learning
                experience that's intuitive, supportive, and deeply human.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ✅ Shared responsive footer */}
      <Footer />
    </>
  );
}