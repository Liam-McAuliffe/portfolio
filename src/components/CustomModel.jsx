import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/low_poly_earth.glb');

  return (
    <group {...props} dispose={null}>
      {nodes.Scene && <primitive object={nodes.Scene} />}
    </group>
  );
}

useGLTF.preload('/low_poly_earth.glb');
