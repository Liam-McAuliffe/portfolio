'use client';

import React, { useState, Suspense, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { LiamJrModel } from './LiamJrModel';
import * as THREE from 'three';

function ModelLoader() {
  return (
    <Html center style={{ color: '#888888', fontSize: '0.8rem' }}>
      Loading...
    </Html>
  );
}

function ModelScene({ avatarRef }) {
  const modelGroup = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!avatarRef.current) return;

      const rect = avatarRef.current.getBoundingClientRect();

      mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      mouse.current.x = Math.max(-1, Math.min(1, mouse.current.x));
      mouse.current.y = Math.max(-1, Math.min(1, mouse.current.y));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [avatarRef]);

  useFrame(() => {
    if (!modelGroup.current) return;

    const targetY = mouse.current.x * Math.PI * 0.2;
    const targetX = mouse.current.y * Math.PI * 0.15 * -1;

    modelGroup.current.rotation.y = THREE.MathUtils.lerp(
      modelGroup.current.rotation.y,
      targetY,
      0.08
    );
    modelGroup.current.rotation.x = THREE.MathUtils.lerp(
      modelGroup.current.rotation.x,
      targetX,
      0.08
    );
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 3, 5]} intensity={1.2} />
      <directionalLight
        position={[-3, -1, -3]}
        intensity={0.6}
        color="#FF6F61"
      />
      <Suspense fallback={<ModelLoader />}>
        <group ref={modelGroup} scale={0.8}>
          <LiamJrModel />
        </group>
      </Suspense>
    </>
  );
}

export default function FlippingAvatar() {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => setIsFlipped(!isFlipped);
  const cardBackBgColor = '#1E1E2F';
  const avatarRef = useRef();

  return (
    <div ref={avatarRef} style={{ perspective: '1200px' }}>
      <motion.div
        className="relative h-64 w-64 cursor-pointer"
        onClick={handleClick}
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        <motion.div
          className="absolute w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-teal dark:border-teal"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Image
            src="/headshot.webp"
            alt="Liam McAuliffe headshot"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </motion.div>
        <motion.div
          className="absolute w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-coral dark:border-coral"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: cardBackBgColor,
          }}
        >
          <div
            className="w-full h-full"
            style={{ pointerEvents: isFlipped ? 'auto' : 'none' }}
          >
            <Canvas camera={{ position: [0, 0, 1.5], fov: 50 }}>
              <color attach="background" args={[cardBackBgColor]} />
              <ModelScene avatarRef={avatarRef} />
            </Canvas>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
