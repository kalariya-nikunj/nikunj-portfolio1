"use client";

import { MY_DATA, FileItem } from "../../data/portfolioData";
import FileIcon from "../ui/FileIcon";

interface WorkspaceProps {
    onNavigate: (item: FileItem) => void;
}

const Workspace = ({ onNavigate }: WorkspaceProps) => {
    return (
        <section
            id="workspace"
            className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10 scroll-mt-24"
        >
            <h2 className="text-3xl md:text-4xl font-bold tracking-[0.2em] uppercase mb-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] text-center">
                Workspace
            </h2>

            <div className="w-full max-w-4xl bg-white/5 border border-white/5 rounded-3xl p-10 md:p-16 backdrop-blur-md shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
                    {MY_DATA.map((folder: FileItem) => (
                        <div
                            key={folder.id}
                            onClick={() => onNavigate(folder)}
                            className="group flex flex-col items-center cursor-pointer outline-none"
                        >
                            <div className="mb-4 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
                                <FileIcon type={folder.type} />
                            </div>

                            <span className="text-white/80 group-hover:text-white text-sm font-semibold tracking-wider text-center transition-colors">
                                {folder.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workspace;