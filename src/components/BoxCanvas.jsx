import React, { useRef } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";

function Box() {
  const boxRef = useRef()

  useFrame(() => {
    boxRef.current.rotation.x += 0.01
    boxRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={boxRef} castShadow receiveShadow>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  )
}

function BoxCanvas() {
  return (
    <Canvas shadowMap>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} castShadow />
    <Box />
    <mesh
      receiveShadow
      position={[0, -1, 0]}
    >
      <planeBufferGeometry args={[10, 10]} />
      <shadowMaterial transparent opacity={0.3} />
    </mesh>
  </Canvas>
  )
}

export default BoxCanvas