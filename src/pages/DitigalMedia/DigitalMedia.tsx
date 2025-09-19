// import { motion, useMotionValue, useSpring } from "framer-motion";
// import React from "react";
// import exhibition from './../../assets/Documenty.mp4';


// // Fixed SpringMouseFollow component
// const SpringMouseFollow = () => {
//   const cursorSize = 20;
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const opacity = useMotionValue(0);
  
//   const xSpring = useSpring(x, { damping: 20, stiffness: 300, mass: 0.5 });
//   const ySpring = useSpring(y, { damping: 20, stiffness: 300, mass: 0.5 });
//   const opacitySpring = useSpring(opacity, { damping: 20, stiffness: 300 });

//   React.useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       x.set(e.clientX - cursorSize / 2);
//       y.set(e.clientY - cursorSize / 2);
//     };

//     const handleMouseEnter = () => {
//       opacity.set(1);
//     };

//     const handleMouseLeave = () => {
//       opacity.set(0);
//     };

//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseenter", handleMouseEnter);
//     document.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseenter", handleMouseEnter);
//       document.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, [x, y, opacity]);

//   return (
//     <motion.div
//       style={{
//         x: xSpring,
//         y: ySpring,
//         scale:1.5,
//         opacity: opacitySpring,
//       }}
//       className="fixed top-0 left-0 w-5 h-5 bg-red-300 rounded-full pointer-events-none z-50 mix-blend-difference"
//     />
//   );
// };

// const DigitalMedia = () => {
//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-[#FFFFF0] via-[#fefef0] to-[#fafae8] overflow-hidden relative">
//       {/* Animated background elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//         <motion.div
//           className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-amber-200/20 to-pink-200/20 blur-3xl"
//           animate={{
//             x: [0, 30, 0],
//             y: [0, -30, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-blue-100/20 to-violet-100/20 blur-3xl"
//           animate={{
//             x: [0, -40, 0],
//             y: [0, 40, 0],
//           }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       </div>

//       <div className="container mx-auto px-4  relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
//           {/* Left column - Text content */}
//           <motion.div 
//             className="flex flex-col gap-8"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <div className="flex flex-col gap-6">
//               <motion.h2 
//                 className="text-5xl font-[Slab-bold] md:text-6xl tracking-tight  uppercase text-gray-900"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2, duration: 0.7 }}
//               >
//                 Stories that
//               </motion.h2>
              
//               <motion.div 
//                 className="flex items-center gap-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.7 }}
//               >
//                 <h2 className="text-5xl md:text-6xl tracking-tight font-[Slab-bold] uppercase text-gray-900">Move</h2>
//                 <motion.div
//                   whileHover={{ scale: 1.05, rotate: 5 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <img 
//                     src="https://media.istockphoto.com/id/1326800645/vector/volunteering-charity-donations-and-solidarity.jpg?s=612x612&w=0&k=20&c=i51ZLvF7KdQwiPE10Nxt5sNBg-xGK5BhIERJfANpJ4k=" 
//                     className="w-40 h-16 object-cover rounded-full shrink-0 shadow-lg border-2 border-white"
//                     alt="Community illustration"
//                   />
//                 </motion.div>
//               </motion.div>
              
//               <motion.h2 
//                 className="text-5xl md:text-6xl tracking-tight font-[Slab-bold] uppercase text-gray-900"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.7 }}
//               >
//                 Communities
//               </motion.h2>
//             </div>
            
//             <motion.div 
//               className="text-gray-600 text-sm leading-relaxed max-w-md"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8, duration: 0.7 }}
//             >
//               <p>
//                 Experience the power of storytelling through film. These documentaries and trailers bring to life the journeys of communities shaping their own futures. From grassroots initiatives to bold visions of change, each story reveals resilience, generosity, and the power of people working together.
//               </p>
//             </motion.div>
//           </motion.div>
          
//           {/* Right column - Video */}
//           <motion.div 
//             className="relative"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//           >
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70 z-10"></div>

//               <div className="absolute top-4 right-4 z-20">
//                 <motion.div 
//                   className="w-3 h-3 bg-red-300 rounded-full"
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 />
//               </div>
//               <video 
//                 className="w-full h-auto max-h-[80vh] object-cover" 
//                 autoPlay 
//                 loop 
//                 muted 
//                 src={exhibition}
//               />
//             </div>
            
//             {/* Decorative elements */}
//             <motion.div 
//               className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-amber-400/30 rounded-lg z-0"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//             />
//             <motion.div 
//               className="absolute -top-6 -right-6 w-16 h-16 border-4 border-blue-400/30 rounded-lg z-0"
//               animate={{ rotate: -360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             />
//           </motion.div>
//         </div>
//       </div>
      
//       {/* SpringMouseFollow component - now properly positioned and visible */}
//       <SpringMouseFollow />
//     </div>
//   );
// };

// export default DigitalMedia;


// import shiftthepower from './../../assets/ShiftThePower.mp4';

// const DigitalMedia = () => {
//   return (
//     <div>
//   <div className="min-h-screen w-full bg-gradient-to-br from-[#FFFFF0] via-[#fefef0] to-[#fafae8]">
//     <div className="py-12">
//       <div className="flex justify-center items-center -translate-x-20">
//       <div className="flex items-center gap-2">
//       <h1 className="text-6xl font-[Slab-bold]">
//         Stories That    
//       </h1>
//       <img 
//          src="https://media.istockphoto.com/id/1326800645/vector/volunteering-charity-donations-and-solidarity.jpg?s=612x612&w=0&k=20&c=i51ZLvF7KdQwiPE10Nxt5sNBg-xGK5BhIERJfANpJ4k=" 
//         className="w-40 h-16 object-cover rounded-full shrink-0" alt="Community illustration"
//                   />
//                   </div> 
//                   </div>
//                   <div className="text-center translate-x-20">
//       <h1 className="text-6xl font-[Slab-bold]">
//         Move Communities
//       </h1>
//       </div>
//       <div className='h-3/4 w-3/4 py-5 flex justify-center items-center'>
//     <video className='h-full w-full object-cover rounded-md' autoPlay loop muted src={shiftthepower}/>
//     </div>
//     </div>
//   </div>
// </div>

  
//   )
// }

// export default DigitalMedia

import { useRef, useState, useEffect } from 'react';
import shiftThePower from './../../assets/ShiftThePower.mp4';

const DigitalMedia = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Mock video source for this example
  const shiftthepower = shiftThePower;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', updateProgress);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(error => console.error("Play failed:", error));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#FFFFF0] via-[#fefef0] to-[#fafae8] overflow-hidden relative">
      <div className="relative py-12 px-4 z-10 max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-5">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <h1 className="text-4xl md:text-6xl font-[anton]">
              Stories That
            </h1>
            <div className="relative inline-flex">
              <img 
                src="https://media.istockphoto.com/id/1326800645/vector/volunteering-charity-donations-and-solidarity.jpg?s=612x612&w=0&k=20&c=i51ZLvF7KdQwiPE10Nxt5sNBg-xGK5BhIERJfANpJ4k=" 
                className="w-40 h-16 object-cover rounded-full shrink-0 shadow-lg border-4 border-white transition-transform duration-300 hover:scale-105"
                alt="Community illustration"
              />
              <div className="absolute -inset-2 bg-yellow-200 rounded-full -z-10 blur-xl opacity-70"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-[anton] translate-x-28 ">
            Move Communities
          </h1>
        </div>

        {/* Video section */}
        <div className="flex justify-center items-center px-4">
          <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
            <video 
              ref={videoRef}
              className="w-full h-auto block cursor-pointer"
              loop 
              autoPlay
              muted 
              src={shiftthepower}
              onClick={togglePlay}
            />
            
            {/* Video controls overlay */}
            <div 
              className="absolute inset-0 bg-transparent transition-colors duration-300 flex items-center justify-center cursor-pointer group hover:bg-black/30"
              onClick={togglePlay}
            >
              {!isPlaying && (
                <div className="bg-white/80 rounded-full p-4 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12 text-gray-700">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            
            {/* Progress bar */}
            <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20">
              <div 
                className="h-full bg-amber-500 transition-all duration-200"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMedia;

