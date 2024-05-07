import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef, useState } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Worldmap from "../assets/world.svg";
import { gsap } from "gsap";
import * as THREE from 'three'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useControls } from "leva";


export default function Earth() {
  
  const colorMap = useLoader(TextureLoader, Worldmap);

  const boxRef = useRef();
  const { scene, camera } = useThree();
  const tl = gsap.timeline();
  const manager = new THREE.LoadingManager();
  manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
    console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
  };
  
  manager.onLoad = function ( ) {
    console.log( 'Loading complete!');
  };
  
  manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
    console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
  };
  
  manager.onError = function ( url ) {
    console.log( 'There was an error loading ' + url );
  };
  // ----- used for getting the position for the shoes ----

  // const { cameraPosition, scenePosition, sceneRotation } = useControls({
  // 	cameraPosition: {
  // 		value: {
  // 			x: 0,
  // 			y: 0,
  // 			z: 10,
  // 		},
  // 		step: 0.05,
  // 	},
  // 	scenePosition: {
  // 		value: { x: 0, y: 0, z: 0 },
  // 		step: 0.05,
  // 	},

  // 	sceneRotation: {
  // 		value: { x: 0, y: 0, z: 0},
  // 		step: 0.01,
  // 	},
  // });

  useLayoutEffect(() => {
    tl.to(camera.position, {
      x: 0,
      y: 0,
      z: 6,
      scrollTrigger: {
        trigger: ".tracker-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })
      .to(scene.position, {
        x: -2.5,
        y: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".tracker-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: 0.2,
        y: 3.5,
        // z: 0,
        scrollTrigger: {
          trigger: ".tracker-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.position, {
        x: 2,
        y: -1.5,
        // z: 0,
        scrollTrigger: {
          trigger: ".aboutus-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: 3.3,
        y: 7.95,
        // z: 0,
        scrollTrigger: {
          trigger: ".aboutus-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.position, {
        y: 1.2,
        z: -3,
        x: 0,
        scrollTrigger: {
          trigger: ".newsletter-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: -5,
        // z: -3,
        y: 8,
        scrollTrigger: {
          trigger: ".newsletter-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      });
  }, []);

  // Use useFrame to animate the cube

  useFrame((state, delta) => {
    if (boxRef.current) {
      const t = state.clock.getElapsedTime();
      boxRef.current.rotation.x = Math.cos(t / 1) / 10 + 0.25;
      boxRef.current.position.y = Math.sin(t) / 8;
    }
  });

  // ----- used for getting the position for the shoes ----

  // useFrame(() => {
  // 	camera.position.x = cameraPosition.x;
  // 	camera.position.y = cameraPosition.y;
  // 	camera.position.z = cameraPosition.z;
  // 	scene.position.x = scenePosition.x;
  // 	scene.position.y = scenePosition.y;
  // 	scene.position.z = scenePosition.z;
  // 	scene.rotation.x = sceneRotation.x;
  // 	scene.rotation.y = sceneRotation.y;
  // 	scene.rotation.z = sceneRotation.z;
  // });

  return (
    <mesh ref={boxRef}>
      <sphereGeometry args={[2.5, 24, 24]} />
      {/* <meshStandardMaterial  map={colorMap}  color="#111111" /> */}
      <meshStandardMaterial 
      map={colorMap}
       color="#101010" />
    </mesh>
  );
}
