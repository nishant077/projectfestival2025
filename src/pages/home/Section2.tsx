
import { useState } from 'react'
import arthub from '../../assets/arthub.mp4'
import virtualart from './../../assets/virtualart.mp4'
import { useNavigate } from 'react-router-dom'

const Section2 = () => {

  const navigate = useNavigate()
  return (
    <div className='h-auto w-full px-10 mt-14 mb-10'>
        <div className='flex flex-col gap-10'>
          <div>
            <div className='px-20'>
        <p className='font-medium text-3xl'>We’re a global storytelling movement, uniting voices that shift the power.</p>
        </div>
        <p className='font-medium text-3xl'>This year, we gather for the blazing 🔥 “Stories for Change Festival 2025” — a digital celebration of courage, community, and change. From powerful documentaries to striking art and fearless conversations, we’re amplifying stories that demand to be heard. On December 5th, the world comes together online for one unforgettable festival of impact, inspiration, and unstoppable change. 🚀</p>
        </div>
        <div className='border-t-[1px] border-gray-300'></div>
        <h3 className='text-5xl font-[anton]'> Featured Stories</h3>
        <div className='grid grid-cols-2 gap-5 cursor-pointer'>
            <div className='flex flex-col gap-2'>
              <div className='aspect-video overflow-hidden' onClick={() => navigate('/art-hub')}>
              <video muted autoPlay loop src={arthub} className='object-cover rounded-md h-full w-full'/>
              </div>
           <span className='text-2xl font-medium'>Art Hub </span>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='aspect-video overflow-hidden' onClick={() => navigate('/virtual-gallery')}>
          <video loop autoPlay muted src={virtualart} className='object-cover rounded-md h-full w-full'/>
          </div>
          <span className='text-2xl font-medium'>Virtual Gallery</span>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-5 cursor-pointer'>
            <div className='flex flex-col gap-2'>
              <div className='aspect-video overflow-hidden'>
              <video muted autoPlay loop src={arthub} className='object-cover rounded-md h-full w-full'/>
              </div>
           <span className='text-2xl font-medium'>Gallery</span>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='aspect-video overflow-hidden'>
          <video loop autoPlay muted src={virtualart} className='object-cover rounded-md h-full w-full'/>
          </div>
          <span className='text-2xl font-medium'>Videos</span>
          </div>
        </div>
          </div>
        </div>
     

  )
}

export default Section2