import * as THREE from 'three'
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";


import { useGLTF, MeshRefractionMaterial, useEnvironment, } from '@react-three/drei'

export default function Ring({ frame, diamonds,  ...props }) {
    const boxRef = useRef();
    useFrame((state,delta) => {
        const t = state.clock.getElapsedTime();
    
    
    
     
        boxRef.current.rotation.x = Math.cos(t / 1) / 10 + 0.25;
        boxRef.current.rotation.y = Math.sin(t / 1) / 4 ;
        boxRef.current.position.y = Math.sin(t) / 8;
    
      });
    const {camera } = useThree()

    console.log(camera.position)
    const   env = useEnvironment({ files: 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr' })
      const material = new THREE.MeshStandardMaterial({ color: diamonds });
      const { nodes, materials } = useGLTF('/3-stone-transformed.glb')
    //   console.log(nodes.mesh_4.instanceMatrix )
      return (
        <group 
        ref={boxRef}
         {...props} dispose={null}>
          <mesh castShadow geometry={nodes.mesh_0.geometry}>
            <meshStandardMaterial 
            color={frame} roughness={0.15} metalness={1} envMapIntensity={1.5}
             />
          </mesh>
          <mesh castShadow geometry={nodes.mesh_9.geometry} material={materials.WhiteMetal} />
       <instancedMesh castShadow args={[nodes.mesh_4.geometry, material, 65]} instanceMatrix={nodes.mesh_4.instanceMatrix}>  
             <MeshRefractionMaterial color={diamonds} side={THREE.DoubleSide} envMap={env} aberrationStrength={0.02} toneMapped={false} />
       </instancedMesh>
         
     
        
        </group>
      )
    }