import React, { useState, useRef } from "react";
import { OrbitControls, Preload, useGLTF, Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { GradientTexture } from "@react-three/drei";

const Models = (props) => {
  const models = useGLTF(props.path);

  return (
    <>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={10} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={2.5} castShadow shadow-mapSize={1024} />
      <primitive object={models.scene} scale={props.size} position-y={-1} rotation-y={-5}/>
    </>
  );
};

const ModelsCanvas = ({ models, size }) => {
  return (
    <Canvas shadows frameloop="demand" camera={{ fov: 50, near: 0.1, far: 200, position: [-4, 0, 6] }} gl={{ preserveDrawingBuffer: true }}>
       <GradientTexture
          attach="background"
          stops={[0, 0.5, 1]}
          colors={["#87CEEB", "#FFFFFF", "#87CEEB"]} // เปลี่ยนสีท้องฟ้าที่นี่
        />
        <OrbitControls 
        // autoRotate 
        enableZoom={false} 
        // maxPolarAngle={Math.PI / 2} 
        // minPolarAngle={Math.PI / 2} 
        />
            <Models path={models} size={size}/>
    </Canvas>
  );
};

export default ModelsCanvas;
