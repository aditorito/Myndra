import React from "react";
import { useNavigate } from "react-router-dom";


function CtaCard({ className = "" }) {

  const handleNavigation = () => {
    // Replace with your navigation logic
    console.log("Navigate to LogIn");
  };

  return (
    <div
      className={
        "relative rounded-[1.5rem] bg-[#FEF6E3] px-4 sm:px-8 py-5 sm:py-10 shadow-sm " +
        className
      }
    >
      <p className="text-center text-black lg:text-left leading-tight font-['Playfair Display'] text-[1.2rem] sm:text-[1.6rem] lg:text-[2.2rem] pr-12 sm:pr-0">
        Let's Get <em className="italic font-bold">Started!</em>
      </p>
      <button
        onClick={handleNavigation}
        className="mt-3 sm:mt-6 inline-flex rounded-xl bg-[#2F2F2F] text-white px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-base"
      >
        Join Waitlist
      </button>
      {/* Mobile stars - better positioned */}
      {/* Mobile stars - better positioned and smaller */}
      {/* Mobile stars - positioned to match the image */}
      {/* Mobile stars - positioned to match the image exactly */}
      <img
        src="/images/star_4_1.svg"
        alt=""
        aria-hidden="true"
        className="absolute right-[3rem] bottom-[2rem] h-8 w-8 sm:hidden z-20"
      />
      <img
        src="/images/star_3_1.svg"
        alt=""
        aria-hidden="true"
        className="absolute right-[0.5rem] bottom-[1rem] h-12 w-12 sm:hidden z-10 transform rotate-[-16deg]"
      />
      {/* Desktop stars - responsive positioning and sizing */}
      <img
        src="/images/star_4_1.svg"
        alt=""
        aria-hidden="true"
        className="hidden sm:block absolute right-[6rem] md:right-[8rem] lg:right-[11.5rem] bottom-[1.2rem] md:bottom-[1.5rem] lg:bottom-[2rem] h-[2.5rem] md:h-[3.5rem] lg:h-[4.5rem] z-20"
      />
      <img
        src="/images/star_3_1.svg"
        alt=""
        aria-hidden="true"
        className="hidden sm:block absolute right-[3rem] md:right-[5rem] lg:right-[7rem] bottom-[0.8rem] md:bottom-[1rem] lg:bottom-[1.5rem] h-[4rem] md:h-[5.5rem] lg:h-[7rem] z-10 transform rotate-[-16deg]"
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
        <div className="w-full rounded-[2.5rem] bg-[#2F2F2F] text-white p-6 sm:p-8">
          {/* Desktop and Mobile layout */}
          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-10">
            {/* Left column */}
            <div className="lg:w-auto w-full">
              <div className="text-3xl sm:text-[2.2rem] font-bold lowercase font-['Playfair Display'] text-center lg:text-left">
                myndra
              </div>
              <nav className="mt-6 lg:mt-8 lg:space-y-4 text-[0.9rem] sm:text-[1.05rem]">
                {/* Mobile: horizontal layout with better spacing */}
                <div className="flex flex-wrap justify-center lg:justify-start lg:flex-col lg:space-y-4 gap-x-4 sm:gap-x-6 lg:gap-x-0 gap-y-2">
                  <button onClick={() => navigate("/")} className="text-center lg:text-left whitespace-nowrap">
                    Home
                  </button>
                  <button onClick={() => navigate("/AboutUs")} className="text-center lg:text-left whitespace-nowrap">
                    About
                  </button>
                  <button onClick={() => navigate("/WhatWeDo")} className="text-center lg:text-left whitespace-nowrap">
                    How It Works
                  </button>
                  <button onClick={() => navigate("/Careers")} className="text-center lg:text-left whitespace-nowrap">
                    Contact
                  </button>
                </div>
              </nav>
            </div>

            {/* Right column - Desktop CTA (hidden on mobile) */}
            <div className="hidden lg:flex justify-end w-full lg:w-auto">
              <CtaCard className="w-[520px]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}