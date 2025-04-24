'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function SceneContent() {
  const groupRef = useRef();

  const maskTexture = useTexture('/earth-land-mask.png');

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  const oceanColor = '#71cfe7';
  const landColor = '#384e1d';
  const lightColor = '#F5F5F5';

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        color={lightColor}
      />
      <group ref={groupRef} scale={1.4}>
        <mesh scale={0.995}>
          <sphereGeometry args={[1, 32, 32]} />

          <meshToonMaterial color={landColor} />
        </mesh>
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={oceanColor}
            map={maskTexture}
            alphaMap={maskTexture}
            transparent={true}
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
      </group>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        enableDamping={true}
        dampingFactor={0.1}
      />
    </>
  );
}

export default function HeroAnimation() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }} gl={{ antialias: true }}>
      <color attach="background" args={[new THREE.Color('#1E1E2F')]} />
      <SceneContent />
    </Canvas>
  );
}
