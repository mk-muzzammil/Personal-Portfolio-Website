// ThreeJSUtils.js - Place this in your utils folder
export const detectDeviceCapabilities = () => {
  // Check if we're in a browser environment
  if (typeof window === "undefined")
    return { isMobile: false, isLowPerformance: false };

  // Check for mobile
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768;

  // Check for low performance device
  const isLowPerformance =
    navigator.hardwareConcurrency <= 4 ||
    (isMobile && navigator.deviceMemory && navigator.deviceMemory < 4);

  // Check WebGL support
  const hasWebGL = (() => {
    try {
      const canvas = document.createElement("canvas");
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
    } catch (e) {
      return false;
    }
  })();

  return {
    isMobile,
    isLowPerformance,
    hasWebGL,
    // Base settings for Three.js based on device capabilities
    glSettings: {
      powerPreference: isLowPerformance ? "low-power" : "high-performance",
      antialias: !isLowPerformance,
      alpha: true,
      preserveDrawingBuffer: true,
    },
    dpr: isMobile
      ? isLowPerformance
        ? [0.5, 1]
        : [1, 1.5]
      : isLowPerformance
      ? [1, 1.5]
      : [1, 2],
  };
};

// Memory cleanup helper
export const cleanupThreeJSMemory = (scene, renderer) => {
  if (!scene || !renderer) return;

  // Dispose materials and geometries
  scene.traverse((object) => {
    if (!object.isMesh) return;

    if (object.geometry) {
      object.geometry.dispose();
    }

    if (object.material) {
      // Handle materials
      if (Array.isArray(object.material)) {
        object.material.forEach((material) => disposeMaterial(material));
      } else {
        disposeMaterial(object.material);
      }
    }
  });

  // Force renderer to clean up
  renderer.dispose();
  renderer.forceContextLoss();
  renderer.renderLists.dispose();
};

// Helper to dispose materials and their textures
const disposeMaterial = (material) => {
  if (!material) return;

  // Dispose textures
  Object.keys(material).forEach((prop) => {
    if (!material[prop]) return;
    if (material[prop].isTexture) {
      material[prop].dispose();
    }
  });

  // Dispose material
  material.dispose();
};

// Progressive loading monitor
export const createProgressiveLoader = (onProgress, onError) => {
  return (url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "arraybuffer";

      xhr.onprogress = (event) => {
        if (event.lengthComputable && onProgress) {
          const percentage = (event.loaded / event.total) * 100;
          onProgress(percentage);
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          if (onError) onError(`Error ${xhr.status}: ${xhr.statusText}`);
          reject(new Error(`Error ${xhr.status}: ${xhr.statusText}`));
        }
      };

      xhr.onerror = () => {
        if (onError) onError("Network error");
        reject(new Error("Network error"));
      };

      xhr.send();
    });
  };
};

// Mobile first renderer settings
export const getMobileOptimizedSettings = (isMobile, isLowPerformance) => {
  return {
    // Reduce particle count for stars
    particleCount: isMobile ? (isLowPerformance ? 1000 : 2000) : 5000,

    // Control animation frameloop
    frameLoop: isMobile ? "demand" : "always",

    // Manage shadow quality
    shadowMapSize: isMobile ? 1024 : 2048,

    // Adjust camera field of view
    fov: isMobile ? 55 : 45,

    // Control auto-rotation speed if present
    autoRotateSpeed: isMobile ? 0.5 : 1,
  };
};
