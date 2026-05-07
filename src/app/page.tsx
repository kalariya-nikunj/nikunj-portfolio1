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

                {/* Navbar: Clean, Bold White Buttons on the Top-Right */}
                <nav className="fixed top-0 w-full p-10 px-12 flex justify-between items-start z-50 bg-transparent">
                    {/* Left Side: Logo Branding */}
                    <div className="text-[#c084fc] font-bold tracking-[0.4em] text-sm md:text-lg drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]">
                        N . K . A . L . A . R . I . Y . A
                    </div>

                    {/* Right Side: Navigation buttons matching your screenshot */}
                    <div className="flex gap-10 items-center text-white font-bold text-sm md:text-base tracking-wide">
                        <button onClick={() => scrollToSection('about')} className="hover:opacity-70 transition-opacity">About</button>
                        <button onClick={() => scrollToSection('workspace')} className="hover:opacity-70 transition-opacity">Workspace</button>
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