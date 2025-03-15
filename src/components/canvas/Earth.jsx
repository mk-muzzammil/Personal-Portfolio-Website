import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf", true); // Use true for draco compression
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (earth) {
      setLoaded(true);
    }
  }, [earth]);

  if (!loaded) return null;

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [modelFailed, setModelFailed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Fallback if model fails to load
  if (modelFailed) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p>Earth model not available on this device</p>
      </div>
    );
  }

  return (
    <Canvas
      shadows
      frameloop={isMobile ? "demand" : "always"}
      dpr={[1, isMobile ? 1.2 : 2]}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
        antialias: false,
        alpha: true,
      }}
      camera={{
        fov: isMobile ? 55 : 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      onError={() => setModelFailed(true)}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5} // Slower rotation for better performance
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
