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

            </div>
        </section>
    );
}