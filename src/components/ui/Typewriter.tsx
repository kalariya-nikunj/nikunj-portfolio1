"use client";
import { useState, useEffect } from "react";

export default function Typewriter({ words }: { words: string[] }) {
    const [currentWord, setCurrentWord] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 100;
        const currentFullWord = words[wordIndex];

        const timer = setTimeout(() => {
            if (!isDeleting && currentWord === currentFullWord) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && currentWord === "") {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            } else {
                setCurrentWord(currentFullWord.substring(0, currentWord.length + (isDeleting ? -1 : 1)));
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentWord, isDeleting, wordIndex, words]);

    return (
        /* EXACT purple-to-blue gradient matched from your screenshot */
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#60a5fa] font-bold">
            {currentWord}
            <span className="animate-pulse text-[#9ca3af] ml-1">|</span>
        </span>
    );
}