import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import {
  detectDeviceCapabilities,
  getMobileOptimizedSettings,
} from "../../utils/ThreeJsUtils";
import CanvasLoader from "../Loader";

const ThreeJSWrapper = ({ children, fallback, canvasProps = {} }) => {
  const [deviceCapabilities, setDeviceCapabilities] = useState({
    isMobile: false,
    isLowPerformance: false,
    hasWebGL: true,
    glSettings: {},
    dpr: [1, 2],
  });

  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    // Detect device capabilities on client-side only
    const capabilities = detectDeviceCapabilities();
    setDeviceCapabilities(capabilities);
    setIsLoading(false);

    // Set fallback for non-WebGL devices
    if (!capabilities.hasWebGL) {
      setLoadError(true);
    }
  }, []);

  // Show loader while detecting capabilities
  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // Show fallback content if WebGL is not supported or there was an error
  if (loadError || !deviceCapabilities.hasWebGL) {
    return (
      fallback || (
        <div className="w-full h-full flex items-center justify-center">
          <p>3D content not supported on this device</p>
        </div>
      )
    );
  }

  // Get optimized settings based on device capabilities
  const { isMobile, isLowPerformance } = deviceCapabilities;
  const optimizedSettings = getMobileOptimizedSettings(
    isMobile,
    isLowPerformance
  );

  return (
    <Canvas
      frameLoop={optimizedSettings.frameLoop}
      dpr={deviceCapabilities.dpr}
      gl={deviceCapabilities.glSettings}
      onError={() => setLoadError(true)}
      {...canvasProps}
    >
      <Suspense fallback={<CanvasLoader />}>{children}</Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ThreeJSWrapper;
