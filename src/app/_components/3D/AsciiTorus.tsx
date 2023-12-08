import React, { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { AsciiEffect } from "three-stdlib";

// Constants for readability
const ASCII_CHARACTERS = " .:-+*=%@#";
const ASCII_OPTIONS = {
  /* your options here */
};
const ROTATION_SPEED_Y = 0.004 + 0.5 * 0.0000000005;

interface AsciiRendererProps {
  renderIndex?: number;
}

const AsciiRenderer: React.FC<AsciiRendererProps> = ({ renderIndex = 1 }) => {
  const { gl, size, scene, camera } = useThree();

  const effect = useMemo(() => {
    const effect = new AsciiEffect(gl, ASCII_CHARACTERS, ASCII_OPTIONS);
    effect.domElement.style.position = "absolute";
    effect.domElement.style.top = "0px";
    effect.domElement.style.left = "0px";
    effect.domElement.style.color = "white";
    effect.domElement.style.backgroundColor = "#111111";
    effect.domElement.style.borderRadius = "0.25rem";
    effect.domElement.style.pointerEvents = "none";
    return effect;
  }, []);

  useEffect(() => {
    gl.domElement.parentNode?.appendChild(effect.domElement);
    return () => {
      if (gl.domElement.parentNode) {
        gl.domElement.parentNode.removeChild(effect.domElement);
      }
    };
  }, [effect, gl.domElement.parentNode]);

  useEffect(() => {
    effect.setSize(size.width, size.height);
  }, [effect, size]);

  useFrame(() => {
    effect.render(scene, camera);
  }, renderIndex);

  return null;
};

const AsciiTorus: React.FC = () => {
  const meshRef = useRef<any>(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.y += ROTATION_SPEED_Y;
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[2, 0.9, 30, 100]} />
      <meshStandardMaterial />
      <AsciiRenderer />
    </mesh>
  );
};

export default AsciiTorus;