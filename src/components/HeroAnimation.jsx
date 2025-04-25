'use client';

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useTheme } from '@/context/ThemeContext';
import { EarthModel } from './EarthModel';
import { motion, AnimatePresence } from 'framer-motion';

function Loader() {
  return (
    <Html center style={{ color: '#888888', fontSize: '0.8rem' }}>
      Loading 3D Model...
    </Html>
  );
}

function SceneContent({ theme }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current && !state.controls?.enabled) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  const lightColor = '#F5F5F5';
  const secondaryColor = '#FF6F61';

  const modelVariants = {
    initial: { opacity: 0, scale: 0.8, rotateY: -Math.PI / 6 },
    animate: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateY: Math.PI / 6,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  return (
    <>
      <ambientLight intensity={theme === 'dark' ? 0.5 : 0.6} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={theme === 'dark' ? 1.2 : 1.5}
        color={lightColor}
      />
      <directionalLight
        position={[-3, -3, 2]}
        intensity={0.4}
        color={secondaryColor}
      />
      <group
        ref={groupRef}
        scale={1.3}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <AnimatePresence mode="wait">
            (
            <motion.group
              key="earth"
              variants={modelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <group>
                <EarthModel scale={1.0} />
              </group>
            </motion.group>
            )
          </AnimatePresence>
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
    <Canvas
      camera={{ position: [0, 0.5, 4.5], fov: 50 }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={[theme === 'dark' ? darkBg : lightBg]} />
      <SceneContent theme={theme} />
    </Canvas>
  );
}
