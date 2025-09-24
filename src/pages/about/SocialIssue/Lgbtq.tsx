import React from "react";
import Works from "./Works";
import { StoriesBlog } from "./StoriesBlog";



const ReactPlayer = React.lazy(() => import("react-player"));

const Lgbtq = () => {

  return (
    <div className="h-auto bg-[#FAFDEE] w-full">
           <div className='grid grid-cols-2 gap-4'>
          <div className=''>
            <img  src='https://img.freepik.com/premium-photo/lgbt-pride-gay-rights-peace-freedom-diversity-harmony-graceful-woman-hands-blur-rainbow-lights-iridescent-blue-red-green-yellow-color-gradient-glow-dark-empty-space-background_279525-10244.jpg' className='h-screen w-full object-cover' />
          </div>
          
          <div className='flex flex-col gap-4 lg:text-7xl text-5xl py-20 px-10'>
            <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 ">
            <h3  className='cursor-pointer font-[anton]'>LGBTQ
            </h3>
            <span className="font-medium"> ~ <span className="font-[anton]">Rights</span></span>
            </div>
            <h3 className='cursor-pointer  font-[anton]'> & Inclusion</h3>
            </div>
            <div className='border-t-[2px] border-gray-600 w-3/4'></div>
            <div>
            <p className="text-xl font-medium">The fight for LGBTQ+ rights is about more than identity — it’s about dignity, equality, and the right for everyone to live free from discrimination. Across communities, individuals and organizations are working to challenge stigma, amplify queer voices, and build societies where diversity is celebrated, not silenced.</p>
          </div>
          <div className="flex justify-between overflow-hidden">
            <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-medium">Why this issue matters</h3>
            <p className="font-medium text-sm w-80">Across the world, LGBTQ+ communities face systemic discrimination, violence, and exclusion that silence their voices and limit their opportunities. When people are denied the freedom to love, express themselves, or simply exist without fear, it reveals deep imbalances of power in our societies.</p>
            </div>
            <img src="https://d1y8sb8igg2f8e.cloudfront.net/images/Shutterstock_1756785539_1.width-800.jpg" className="h-60 w-60 object-cover rounded-lg"
            />
          </div>
          </div>
       </div>
       <Works/>
       <StoriesBlog/>
    </div>
  )
}

export default Lgbtq;