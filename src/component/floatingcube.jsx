import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function FloatingCube() {
    const boxRef = useRef();
    const [isRotating, setIsRotating] = useState(false);
  
    // // Use useFrame to animate the cube
    useFrame((state,delta) => {
      const t = state.clock.getElapsedTime();
  
  
  
   
      boxRef.current.rotation.x = Math.cos(t / 1) / 10 + 0.25;
      boxRef.current.rotation.y = Math.sin(t / 1) / 4 ;
      boxRef.current.position.y = Math.sin(t) / 8;
  
    });
  
  
  
    return (
      <mesh
        ref={boxRef}
      >
        <boxGeometry args={[2, 3, 2]} />
        <meshStandardMaterial color="purple" />
      </mesh>
    );
  }