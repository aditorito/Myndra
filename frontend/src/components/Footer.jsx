import React from "react";
import { useNavigate } from "react-router-dom";

function CtaCard({ className = "" }) {
  const navigate = useNavigate();
  return (
    <div
      className={
        "relative rounded-[1.5rem] bg-[#FEF6E3] px-8 py-10 shadow-sm " +
        className
      }
    >
      <p className="text-center text-black lg:text-left leading-tight font-['Playfair Display'] text-[clamp(1.6rem,4.2vw,2.2rem)]">
        Let's Get <em className="italic font-bold">Started!</em>
      </p>
      <button
        onClick={() => navigate("/LogIn")}
        className="mt-6 inline-flex rounded-xl bg-[#2F2F2F] text-white px-6 py-3 text-sm sm:text-base"
      >
        Join Waitlist
      </button>
      <img
        src="/assets/images/star_4_1.svg"
        alt=""
        aria-hidden="true"
        className="absolute right-[11.5rem] bottom-[2rem] h-[4.5rem] sm:h-[4.5rem] z-20"
      />
      <img
        src="/assets/images/star_3_1.svg"
        alt=""
        aria-hidden="true"
        className="absolute right-[7rem] bottom-[1.5rem] h-[7rem] sm:h-[7rem] z-10 transform rotate-[-16deg]"
      />
    </div>
  );
}

export default function Footer() {
  const navigate = useNavigate();
  return (
<footer className="w-screen mt-16 pb-10 relative left-1/2 right-1/2 -mx-[50vw] px-4 sm:px-8">
      {/* Mobile: CTA above dark footer */}
      <div className="lg:hidden w-full px-4">
        <CtaCard />
      </div>

      {/* Dark footer container */}
      <div className="w-full mt-6">
        <div className="w-full rounded-none lg:rounded-[2.5rem] bg-[#2F2F2F] text-white p-6 sm:p-8">
          {/* Desktop layout */}
         <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-10">
  {/* Left column */}
  <div className="lg:w-auto">
    <div className="text-3xl sm:text-[2.2rem] font-bold lowercase font-['Playfair Display']">
      myndra
    </div>
    <nav className="mt-8 space-y-4 text-[1.05rem]">
      <button onClick={() => navigate("/")} className="block text-left">
        Home
      </button>
      <button onClick={() => navigate("/AboutUs")} className="block text-left">
        About
      </button>
      <button onClick={() => navigate("/WhatWeDo")} className="block text-left">
        How It Works
      </button>
      <button onClick={() => navigate("/Careers")} className="block text-left">
        Contact
      </button>
    </nav>
  </div>

  {/* Right column */}
  <div className="lg:flex justify-end w-full lg:w-auto">
    <CtaCard className="w-[520px]" />
  </div>
</div>

        </div>
      </div>
    </footer>
  );
}
