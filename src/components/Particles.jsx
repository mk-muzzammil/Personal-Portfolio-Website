import { lazy, Suspense, useEffect, useState, useCallback } from "react";

const Particles = lazy(() => import("@tsparticles/react"));
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = ({ id }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);

  const options = {
    background: { color: { value: "#121212" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "repulse" },
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        push: { distance: 200, duration: 15 },
        grab: { distance: 150 },
      },
    },
    particles: {
      color: { value: "#FFFFFF" },
      links: {
        color: "#FFFFFF",
        distance: 120,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.8, // Slower for better performance
        random: true,
        outModes: { default: "bounce" },
      },
      number: {
        density: { enable: true },
        value: window.innerWidth < 768 ? 50 : 100, // Fewer particles on mobile
      },
      opacity: { value: 0.8 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <Suspense fallback={<div className="h-screen w-full bg-[#121212]" />}>
      {init && <Particles id={id} init={particlesLoaded} options={options} />}
    </Suspense>
  );
};

export default ParticlesComponent;
