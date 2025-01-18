import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";

function Planet() {
  const planet = useGLTF("/planet/scene.gltf");
  return (
    <mesh>
      <primitive object={planet.scene} c />
    </mesh>
  );
}

const PlanetCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ fov: 10, near: 0.01, far: 200, position: [-4, 3, -10] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback="loading">
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Planet />
      </Suspense>
    </Canvas>
  );
};

export default PlanetCanvas;
