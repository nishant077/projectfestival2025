
import ReactPlayer from "react-player";

const VideoSection = () => {
  return (
    <div>
        <div className='h-auto w-full px-10 pt-10 pb-10 mx-auto'>
            <div className='flex flex-col gap-10'>
             <h3 className='text-4xl font-[anton]'>Stories in Motion</h3>
             <p className='font-medium text-3xl'>Above video give us the chance to see and feel the stories unfold — the courage, struggles, and celebrations of LGBTQ+ communities. Through film, voices that are often unheard become visible, showing us the power of love, resilience, and solidarity. Watch this story to witness how individuals and groups are challenging stigma, shifting power, and creating spaces of pride and belonging.</p>
             <div className="relative">
    <ReactPlayer
        src="https://youtu.be/8Vm_ITh5tEU?si=lRq7JNY2HJRtRsFV"
        playing={true}  
        controls={true} 
        muted={true}     
        loop={true}      
        width="100%"
        height="450px"
        style={{ borderRadius: '8px', overflow: 'hidden' }}
    />
    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
    Courtesy of <strong>Freedom Studio</strong>
    </div>
</div>

             </div>

        </div>
    </div>
  )
}

export default VideoSection