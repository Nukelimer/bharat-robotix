import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import BeetleModel from "../../public/Beetle";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Lights from "./Lights";
import About from "./About";
import { MdCloseFullscreen } from "react-icons/md";

function CameraControls() {
  const { camera } = useThree();

  camera.position.set(0, 0, -5);
  camera.rotation.set(-Math.PI / 2, 0, 0);

  return <OrbitControls />;
}
function BeetleApp() {
  const [Demo, setDemo] = useState(false);
  return (
    <main>
      <About Demo={Demo} setDemo={setDemo} />
      {Demo && (

        <div className="fullscreen">
          <MdCloseFullscreen onClick={()=>setDemo(!Demo)}  color={'white'} className="close" />
        
        <Canvas shadows>
          <ambientLight color={"white"} intensity={0.3} />
          <pointLight />
          <directionalLight intensity={2.16} />
          <PerspectiveCamera makeDefault position={[0, 0, 4]} />
          <Lights />
          <OrbitControls
            autoRotate={true}
            enableZoom={true}
            enablePan={false}
            rotateSpeed={0.4}
            />
          <CameraControls />
          <Suspense fallback={null}>
            <BeetleModel />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
            </div>
      )}
    </main>
  );
}

export default BeetleApp;
