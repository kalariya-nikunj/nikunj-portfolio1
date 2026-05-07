"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Slim includes standard links

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    // Initialize particles engine once
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log("Particles container loaded", container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "#020202", // Pure black background
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: { enable: true, mode: "push" },
                    onHover: { enable: true, mode: "repulse" },
                },
                modes: {
                    push: { quantity: 4 },
                    repulse: { distance: 100, duration: 0.4 },
                },
            },
            particles: {
                color: {
                    value: "#888888", // Subtle dot color
                },
                links: {
                    color: "#888888", // Collaboration link color
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: { default: "bounce" },
                    random: true,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: { enable: true, area: 1000 },
                    value: 100, // Dot density
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 2 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
                className="absolute inset-0 z-0 pointer-events-none"
            />
        );
    }

    return (
        <div className="absolute inset-0 z-0 pointer-events-none bg-[#020202]"></div>
    );
};

export default ParticleBackground;