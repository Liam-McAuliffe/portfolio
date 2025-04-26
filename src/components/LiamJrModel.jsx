import React from 'react';
import { useGLTF } from '@react-three/drei';

export function LiamJrModel(props) {
  const { nodes, materials } = useGLTF('/liam-jr.glb');
  return (
    <group {...props} dispose={null}>
      <group scale={0.485}>
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials['Material.001']}
        />
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials['Material.002']}
        />
        <mesh
          geometry={nodes.Cube002_2.geometry}
          material={materials['Material.003']}
        />
        <mesh
          geometry={nodes.Cube002_3.geometry}
          material={materials['Material.004']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/liam-jr.glb');
