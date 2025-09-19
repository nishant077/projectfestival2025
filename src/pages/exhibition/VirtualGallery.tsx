// import React, { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useTexture, useGLTF, Environment, Text } from "@react-three/drei";
// import * as THREE from "three";

// interface Artwork {
//   id: number;
//   title: string;
//   src: string;
//   description: string;
//   artist: string;
//   year: string;
//   position: [number, number, number];
//   rotation: [number, number, number];
//   size: [number, number];
// }

// const artworks: Artwork[] = [
//   {
//     id: 1,
//     title: "Sunset Landscape",
//     src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
//     description: "A serene sunset landscape painting capturing the beautiful colors of dusk over rolling hills.",
//     artist: "Emily Johnson",
//     year: "2021",
//     position: [-4, 2, -4.9],
//     rotation: [0, 0, 0],
//     size: [3, 2],
//   },
//   {
//     id: 2,
//     title: "Modern Art",
//     src: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80",
//     description: "Abstract modern art piece exploring the relationship between color and form in contemporary society.",
//     artist: "Marcus Chen",
//     year: "2022",
//     position: [4, 2, -4.9],
//     rotation: [0, 0, 0],
//     size: [2, 2],
//   },
//   {
//     id: 3,
//     title: "City Life",
//     src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
//     description: "Bustling city street captured during the golden hour, showing urban life in motion.",
//     artist: "Sarah Williams",
//     year: "2020",
//     position: [-4.9, 2, 0],
//     rotation: [0, Math.PI / 2, 0],
//     size: [3, 2],
//   },
//   {
//     id: 4,
//     title: "Ocean Waves",
//     src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
//     description: "Dynamic ocean waves crashing against rocky cliffs, showcasing the power of nature.",
//     artist: "David Miller",
//     year: "2019",
//     position: [4.9, 2, 0],
//     rotation: [0, -Math.PI / 2, 0],
//     size: [3, 2],
//   },
// ];

// // 3D Model components
// function Sculpture({ position, rotation, scale = 1 }: { 
//   position: [number, number, number]; 
//   rotation: [number, number, number]; 
//   scale?: number;
// }) {
//   return (
//     <mesh position={position} rotation={rotation} scale={scale}>
//       <cylinderGeometry args={[0.5, 0.7, 1.5, 8]} />
//       <meshStandardMaterial color="#c4b5a9" metalness={0.3} roughness={0.7} />
//     </mesh>
//   );
// }

// function DecorativeVase({ position, rotation, scale = 1 }: { 
//   position: [number, number, number]; 
//   rotation: [number, number, number]; 
//   scale?: number;
// }) {
//   return (
//     <mesh position={position} rotation={rotation} scale={scale}>
//       <sphereGeometry args={[0.6, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
//       <meshStandardMaterial color="#a78bfa" metalness={0.5} roughness={0.2} />
//     </mesh>
//   );
// }

// function ArtworkMesh({
//   artwork,
//   onClick,
//   isSelected,
// }: {
//   artwork: Artwork;
//   onClick: (art: Artwork) => void;
//   isSelected: boolean;
// }) {
//   const texture = useTexture(artwork.src);
//   const meshRef = useRef<THREE.Mesh>(null);
//   const frameMaterialRef = useRef<THREE.MeshStandardMaterial>(null);

//   // Subtle hover animation
//   useFrame(({ clock }) => {
//     if (meshRef.current && !isSelected) {
//       meshRef.current.position.y = artwork.position[1] + Math.sin(clock.elapsedTime * 0.5) * 0.03;
//     }
    
//     if (frameMaterialRef.current) {
//       frameMaterialRef.current.emissiveIntensity = isSelected ? 0.3 : 0;
//     }
//   });

//   return (
//     <group position={artwork.position} rotation={artwork.rotation}>
//       {/* Artwork frame */}
//       <mesh position={[0, 0, -0.1]} onClick={() => onClick(artwork)}>
//         <boxGeometry args={[artwork.size[0] + 0.2, artwork.size[1] + 0.2, 0.1]} />
//         <meshStandardMaterial 
//           ref={frameMaterialRef}
//           color="#d4af37" 
//           metalness={0.8} 
//           roughness={0.2}
//           emissive="#d4af37"
//         />
//       </mesh>
      
//       {/* Artwork canvas */}
//       <mesh ref={meshRef} position={[0, 0, 0]}>
//         <planeGeometry args={artwork.size} />
//         <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
//       </mesh>
//     </group>
//   );
// }

// function Room() {
//   const floorTexture = useTexture(
//     "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
//   );
//   const wallTexture = useTexture(
//     "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80"
//   );

//   // Add repetition to textures
//   floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
//   floorTexture.repeat.set(4, 4);
//   wallTexture.wrapS = wallTexture.wrapT = THREE.RepeatWrapping;
//   wallTexture.repeat.set(3, 2);

//   return (
//     <>
//       {/* Floor */}
//       <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
//         <planeGeometry args={[20, 20]} />
//         <meshStandardMaterial map={floorTexture} side={THREE.DoubleSide} roughness={0.8} />
//       </mesh>

//       {/* Ceiling */}
//       <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 6.5, 0]} receiveShadow>
//         <planeGeometry args={[20, 20]} />
//         <meshStandardMaterial color="#f3f4f6" side={THREE.DoubleSide} roughness={0.9} />
//       </mesh>

//       {/* Back wall */}
//       <mesh position={[0, 3, -6]} receiveShadow>
//         <planeGeometry args={[20, 7]} />
//         <meshStandardMaterial map={wallTexture} side={THREE.DoubleSide} roughness={0.7} />
//       </mesh>

//       {/* Left wall */}
//       <mesh position={[-6, 3, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
//         <planeGeometry args={[12, 7]} />
//         <meshStandardMaterial map={wallTexture} side={THREE.DoubleSide} roughness={0.7} />
//       </mesh>

//       {/* Right wall */}
//       <mesh position={[6, 3, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
//         <planeGeometry args={[12, 7]} />
//         <meshStandardMaterial map={wallTexture} side={THREE.DoubleSide} roughness={0.7} />
//       </mesh>

//       {/* Lighting */}
//       <directionalLight
//         position={[5, 8, 5]}
//         intensity={1.2}
//         castShadow
//         shadow-mapSize-width={1024}
//         shadow-mapSize-height={1024}
//         shadow-camera-far={20}
//         shadow-camera-left={-10}
//         shadow-camera-right={10}
//         shadow-camera-top={10}
//         shadow-camera-bottom={-10}
//       />
//       <pointLight position={[0, 5, 0]} intensity={0.5} />
//       <pointLight position={[-5, 3, 5]} intensity={0.3} color="#ff7c4d" />
//       <pointLight position={[5, 3, 5]} intensity={0.3} color="#4d7fff" />
      
//       {/* Decorative elements */}
//       <Sculpture position={[0, 1, -5.5]} rotation={[0, Math.PI/4, 0]} scale={1.2} />
//       <DecorativeVase position={[-2, 1, 5.5]} rotation={[0, Math.PI/3, 0]} scale={0.8} />
//       <DecorativeVase position={[2, 1, 5.5]} rotation={[0, -Math.PI/3, 0]} scale={0.8} />
//     </>
//   );
// }

// function WelcomeSign() {
//   return (
//     <group position={[0, 4, -5.8]}>
//       <Text
//         color="#2d3748"
//         fontSize={0.5}
//         maxWidth={10}
//         textAlign="center"
//         anchorX="center"
//         anchorY="middle"
//       >
//         Virtual Art Gallery
//       </Text>
//       <Text
//         color="#4a5568"
//         fontSize={0.2}
//         maxWidth={8}
//         textAlign="center"
//         anchorX="center"
//         anchorY="middle"
//         position={[0, -0.5, 0]}
//       >
//         Explore the collection
//       </Text>
//     </group>
//   );
// }

// function LoadingFallback() {
//   return (
//     <mesh position={[0, 0, 0]}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color="#eee" />
//     </mesh>
//   );
// }

// export default function VirtualGallery() {
//   const [selected, setSelected] = useState<Artwork | null>(null);

//   return (
//     <div className="w-screen h-screen relative bg-gray-900">
//       <Canvas shadows camera={{ position: [0, 4, 10], fov: 50 }}>
//         <color attach="background" args={['#111827']} />
//         <Suspense fallback={<LoadingFallback />}>
//           <ambientLight intensity={0.3} />
//           <Room />
//           <WelcomeSign />
//           {artworks.map((art) => (
//             <ArtworkMesh 
//               key={art.id} 
//               artwork={art} 
//               onClick={setSelected} 
//               isSelected={selected?.id === art.id}
//             />
//           ))}
//           <Environment preset="apartment" />
//           <OrbitControls 
//             enablePan={true}
//             enableZoom={true}
//             enableRotate={true}
//             minDistance={5}
//             maxDistance={15}
//             minPolarAngle={0}
//             maxPolarAngle={Math.PI / 2}
//           />
//         </Suspense>
//       </Canvas>

//       {selected ? (
//         <div className="absolute top-5 right-5 bg-white/95 p-6 rounded-xl shadow-2xl w-80 backdrop-blur-sm border border-gray-200">
//           <h2 className="font-bold text-2xl text-gray-900 mb-2">{selected.title}</h2>
//           <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Artist:</span> {selected.artist}</p>
//           <p className="text-sm text-gray-600 mb-4"><span className="font-semibold">Year:</span> {selected.year}</p>
//           <p className="text-md text-gray-700 mb-6 leading-relaxed">{selected.description}</p>
//           <button
//             className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200 shadow-md"
//             onClick={() => setSelected(null)}
//           >
//             Close Details
//           </button>
//         </div>
//       ) : (
//         <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/70 text-white p-4 rounded-lg backdrop-blur-sm">
//           <p className="text-sm">Click on any artwork to view details</p>
//         </div>
//       )}

//       <div className="absolute top-5 left-5 text-white">
//         <h1 className="text-2xl font-bold">Virtual Art Gallery</h1>
//         <p className="text-sm opacity-80">Navigate with your mouse or touch controls</p>
//       </div>
//     </div>
//   );
// }


import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import shiftThePower from './../../assets/ShiftThePower.mp4';


const VirtualGallery = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  return (
    <section
      ref={ref}
      className="mx-auto flex h-[400vh] w-screen flex-col items-center overflow-hidden bg-[#FAFDEE] px-4 text-[#1F3A4B]"
    >
      <div className="mt-20 relative flex w-fit flex-col items-center justify-center gap-5 text-center">
        <h1 className="font-[anton] relative z-10 text-7xl font-medium lg:text-9xl">
        Stories for <br />Change <br />
        
        </h1>
        <p className="font-jakarta-sans relative z-10 max-w-2xl text-xl font-medium text-[#1F3A4B]">
        Stories for Change is a video and digital media project led by the Global Fund for Community Foundations (GFCF). It shines a light on the powerful work of Giving for Change Alliance partners across the world. Through films, interviews, and digital storytelling, it brings communities’ voices to the forefront — showing how local action drives global change.
        </p>
        <div className="relative z-10 max-w-3xl rounded-2xl shadow-2xl">
        <video 
              className="w-full h-auto rounded-2xl"
              autoPlay
              loop 
              muted 
              src={shiftThePower}
            />
            </div>

          
          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-2">
             <h1 className="font-jakarta-sans relative z-10 text-5xl font-medium tracking-[-0.08em] lg:text-7xl">Why Stories? </h1>
            <div className="w-28 h-28 z-10 relative">
            <img src="https://globalfundcommunityfoundations.org/wp-content/uploads/2018/11/our_vision_mission_values.jpg" className="rounded-md w-full h-full object-cover rotate-12 transform hover:rotate-0 transition-transform duration-300"/>
            </div>
            </div>
            <p className="font-jakarta-sans relative z-10 max-w-2xl text-xl font-medium text-[#1F3A4B]">
              Behind every movement are the people who make it real. These stories capture the struggles, successes, and everyday actions of communities who are building their own futures. By sharing them widely, we want to challenge old narratives of “donor and beneficiary” and instead celebrate local leadership, dignity, and agency.</p>
            </div>  

            <div className="mt-10 space-y-5">
            <div className="flex items-center gap-2">
             <h1 className="font-jakarta-sans relative z-10 text-5xl font-medium tracking-[-0.08em] lg:text-7xl">Why Stories? </h1>
            <div className="w-28 h-28 z-10 relative">
            <img src="https://globalfundcommunityfoundations.org/wp-content/uploads/2018/11/our_vision_mission_values.jpg" className="rounded-md w-full h-full object-cover rotate-12 transform hover:rotate-0 transition-transform duration-300"/>
            </div>
            </div>
            <p className="font-jakarta-sans relative z-10 max-w-2xl text-xl font-medium text-[#1F3A4B]">
              Behind every movement are the people who make it real. These stories capture the struggles, successes, and everyday actions of communities who are building their own futures. By sharing them widely, we want to challenge old narratives of “donor and beneficiary” and instead celebrate local leadership, dignity, and agency.</p>
            </div> 

            <div className="mt-10 space-y-5">
            <div className="flex items-center gap-2">
             <h1 className="font-jakarta-sans relative z-10 text-5xl font-medium tracking-[-0.08em] lg:text-7xl">Why Stories? </h1>
            <div className="w-28 h-28 z-10 relative">
            <img src="https://globalfundcommunityfoundations.org/wp-content/uploads/2018/11/our_vision_mission_values.jpg" className="rounded-md w-full h-full object-cover rotate-12 transform hover:rotate-0 transition-transform duration-300"/>
            </div>
            </div>
            <p className="font-jakarta-sans relative z-10 max-w-2xl text-xl font-medium text-[#1F3A4B]">
              Behind every movement are the people who make it real. These stories capture the struggles, successes, and everyday actions of communities who are building their own futures. By sharing them widely, we want to challenge old narratives of “donor and beneficiary” and instead celebrate local leadership, dignity, and agency.</p>
            </div> 

        <LinePath
          className="absolute -right-[40%] mt-[400px] z-0"
          scrollYProgress={scrollYProgress}
        />
      </div>

      <div className="rounded-4xl font-jakarta-sans w-full translate-y-[200vh] bg-[#1F3A4B] pb-10 text-[#FAFDEE]">
        <h1 className="mt-10 text-center text-[10.5vw] font-bold leading-[0.9] tracking-tighter lg:text-[14.6vw]">
          ShiftForChange
        </h1>
        <div className="mt-80 flex w-full flex-col items-start gap-5 px-4 font-medium lg:mt-0 lg:flex-row lg:justify-between">
          <div className="flex w-full items-center justify-between gap-12 uppercase lg:w-fit lg:justify-center">
            <p className="w-fit text-sm">
              USA, <br />
            </p>
            <p className="w-fit text-right text-sm lg:text-left">
              Oct 5, 2025 <br /> 
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center justify-between gap-12 uppercase lg:w-fit lg:justify-center">
            {/* <p className="w-fit text-sm">
              onilne <br /> free
            </p> */}
            {/* <p className="w-fit text-right text-sm lg:text-left">
              in person tickets <br /> $600
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export { VirtualGallery };

const LinePath = ({
  className,
  scrollYProgress,
}: {
  className: string;
  scrollYProgress: any;
}) => {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <svg
      width="1278"
      height="3000"
      viewBox="0 0 1278 2319"
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
        stroke="#C2F84F"
        strokeWidth="20"
        style={{
          pathLength,
          strokeDashoffset: useTransform(pathLength, (value) => 1 - value),
        }}
      />
    </svg>
  );
};

/**
 * Skiper 19 — React + framer motion
 * Inspired by and adapted from https://comgio.ai/
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 * These animations aren’t associated with the comgio.ai . They’re independent recreations meant to study interaction design
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */

