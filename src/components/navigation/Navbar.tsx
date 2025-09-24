// import { useContext, useRef } from 'react';
// import { NavbarContext } from '../../context/NavContext';

// const Navbar = () => {
//   const navBlueRef = useRef<HTMLDivElement>(null);

//   const navbarCtx = useContext(NavbarContext);
//   if (!navbarCtx) throw new Error("Navbar must be used inside NavContext provider");

//   const { navOpen, setNavOpen } = navbarCtx;

//   return (
//     <div className="z-50 flex fixed top-5 w-full rounded-full items-center justify-between">
//       <div className="p-5">
//         <h3 className="text-white text-lg font-bold"></h3>
//       </div>
//       <div
//         onClick={() => setNavOpen(true)}
//         onMouseEnter={() => {
//           if (navBlueRef.current) navBlueRef.current.style.height = '100%';
//         }}
//         onMouseLeave={() => {
//           if (navBlueRef.current) navBlueRef.current.style.height = '0%';
//         }}
//         className="h-10 bg-red-300 right-10 relative w-10 rounded-full cursor-pointer"
//       >
//         <div
//           ref={navBlueRef}
//           className="bg-red-300 transition-all absolute top-0 h-0 w-full rounded-full"
//         >
//           <div className="relative flex flex-col gap-1 items-center mt-4 justify-center">
//             <div className="w-5 h-0.5 bg-white"></div>
//             <div className="w-3 h-0.5 bg-white"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
