import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu.jsx";
import RImg from "../components/RImg.jsx";
import Footer from "../components/Footer.jsx";

export default function AboutUs() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white text-[#2F2F2F]">
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
  <div className="mx-auto max-w-[1200px] px-4 h-16 flex items-center justify-between">
    <button
      onClick={() => navigate("/")}
      aria-label="Myndra"
      className="h-8 w-40 inline-flex items-center"
    >
      <RImg
        path="/images/myndralogotypebt_1.png"
        mobPath="/images/myndralogotypebt_1.png"
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
                      <button
                onClick={() => navigate("/WhatWeDo")} // ✅ correct route
                className="opacity-80 hover:opacity-100"
              >
                What We Do
              </button>
        <button
          onClick={() => navigate("/Careers")}
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
        path="/images/hamburger.svg"
        alt="menu"
        imgProps={{ className: "h-5 w-5" }}
      />
    </button>
  </div>
</header>

      <div className="relative">
        <div className="absolute inset-0 flex justify-center mt-10 pointer-events-none select-none opacity-40" aria-hidden="true">
          <span className="bg-[linear-gradient(152deg,#FFC107_0%,#075056_65%,#055258_99%)] bg-clip-text text-transparent font-extrabold lowercase font-mont"
                style={{ fontSize: "clamp(4rem, 18vw, 12.5rem)" }}>
            myndra
          </span>
        </div>

        <main className="relative mx-auto max-w-[1100px] px-4 pt-[15.1rem] pb-16">
          <h1 className="text-[clamp(1.75rem,3.5vw,4rem)] font-extrabold text-[#075056] text-center font-poppins">About Us</h1>

          <section className="mt-8">
            <p className="mx-auto max-w-3xl pt-14 text-center text-[clamp(1rem,2.6vw,1.7rem)] leading-relaxed font-playfair">
              <div className="font-bold">
              We’re building Myndra from the ground up, driven by impact and purpose. Every team member plays a key role in shaping the future
              of education in <span className="text-[rgba(255,91,4,1)]">Bharat</span>.</div> 
              <br /><br />
              <span className="text-[#075056]">Myndra: an AI-powered platform redefining learning and growth for all.</span>
              <br /><br />
              Join us to make a real difference.
            </p>
          </section>

          <div className="relative mt-8" aria-hidden="true">
            <div className="absolute left-3 top-2 -rotate-[12deg]">
              <RImg path="/images/vector_7.svg" alt="" imgProps={{ className: "h-5 w-5" }} />
            </div>
            <div className="absolute right-6 top-10">
              <RImg path="/images/vector_8.svg" alt="" imgProps={{ className: "h-6 w-6" }} />
            </div>
          </div>

          <h2 className="mt-16 text-center font-extrabold leading-snug font-playfair"
              style={{ fontSize: "clamp(1.1rem,3.2vw,2rem)" }}>
            <span className="bg-[linear-gradient(90deg,#055258_0%,#FFDE81_100%)] bg-clip-text text-transparent">
              Your journey matters and with Myndra, <br className="hidden sm:block" /> there are no limits.
            </span>
          </h2>
        </main>
      </div>

    <Footer />
    </div>
  );
}
