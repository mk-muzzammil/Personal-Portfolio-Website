import { motion } from "framer-motion";
import { useEffect, useState, useMemo, lazy, Suspense } from "react";
import { styles } from "../styles";

const ComputersCanvas = lazy(() =>
  import("./canvas").then((mod) => ({ default: mod.ComputersCanvas }))
);

const Hero = () => {
  const phrases = [
    "Full Stack Web Developer",
    "React & Next.js Specialist",
    "Frontend Developer",
    "Backend Developer ",
    "Shopify & WordPress Developer",
    "Github Version Control Expert",
    "Data Science Entusiast",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentPhraseIndex]);

  const bounceAnimation = useMemo(
    () => ({
      y: [0, 24, 0],
      transition: { duration: 1.5, repeat: Infinity, repeatType: "loop" },
    }),
    []
  );

  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center items-center z-10">
      <div
        className={`${styles.paddingX} absolute inset-0 max-w-7xl top-[120px] mx-auto flex flex-row justify-center items-start gap-5 z-0`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-[#E0E0E0] text-center`}>
            Hi I'm <span className="text-[#f05454]">Muhammad Muzzammil</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-[#E0E0E0] text-center`}
          >
            {phrases[currentPhraseIndex]}
          </p>
        </div>
      </div>

      {/* Lazy-loaded 3D Canvas */}
      <Suspense fallback={<div className="absolute inset-0 bg-[#181818]" />}>
        <ComputersCanvas className="absolute inset-0 z-20" />
      </Suspense>

      <div className="absolute bottom-10 flex justify-center items-center w-full z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] border-4 border-[#E0E0E0] rounded-3xl flex justify-center items-center p-2">
            <motion.div
              animate={bounceAnimation}
              className="w-3 h-3 rounded-full bg-[#E0E0E0]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
