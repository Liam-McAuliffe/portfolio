'use client';

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useTheme } from '@/context/ThemeContext';
import { Model } from './CustomModel';

function SceneContent({ theme }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current && !state.controls?.enabled) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  const lightColor = '#F5F5F5';
  const secondaryColor = '#FF6F61';

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        color={lightColor}
      />
      <directionalLight
        position={[-3, -3, 2]}
        intensity={0.4}
        color={secondaryColor}
      />
      <group
        ref={groupRef}
        scale={1.0}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      >
        <Suspense fallback={null}>
          <Model scale={1.0} />
        </Suspense>
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
  const { theme } = useTheme();
  const darkBg = '#2b2b3a';
  const lightBg = '#1e1e2f';

  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }} gl={{ antialias: true }}>
      <color attach="background" args={[theme === 'dark' ? darkBg : lightBg]} />
      <SceneContent theme={theme} />
    </Canvas>
  );
}
