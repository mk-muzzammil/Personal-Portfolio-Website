import { Suspense, useEffect, useState, useRef } from "react";
import CanvasLoader from "../Loader";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// Progressive loading for model
const ModelLoader = ({ ismobile, url }) => {
  const { scene } = useGLTF(url, true); // Force GLB parsing
  const modelRef = useRef();
  const { gl } = useThree();

  useEffect(() => {
    if (modelRef.current) {
      // Optimize model by reducing memory usage
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material.dispose();
          child.geometry.dispose();
        }
      });
    }

    // Force garbage collection through rendering
    gl.renderLists.dispose();
  }, [scene, gl]);

  return (
    <mesh ref={modelRef}>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={2} />
      <primitive
        object={scene}
        scale={ismobile ? 0.6 : 0.75}
        position={ismobile ? [-2, -2.5, -2.2] : [0, -3, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [ismobile, setIsmobile] = useState(false);
  const [modelFailed, setModelFailed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsmobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsmobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Check if WebGL is supported
    const checkWebGLSupport = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl"))
        );
      } catch (e) {
        return false;
      }
    };

    // Set model loading failure if WebGL is not supported
    if (!checkWebGLSupport()) {
      setModelFailed(true);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // If model failed to load or WebGL is not supported, render fallback
  if (modelFailed) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p>3D model not supported on this device</p>
      </div>
    );
  }

  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: ismobile ? 35 : 25 }}
      dpr={[1, ismobile ? 1.5 : 2]}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
        antialias: false,
        alpha: true,
      }}
      onError={() => setModelFailed(true)}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ModelLoader ismobile={ismobile} url="/desktop_pc/scene.gltf" />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
