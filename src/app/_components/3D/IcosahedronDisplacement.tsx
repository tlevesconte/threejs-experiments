import { useFrame } from "@react-three/fiber";
import React, { useRef, useMemo } from "react";

// Shaders
import fragmentShader from "@/app/_components/3D/shaders/FragmentShader";
import vertexShader from "@/app/_components/3D/shaders/VertexShader";

const IcosahedronDisplacement = () => {
  const meshRef = useRef<any>(null);

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
    }),
    [],
  );

  useFrame((state) => {
    const { clock } = state;
    if (meshRef.current !== null) {
      meshRef.current.material.uniforms.u_time.value =
        0.4 * clock.getElapsedTime();
      meshRef.current.material.uniforms.u_intensity.value = 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1.5}>
      <icosahedronGeometry args={[2.9, 20]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  );
};

export default IcosahedronDisplacement;