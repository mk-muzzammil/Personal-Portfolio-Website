import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(isMobile ? 2000 : 5000), { radius: 1.2 })
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Slower rotation on mobile for better performance
      const rotationSpeed = isMobile ? delta / 20 : delta / 10;
      ref.current.rotation.x -= rotationSpeed;
      ref.current.rotation.y -= rotationSpeed * 1.5;
    }
  });

  return (
    <group>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#FFFFFF"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [renderStars, setRenderStars] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    const isLowEnd = navigator.hardwareConcurrency < 4;

    setIsMobile(mediaQuery.matches);

    // Disable stars on very low-end devices to improve performance
    if (mediaQuery.matches && isLowEnd) {
      setRenderStars(false);
    }

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      if (event.matches && isLowEnd) {
        setRenderStars(false);
      } else {
        setRenderStars(true);
      }
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (!renderStars) return null;

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, isMobile ? 1 : 1.5]}
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          alpha: true,
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
