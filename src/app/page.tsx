"use client";
import { Canvas } from "@react-three/fiber";
import IcosahedronDisplacement from "./_components/3D/IcosahedronDisplacement";
import AsciiTorus from "./_components/3D/AsciiTorus";

export default function Home() {
  return (
    <main className="grid grid-cols-2 w-screen h-screen items-center">
        {/* Icosahedron Displacment (Grid Item 1) */}
        <figure className="flex items-center flex-col">
          <div className="h-full max-h-[400px] min-h-[400px] max-w-[900px] w-full rounded border object-cover shadow-lg">
            <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
              <IcosahedronDisplacement />
            </Canvas>
          </div>
          <figcaption className="mt-2 text-[.8em] italic text-captionColour">
            Icosahedron Displacment, created with{" "}
            <a
              className="border-b border-dotted border-black text-highlightColour hover:bg-[#EBEBEB]"
              href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
              target="_blank"
              rel="noopener noreferrer"
            >
              R3F
            </a>{" "}
            & vertex/fragment shaders
          </figcaption>
        </figure>

        {/* Ascii Torus (Grid Item 2) */}
        <figure className="flex items-center flex-col">
          <div className="h-full max-h-[400px] min-h-[400px] max-w-[900px] w-full rounded border bg-[#111111] object-cover shadow-lg">
            <Canvas>
              <pointLight position={[4, 3, 3]} intensity={20.0} />
              <AsciiTorus />
            </Canvas>
          </div>
          <figcaption className="mt-2 text-[.8em] italic text-captionColour">
            Ascii Torus, created with{" "}
            <a
              className="border-b border-dotted border-black text-highlightColour hover:bg-[#EBEBEB]"
              href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
              target="_blank"
              rel="noopener noreferrer"
            >
              R3F
            </a>{" "}
            &{" "}
            <a
              className="border-b border-dotted border-black text-highlightColour hover:bg-[#EBEBEB]"
              href="https://github.com/pmndrs/three-stdlib"
              target="_blank"
              rel="noopener noreferrer"
            >
              three-stdlib
            </a>
          </figcaption>
        </figure>
    
    </main>
  );
}
