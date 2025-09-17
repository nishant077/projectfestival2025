import { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const NavAnimation = (props:any) => {

    const currentPath = useLocation().pathname
    const navAnimation= useRef(null)
    const pageRef = useRef(null)
 
    useGSAP (function(){
    
      const t1 = gsap.timeline()
  
      t1.to(navAnimation.current,{
        display: 'block'
      })
  
      t1.from('.stair',{
        height:0,
        stagger:{
          amount: -0.2
        }
      })
  
      t1.to('.stair',{
        y:'100%',
        stagger:{
          amount: -0.25
        }
      })
      t1.to(navAnimation.current,{
        display: 'none'
      })
      t1.to('.stair',{
        y:'0%',
      })
      gsap.from(pageRef.current,{
        opacity: 0,
        delay: 1.3,
        scale:1.2
      })
    },[currentPath])
  return (
    <div>
    <div ref={navAnimation} className='h-screen w-full fixed z-20 top-0'>
    <div className='h-full w-full flex'>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
    </div>
    </div>
    <div ref={pageRef}>
        {props.children}
    </div>
    </div>
  )
}

export default NavAnimation