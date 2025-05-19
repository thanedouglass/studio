// src/components/particle-background.tsx
"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.

export const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  // const particlesLoaded = useCallback(async (container: Container | undefined) => {
  //   await console.log(container);
  // }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      // loaded={particlesLoaded} // Optional: if you need to do something after particles are loaded
      options={{
        background: {
          color: {
            value: "hsl(var(--background))", // Using theme background color
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "hsl(var(--secondary))", // Using theme secondary color (brushed gold)
          },
          links: {
            color: "hsl(var(--primary))", // Using theme primary color (cherry blossom pink)
            distance: 120,
            enable: true,
            opacity: 0.3, // Slightly reduced opacity for subtlety
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5, // Slightly reduced speed
            direction: "none",
            outModes: "bounce",
          },
          number: {
            value: 40, // Reduced number for less clutter
          },
          opacity: {
            value: 0.5, // Slightly reduced opacity
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 }, // Slightly smaller max size
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-[-1]" // Position behind content
    />
  );
};
