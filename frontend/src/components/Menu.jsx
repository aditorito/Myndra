import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Menu({ open = false, onClose }) {
  const navigate = useNavigate();
  const panelRef = useRef(null);
  const lg = 1024;
  const query = useMemo(() => `(max-width:${lg - 1}px)`, [lg]);
  
  const getIsMobile = () =>
    typeof window !== "undefined" && window.matchMedia(query).matches;
  
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener ? mql.addEventListener("change", handler) : mql.addListener(handler);
    setIsMobile(mql.matches);
    return () => {
      mql.removeEventListener ? mql.removeEventListener("change", handler) : mql.removeListener(handler);
    };
  }, [query]);

  const close = () => onClose?.();
  
  const go = (to) => { 
    navigate(to); 
    close(); 
  };

  useEffect(() => {
    if (!open || !isMobile) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, isMobile]);

  useEffect(() => {
    if (!open || !isMobile) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { 
      document.body.style.overflow = prev; 
    };
  }, [open, isMobile]);

  useEffect(() => { 
    if (open && isMobile) panelRef.current?.focus(); 
  }, [open, isMobile]);

  if (!open || !isMobile) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 p-4"
      role="dialog" 
      aria-modal="true" 
      aria-label="Mobile navigation"
      onClick={close}
    >
      <div
        ref={panelRef} 
        tabIndex={-1} 
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[rgba(7,80,86,1.00)] text-white shadow-[2.5rem_4.6875rem_6.25rem_0_rgba(0,0,0,0.20)]
                   w-full max-w-xs min-h-fit rounded-[0.625rem] p-4 flex flex-col gap-2 mx-4"
      >
        {/* Close button */}
        <button 
          onClick={close} 
          aria-label="Close menu"
          className="absolute right-2 top-2 h-8 w-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors text-white text-lg font-bold"
        >
          ✕
        </button>

        {/* Menu Items */}
        <div className="pt-8 flex flex-col gap-1">
          <button 
            onClick={() => go("/")} 
            className="p-3 rounded-lg w-full text-left text-lg font-bold font-[Inter] hover:bg-white/10 transition-colors"
          >
            Home
          </button>
          
          <button 
            onClick={() => go("/WhatWeDo")} 
            className="p-3 rounded-lg w-full text-left text-lg font-bold font-[Inter] hover:bg-white/10 transition-colors"
          >
            What We Do
          </button>
          
          <button 
            onClick={() => go("/AboutUs")} 
            className="p-3 rounded-lg w-full text-left text-lg font-bold font-[Inter] hover:bg-white/10 transition-colors"
          >
            About Us
          </button>
          
          <button 
            onClick={() => go("/Careers")} 
            className="p-3 rounded-lg w-full text-left text-lg font-bold font-[Inter] hover:bg-white/10 transition-colors"
          >
            Careers
          </button>
          
          <button 
            onClick={() => go("/LogIn")} 
            className="p-3 rounded-lg w-full text-left text-lg font-bold font-[Inter] hover:bg-white/10 transition-colors mt-2 border-t border-white/20 pt-4"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}