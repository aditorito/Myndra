import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu.jsx";
import RImg from "../components/RImg.jsx";
import Footer from "../components/Footer.jsx";

export default function Careers() {
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
              path="assets/images/hamburger.svg"
              alt="menu"
              imgProps={{ className: "h-5 w-5" }}
            />
          </button>
        </div>
      </header>

      <div className="relative">
        <div className="absolute inset-0 flex justify-center mt-10 pointer-events-none select-none opacity-50" aria-hidden="true">
          <span className="bg-[linear-gradient(156.6deg,#311B92_0%,#006064_67%,#F8BBD0_100%)] bg-clip-text text-transparent font-extrabold lowercase font-mont"
            style={{ fontSize: "clamp(4rem, 18vw, 12.5rem)" }}>
            careers
          </span>
        </div>

        <main className="relative mx-auto max-w-[1100px] px-4 pt-14 pb-16">
          <section className="text-center">
            <h1 className="text-[clamp(1.75rem,4.5vw,3.125rem)] mt-[182px] font-extrabold text-[#055258] font-mont">
              Be a Part of Our Journey
            </h1>
            <div className="mt-4 inline-flex items-center gap-3 opacity-90">
              <RImg path="assets/images/group_1.svg" mobPath="assets/images/group_1.svg" alt="" imgProps={{ className: "h-6 w-auto" }} />
            </div>
          </section>

          <section className="mt-16 grid lg:grid-cols-2 gap-10 items-start">
            {/* Left side: text */}
            <div>
              <h2 className="text-[clamp(2rem,4.5vw,4rem)] leading-tight font-extrabold text-[#055258] font-mont">
                The Benefit <br className="hidden sm:block" /> of Working Here
              </h2>
              <p className="mt-6 text-[clamp(1rem,2.2vw,1.25rem)] leading-8 font-mont text-[#055258]">
                We recognize that compensation and benefits play a major part in making sure that
                you feel you can focus on your work. We are currently bootstrapped and impact
                driven—if you want to join the revolution, reach out to us.
              </p>
            </div>

            {/* Right side: design */}
            <div className="relative mx-auto flex items-center justify-center">
              {/* Big green circle with text */}
              <img
                src="/assets/images/think_out_of_the_box.svg"
                alt="Think Outside the Box"
                className="w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] relative" />


              {/* Gradient/wavy shape behind person */}
              <img
                src="/assets/images/vector_12.svg"
                alt=""
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] opacity-80"
              />

              {/* Email card - on LEFT side of circle */}
              <div className="absolute left-[-405px] top-[110%] -translate-y-1/2 -translate-x-1/2 bg-[#F8F8F8] rounded-3xl p-6 flex items-center gap-5 shadow-lg">

                <img
                  src="/assets/images/envelope_with_red__badge.png"
                  alt="Email"
                  className="h-16 w-16 rounded-xl object-contain"
                />
                <div className="font-mont">
                  <p className="text-[1.125rem] font-semibold text-[#055258]">Email us to join the team!</p>
                  <div className="mt-2 text-sm leading-6 text-[#055258]">
                    <div>anshulkaul21@gmail.com</div>
                    <div>rakshak7raina@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </section>




        </main>
      </div>

      <Footer />
    </div>
  );
}
