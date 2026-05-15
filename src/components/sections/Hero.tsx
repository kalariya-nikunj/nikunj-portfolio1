"use client";
import Typewriter from "../ui/Typewriter";

export default function Hero() {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10 pt-20">
            <div className="flex flex-col items-center">

                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    Nikunj Kalariya
                </h1>

                <h2 className="text-2xl md:text-3xl font-medium mb-16 h-10 tracking-wide">
                    <Typewriter words={["Full Stack Developer", "AI Engineer", "ML Developer"]} />
                </h2>

                {/* The Perfected Explore Button */}
                <button
                    onClick={() => scrollToSection('about')}
                    className="group relative overflow-hidden rounded-full border border-[#7e22ce] bg-[#03000a] px-10 py-3 transition-all duration-300 ease-out hover:border-transparent hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                >
                    {/* Purple-to-blue gradient fill on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-[#3b82f6] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"></div>

                    {/* Explicitly pure white text so it NEVER turns black */}
                    <span className="relative z-10 text-[#ffffff] font-bold text-sm tracking-[0.25em] uppercase">
                        EXPLORE
                    </span>
                </button>

                {/* 🚀 EXACTLY 1 CM SPACING (32px drop, 40px gap) WITH HOVER TEXT 🚀 */}
                <div className="mt-[32px] flex flex-wrap items-center justify-center gap-[40px] z-20">

                    {/* GitHub */}
                    <a href="https://github.com/kalariya-nikunj" target="_blank" rel="noopener noreferrer"
                        className="relative flex flex-col items-center justify-center transition-transform hover:-translate-y-1 hover:scale-110 group">
                        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-[#a855f7] group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
                        </svg>
                        {/* Animated Hover Text */}
                        <span className="absolute top-[120%] text-[11px] font-bold tracking-widest text-white uppercase opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
                            Github
                        </span>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/nikunj-kalariya-218b36383?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer"
                        className="relative flex flex-col items-center justify-center transition-transform hover:-translate-y-1 hover:scale-110 group">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="text-[#7e22ce] group-hover:text-[#3b82f6] group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        {/* Animated Hover Text */}
                        <span className="absolute top-[120%] text-[11px] font-bold tracking-widest text-[#3b82f6] uppercase opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
                            LinkedIn
                        </span>
                    </a>

                    {/* LeetCode */}
                    <a href="https://leetcode.com/u/NikunjKalariya/" target="_blank" rel="noopener noreferrer"
                        className="relative flex flex-col items-center justify-center transition-transform hover:-translate-y-1 hover:scale-110 group">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="text-[#a855f7] group-hover:text-[#f59e0b] group-hover:drop-shadow-[0_0_10px_rgba(245,158,11,0.8)] transition-all">
                            <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-3.67-1.475c-1.331 0-2.661.52-3.67 1.533L3.81 10.454a5.185 5.185 0 0 0-1.528 3.736c0 1.402.52 2.804 1.528 3.826l4.318 4.38c1.01 1.011 2.379 1.528 3.748 1.528s2.736-.517 3.746-1.528l2.64-2.607c.514-.514.496-1.365-.039-1.9-.535-.536-1.386-.554-1.921-.06zM20.5 14.7H9.288c-.765 0-1.388.623-1.388 1.389s.623 1.389 1.388 1.389h11.212c.765 0 1.388-.623 1.388-1.389s-.623-1.389-1.388-1.389z" />
                        </svg>
                        {/* Animated Hover Text */}
                        <span className="absolute top-[120%] text-[11px] font-bold tracking-widest text-[#f59e0b] uppercase opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
                            LeetCode
                        </span>
                    </a>

                    {/* Codeforces */}
                    <a href="https://codeforces.com/profile/Nikunj17" target="_blank" rel="noopener noreferrer"
                        className="relative flex flex-col items-center justify-center transition-transform hover:-translate-y-1 hover:scale-110 group">
                        <svg viewBox="0 0 24 24" width="28" height="28" className="opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">
                            <rect x="4" y="13" width="4" height="8" fill="#ef4444" rx="1" />
                            <rect x="10" y="7" width="4" height="14" fill="#3b82f6" rx="1" />
                            <rect x="16" y="3" width="4" height="18" fill="#eab308" rx="1" />
                        </svg>
                        {/* Animated Hover Text */}
                        <span className="absolute top-[120%] text-[11px] font-bold tracking-widest text-white uppercase opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
                            Codeforces
                        </span>
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/ll_royal___king_ll?igsh=cjI0eTJocHFhYnFs" target="_blank" rel="noopener noreferrer"
                        className="relative flex flex-col items-center justify-center transition-transform hover:-translate-y-1 hover:scale-110 group">
                        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-[#a855f7] group-hover:text-[#ec4899] group-hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] transition-all">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        {/* Animated Hover Text */}
                        <span className="absolute top-[120%] text-[11px] font-bold tracking-widest text-[#ec4899] uppercase opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
                            Instagram
                        </span>
                    </a>

                </div>

            </div>
        </section>
    );
}