"use client";

import { useState } from "react";
import { FileItem } from "../data/portfolioData";
import ParticleBackground from "../components/ui/ParticleBackground";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Workspace from "../components/sections/Workspace";
import FolderView from "../components/sections/FolderView";

export default function Home() {
    const [path, setPath] = useState<FileItem[]>([]);

    const handleNavigate = (item: FileItem) => {
        if (item.type === "folder") {
            setPath([...path, item]);
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            window.open(item.url || `/${item.title}`, "_blank");
        }
    };

    const goBack = () => setPath(path.slice(0, -1));

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    if (path.length === 0) {
        return (
            <main className="min-h-screen text-white font-sans relative overflow-x-hidden selection:bg-purple-500/30">
                <ParticleBackground />

                {/* Navbar: w-full and box-border guarantees it perfectly fits the screen */}
                <nav className="fixed top-0 left-0 w-full box-border py-5 px-4 md:py-10 md:px-12 flex justify-between items-center z-50 bg-transparent">

                    {/* 🚀 BULLETPROOF LOGO CONTAINER 🚀 */}
                    <div className="flex-1 overflow-hidden mr-3 md:mr-6">
                        <div className="text-[#c084fc] font-bold tracking-[0.1em] md:tracking-[0.4em] text-[10px] md:text-lg truncate drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]">
                            N . K . A . L . A . R . I . Y . A
                        </div>
                    </div>

                    {/* 🚀 UPGRADED PREMIUM NAVIGATION BUTTONS (Mobile Click Animations Added) 🚀 */}
                    <div className="flex gap-1.5 md:gap-5 items-center shrink-0 pr-1 md:pr-0">

                        {/* ABOUT BUTTON */}
                        <button
                            onClick={() => scrollToSection('about')}
                            /* Added active: and focus: states for mobile tap glow */
                            className="group relative px-2.5 py-1.5 md:px-6 md:py-2.5 rounded-full overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md outline-none transition-all duration-300 hover:scale-105 focus:scale-105 active:scale-95 hover:border-[#a855f7]/60 focus:border-[#a855f7]/60 active:border-[#a855f7]/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] focus:shadow-[0_0_20px_rgba(168,85,247,0.4)] active:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                        >
                            {/* Added group-active: and group-focus: for the background gradient on mobile click */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/0 via-[#a855f7]/20 to-[#3b82f6]/0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-opacity duration-500"></div>

                            {/* Removed 'uppercase' - now it will exactly match "About" */}
                            <span className="relative z-10 font-bold text-[8px] md:text-xs tracking-wider md:tracking-[0.15em] text-white/80 group-hover:text-white group-focus:text-white group-active:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,1)] group-focus:drop-shadow-[0_0_8px_rgba(255,255,255,1)] group-active:drop-shadow-[0_0_8px_rgba(255,255,255,1)] transition-all duration-300">
                                About
                            </span>
                        </button>

                        {/* WORKSPACE BUTTON */}
                        <button
                            onClick={() => scrollToSection('workspace')}
                            /* Added active: and focus: states for mobile tap glow */
                            className="group relative px-2.5 py-1.5 md:px-6 md:py-2.5 rounded-full overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md outline-none transition-all duration-300 hover:scale-105 focus:scale-105 active:scale-95 hover:border-[#3b82f6]/60 focus:border-[#3b82f6]/60 active:border-[#3b82f6]/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] focus:shadow-[0_0_20px_rgba(59,130,246,0.4)] active:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                        >
                            {/* Added group-active: and group-focus: for the background gradient on mobile click */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/0 via-[#3b82f6]/20 to-[#a855f7]/0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-opacity duration-500"></div>

                            {/* Removed 'uppercase' - now it will exactly match "Workspace" */}
                            <span className="relative z-10 font-bold text-[8px] md:text-xs tracking-wider md:tracking-[0.15em] text-white/80 group-hover:text-white group-focus:text-white group-active:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,1)] group-focus:drop-shadow-[0_0_8px_rgba(255,255,255,1)] group-active:drop-shadow-[0_0_8px_rgba(255,255,255,1)] transition-all duration-300">
                                Workspace
                            </span>
                        </button>

                    </div>
                </nav>

                {/* Fixed Logo N bottom left */}
                <div className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white font-bold bg-[#0a0a0a] shadow-lg">
                    N
                </div>

                <Hero />
                <About />
                <Workspace onNavigate={handleNavigate} />
            </main>
        );
    }

    return (
        <FolderView path={path} goBack={goBack} onNavigate={handleNavigate} />
    );
}