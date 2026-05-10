"use client";
import { Folder, ChevronLeft } from "lucide-react";
import { FileItem } from "../../data/portfolioData";
import ParticleBackground from "../ui/ParticleBackground";
import FileIcon from "../ui/FileIcon";

interface FolderViewProps {
    path: FileItem[];
    goBack: () => void;
    onNavigate: (item: FileItem) => void;
}

const FolderView = ({ path, goBack, onNavigate }: FolderViewProps) => {
    const currentFolder = path[path.length - 1];

    // 🌟 MAGIC THUMBNAIL ENGINE 🌟
    const renderMediaOrIcon = (item: FileItem) => {
        const isLocalImage = item.url && (item.url.toLowerCase().endsWith('.png') || item.url.toLowerCase().endsWith('.jpg') || item.url.toLowerCase().endsWith('.jpeg'));
        const isLocalVideo = item.type === 'video' && item.url && !item.url.startsWith('http');

        if (isLocalImage) {
            return (
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-[0_10px_15px_rgba(0,0,0,0.5)] border border-white/20">
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                </div>
            );
        }

        if (isLocalVideo) {
            return (
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-[0_10px_15px_rgba(0,0,0,0.5)] border border-white/20 relative bg-black">
                    {/* Auto-playing muted video preview */}
                    <video src={item.url} className="w-full h-full object-cover opacity-80" autoPlay muted loop playsInline />
                    {/* Glassmorphism Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/40">
                            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1"></div>
                        </div>
                    </div>
                </div>
            );
        }

        // TS Bypass to prevent "title does not exist" errors
        return <FileIcon type={item.type} {...({ title: item.title } as any)} />;
    };

    return (
        <main className="min-h-screen bg-[#020202] text-white p-6 md:p-12 font-sans relative overflow-hidden">
            <ParticleBackground />

            {/* Standard Header View */}
            <div className="relative z-10 mb-12 border-b border-white/10 pb-6 flex items-center gap-6 mt-16 md:mt-8">
                <button onClick={goBack} className="flex items-center text-white/80 hover:text-white bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-xl font-bold tracking-wider transition-all text-sm uppercase border border-white/10 shadow-lg backdrop-blur-md">
                    <ChevronLeft size={18} className="mr-1" /> Back
                </button>
                <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-white drop-shadow-md">{currentFolder.title}</h1>
            </div>

            {/* Details Box */}
            {currentFolder.description && (
                <div className="relative z-10 mb-12 bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl max-w-4xl backdrop-blur-xl">
                    <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> Folder Details
                    </h3>
                    <p className="text-white/80 leading-relaxed md:text-lg">{currentFolder.description}</p>
                </div>
            )}

            {/* Grid */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {!currentFolder.children || currentFolder.children.length === 0 ? (
                    <div className="col-span-full py-20 flex flex-col items-center opacity-40">
                        <Folder size={80} className="mb-4 text-[#2188ff]" fill="currentColor" strokeWidth={0} />
                        <p className="text-lg tracking-widest uppercase font-bold text-white">Folder is empty</p>
                    </div>
                ) : (
                    currentFolder.children.map((item: FileItem) => (
                        <div key={item.id} onClick={() => onNavigate(item)} className="group cursor-pointer bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 p-8 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 shadow-lg backdrop-blur-sm">
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {/* 🔥 WE INJECTED THE THUMBNAIL ENGINE HERE 🔥 */}
                                {renderMediaOrIcon(item)}
                            </div>
                            <span className="font-bold text-center text-xs md:text-sm text-white/80 group-hover:text-white tracking-wider line-clamp-2">
                                {item.title}
                            </span>
                        </div>
                    ))
                )}
            </div>
        </main>
    );
};

export default FolderView;