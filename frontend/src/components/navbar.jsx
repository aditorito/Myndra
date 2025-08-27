import { useNavigate } from "react-router-dom";

export function navbar() {
    const navigate = useNavigate();
    return <>
        <header className="relative top-0 bg-[#075056] opacity-70 text-white z-40 ">
            <div className="mx-auto w-full px-4 h-16 flex   items-center justify-between">
                <button
                    onClick={() => navigate("/")}
                    aria-label="Myndra"
                    className="h-8 w-44 inline-flex items-center"
                >
                    <img
                        src="/assets/images/myndralogotypebt_1.png"
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
                    <img src="/assets/images/hamburger.svg" alt="menu" className="h-5 w-5" />
                </button>
            </div>
        </header></>

}