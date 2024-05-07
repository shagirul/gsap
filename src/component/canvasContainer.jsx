// import { Canvas } from "@react-three/fiber";
// // import React, { useRef } from "react";
// // import FloatingCube from "./floatingcube";
// import { Environment, OrbitControls} from "@react-three/drei";
// // import Ring from "./ring";
// import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";
// import { N8AO } from "@react-three/postprocessing";
// import Earth from "./earth";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import { Suspense } from "react";

// function Loader() {
//   const { progress } = useProgress()
  
//   return <Html className="  bg-white"><div className="h-screen z-50">hii</div> </Html>
// }


// export default function CanvasContainer() {
//   gsap.registerPlugin(ScrollTrigger);

//   return (
//     <Canvas  
    
//     // scene={{position:[0,-0.5,0]}}

//     // camera={{position:[
//     //     0,-3,5]}}
//      > 
//      <Suspense fallback={<Loader />}>  <mesh>
//         <Earth/>

//       </mesh>
//       <Environment preset='city' background={false}   backgroundBlurriness={0} />
//       <ambientLight/>
//       <EffectComposer>

//         {/* <N8AO aoRadius={0.15} intensity={4} distanceFalloff={2} /> */}
//         {/* <Bloom luminanceThreshold={5.5} intensity={0.85} levels={9} mipmapBlur /> */}
//         <ToneMapping />
//      </EffectComposer></Suspense>
    
     
//     {/* <OrbitControls enablePan enableRotate  /> */}

//     </Canvas>
//   );
// }
import { Canvas } from "@react-three/fiber";
// import React, { useRef } from "react";
// import FloatingCube from "./floatingcube";
import { Environment, OrbitControls, useProgress} from "@react-three/drei";
// import Ring from "./ring";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";
import { N8AO } from "@react-three/postprocessing";
import Earth from "./earth";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export default function CanvasContainer({ onUpdateProgress }) {
  const { progress } = useProgress()
  onUpdateProgress(progress);
  gsap.registerPlugin(ScrollTrigger);

  return (
    <Canvas  
    
    // scene={{position:[0,-0.5,0]}}

    // camera={{position:[
    //     0,-3,5]}}
     > 
     <mesh>
        <Earth/>

      </mesh>
      <Environment preset='city' background={false}   backgroundBlurriness={0} />
      <ambientLight/>
      <EffectComposer>

        {/* <N8AO aoRadius={0.15} intensity={4} distanceFalloff={2} /> */}
        {/* <Bloom luminanceThreshold={5.5} intensity={0.85} levels={9} mipmapBlur /> */}
        <ToneMapping />
     </EffectComposer>
    
     
    {/* <OrbitControls enablePan enableRotate  /> */}

    </Canvas>
  );
}

