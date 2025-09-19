import { useContext, useRef } from 'react'
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import exhibition from './../../assets/Exhibition.mp4'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { NavbarContext } from '../../context/NavContext';
import { Link } from 'react-router-dom';

const FullScreenNav = () => {
  
  const fullNavLinksRef = useRef(null)
  const fullScreenRef =useRef(null)
  
  const navbarCtx = useContext(NavbarContext);

  if (!navbarCtx) {
    throw new Error("FullScreenNav must be used within NavContext provider");
  }
  
  const { navOpen, setNavOpen } = navbarCtx;
  
 

  function gsapAnimation(){
    const t1 = gsap.timeline()

    t1.to('.fullScreennav',{
      display: 'block'
    })

    t1.to('.stairing',{
      delay:0.2,
      height:'100%',
      stagger:{
        amount: -0.3
      }
    })

    t1.to('.link',{
      rotateX:0,
      opacity:1,
      stagger:{
       amount:0.3
      }
   })
   t1.to('.navlink',{
    opacity:1
    })

  }

  function gsapReverseAnimation (){
    const t1 = gsap.timeline()

    t1.to('.link',{
      rotateX:90,
      opacity:0,
      stagger:{
       amount:0.1
      }
   })
   
    t1.to('.stairing',{
      height:0,
      stagger:{
        amount: 0.1
      }
    })

   t1.to('.navlink',{
    opacity:0
    })
    t1.to('.fullScreennav',{
      display: 'none'
    })

  }

    useGSAP (function(){
        
        if(navOpen){
          
          gsapAnimation()
        }else{
          gsapReverseAnimation()
        }
      },[navOpen])
  // const navimg='https://globalfundcommunityfoundations.org/wp-content/uploads/2025/07/Dia1-ShiftThePower-Bogota-NicoF-Efeunodos-web-41.jpg'
  return (
    <div ref={fullScreenRef} id='fullscreennav' className='fullScreennav h-screen w-full absolute z-50 hidden'>
      <div className='h-screen w-full fixed'>
      <div className='h-full w-full flex'>
      <div className='stairing h-full w-1/5 bg-black'></div>
      <div className='stairing h-full w-1/5 bg-black'></div>
      <div className='stairing h-full w-1/5 bg-black'></div>
      <div className='stairing h-full w-1/5 bg-black'></div>
      <div className='stairing h-full w-1/5 bg-black'></div>
    </div> 
      </div>
      <div ref={fullNavLinksRef} className='relative'>
        <div className='navlink'>
       <span onClick={()=>{
         setNavOpen(false)
       }} className='absolute top-5 right-5 bg-red-400 w-10 h-10 rounded-full cursor-pointer'></span>
       </div>
       <div className='grid grid-cols-2'>
          <div className='link'>
            {/* <img src={navimg} className='h-screen w-full object-cover'/> */}
            <video autoPlay loop muted src={exhibition} className='h-screen w-full object-cover' />
          </div>
          
          <div className='flex flex-col gap-1 text-white font-[anton] text-[4vw] items-center justify-center'>
            <Link onClick={()=>{
         setNavOpen(false)
       }} to='/' className='link origin-top cursor-pointer nav-item underline-animation'>Home</Link>
            <Link to='/art' onClick={()=>{
         setNavOpen(false)
       }} className='link origin-top cursor-pointer nav-item underline-animation'>Art & Gallery</Link>
            <Link to='/digital-media' onClick={()=>{
         setNavOpen(false) }} className='link origin-top cursor-pointer nav-item underline-animation'>Documentaries</Link>
            <Link onClick={()=>{
         setNavOpen(false)
       }} to='/project' className='link origin-top cursor-pointer nav-item underline-animation'>About</Link>

<Link onClick={()=>{
         setNavOpen(false)
       }} to='/media' className='link origin-top cursor-pointer nav-item underline-animation'>Media </Link>
            
            <div className='text-gray-300 font-[Slab-light] text-sm flex flex-col bottom-5 absolute'>
              <div className='flex items-center gap-1'>
            <HiOutlinePhone/>
         <span>+6353 7373 737</span>
         </div>
         <div className='flex items-center gap-1'>
         <MdOutlineEmail/>
          <span>globalfund@gmail.com</span>
          </div>
          </div>
          </div>

       </div>
       </div>
    </div>
    
  )
}

export default FullScreenNav