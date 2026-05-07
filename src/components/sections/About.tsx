import { Code, Cpu, Globe } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
            {/* Changes made: 
        1. Reduced width from max-w-4xl to max-w-[750px]
        2. Added md:min-h-[500px] to force that perfectly centered, square-shaped box format
        3. Kept flex flex-col justify-center so text stays perfectly middle-aligned
      */}
            <div className="w-full max-w-[750px] md:min-h-[500px] flex flex-col justify-center bg-[#0a0a0a] border border-[#1f1f1f] rounded-3xl p-10 md:p-14 shadow-2xl text-left">

                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-white">
                    About Me
                </h2>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
                    I am a passionate software engineer focused on building intelligent, high-performance digital solutions.
                    With a strong foundation in both front-end aesthetics and complex back-end algorithms, I specialize in bridging
                    the gap between human-centric design and powerful machine learning models.
                </p>

                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-5 py-2.5 bg-blue-900/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold">
                        <Globe size={16} /> Web Development
                    </div>
                    <div className="flex items-center gap-2 px-5 py-2.5 bg-purple-900/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-semibold">
                        <Cpu size={16} /> Artificial Intelligence
                    </div>
                    <div className="flex items-center gap-2 px-5 py-2.5 bg-pink-900/10 border border-pink-500/30 rounded-full text-pink-400 text-sm font-semibold">
                        <Code size={16} /> Machine Learning
                    </div>
                </div>

            </div>
        </section>
    );
}