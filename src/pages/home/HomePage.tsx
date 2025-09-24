import Video from '../../components/home/Video'
import Section2 from './Section2'
import exhibition from './../../assets/Exhibition.mp4'





const HomePage = () => {
  return (
    <div>
        <div className='w-full h-screen bg-[#FAFDEE] overflow-hidden'>
          <div className='relative'>
        <Video/>
        </div>
        <div className='absolute text-white top-10 left-10 w-full text-center pt-5 font-[anton]'>
        <div className='text-[6vw] uppercase leading-[7vw] flex items-center justify-center'>Stories</div>
        <div className='text-[6vw] uppercase leading-[7vw] flex items-start justify-center gap-2'>for
            <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden' >
            <div className='h-full w-full'>
            <video className='h-full w-full object-cover' autoPlay loop muted src={exhibition}/>
            </div>
            </div> Change</div>
        <div className='text-[6vw] uppercase leading-[8vw] flex items-center justify-center'>Festival 2025</div>
    </div>
    <div className='absolute top-120 right-10 text-base font-bold text-white max-w-96 text-justify'>
       <span>Join us in a global celebration of art and community philanthropy. Experience digital art, documentaries, short films, and paintings created by inspiring changemakers who are reimagining how communities give, share, and transform together.</span>
    </div>
        </div>
      <Section2/>
    </div>
  )
}

export default HomePage