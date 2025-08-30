// src/pages/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu.jsx";
import Footer from "../components/Footer.jsx";
import { motion } from "motion/react"

export default function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen w-full bg-white text-[#2F2F2F] text-base">
        {/* Mobile overlay menu */}
        <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* Header */}
        <header className="relative top-0 bg-[#075056] opacity-70 text-white z-40 ">
          <div className="mx-auto w-full px-4 h-16 flex   items-center justify-between">
            <button
              onClick={() => navigate("/")}
              aria-label="Myndra"
              className="h-8 w-44 inline-flex items-center"
            >
              <img
                src="/images/myndralogotypebt_1.png"
                alt="Myndra"
                className="h-full w-full brightness-0 invert object-contain"
              />
            </button>

            <nav className="hidden lg:flex items-center gap-10 text-[1.08rem]">
              <span className="font-semibold">Home</span>
              <button
                onClick={() => navigate("/AboutUs")}
                className="opacity-80 hover:opacity-100"
              >
                About Us
              </button>
              <button
                onClick={() => navigate("/WhatWeDo")} // ✅ correct route
                className="opacity-80 hover:opacity-100"
              >
                What We Do
              </button>
              <button
                onClick={() => navigate("/Careers")}
                className="opacity-80 hover:opacity-100"
              >
                Careers
              </button>
              <div className="hidden lg:block">
                <button
                  onClick={() => navigate("/LogIn")}
                  className="border border-white  text-white px-5 py-1.5 rounded-xl"
                >
                  Log in
                </button>
              </div>
            </nav>



            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border"
              aria-label="Open menu"
            >
              <img src="/images/hamburger.svg" alt="menu" className="h-5 w-5" />
            </button>
          </div>
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
        {/* ============ WHY MYNDRA — 3 PILLARS (ASYMMETRIC) ============ */}
        <section className="w-full max-w-[1450px] mx-auto px-2 py-14 md:px-6 relative min-h-[520px]">
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
          {/* Decorative cluster inside Why Myndra */}
          <div className="hidden lg:block pointer-events-none select-none">
            <img
              src="/images/star.svg"
              alt=""
              className="absolute right-10 top-10  h-96 rotate-[10deg] opacity-90"
            />
            <img
              src="/images/star_2.svg"
              alt=""
              className="absolute right-96 top-84 h-28  -rotate-[20deg] opacity-90"
            />
            <img
              src="/images/vector_5.svg"
              alt=""
              className="absolute left-0 top-[-20px]  "
            />
            <div className="absolute left-0 top-64 h-[162px] w-[154px] rounded-full bg-[#FFDE81]" />
            <div className="absolute right-10 bottom-[20%] h-[86px] w-[84px] rounded-full bg-[#BF4200]" />
            <div className="absolute left-[60%] top-[38%] h-[86px] w-[84px] rounded-full bg-[#075056]" />
          </div>


          {/* Decorative overlapping stars */}
          {/* <div>
          <img
            src="/assets/images/star.svg"
            alt=""
            className="hidden md:block absolute right-14 top-[-36px] h-40 z-10 opacity-90"
          />
          <img
            src="/assets/images/star_2.svg"
            alt=""
            className="hidden md:block absolute right-60 top-28 h-24 z-10 opacity-90"
          />
        </div> */}

          {/* 3 Pillars — desktop asymmetric layout */}
          <div className="hidden md:block relative mb-52 min-h-[340px] mt-6">
            {/* CARD 1 */}
            <article className="absolute left-0 top-10  bg-[#FEF6E3] rounded-3xl p-6 shadow-sm z-20">
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

            {/* CARD 2 */}
            <article className="absolute left-[480px] top-[125px]  bg-[#FEF6E3] rounded-3xl p-6 shadow-sm z-20">
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

            {/* CARD 3 */}
            <article className="absolute right-0 top-[200px]  bg-[#FEF6E3] rounded-3xl p-6 shadow-sm z-20">
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

            {/* Copy block */}
            <div className="absolute left-3  mt-2 top-[245px]  w-[360px]">
              <h3
                className="text-[1.22rem] font-bold  leading-snug mb-2"
                style={{ fontFamily: "Playfair Display" }}
              >
                Today’s learners are <br />overwhelmed.
                <br />
                <span className="text-[#075056] font-bold">We bring back meaning.</span>
              </h3>
              <p
                className="mt-5 text-[1rem] leading-7"
                style={{ fontFamily: "Playfair Display" }}
              >
                We blend timeless storytelling with adaptive AI to craft a learning
                experience that’s intuitive, supportive, and deeply human.
              </p>
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
                Today’s learners are overwhelmed.
                <br />
                <span className="text-[#075056] font-bold">We bring back meaning.</span>
              </h3>
              <p
                className="mt-2 text-[1rem] leading-7"
                style={{ fontFamily: "Playfair Display" }}
              >
                We blend timeless storytelling with adaptive AI to craft a learning
                experience that’s intuitive, supportive, and deeply human.
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
