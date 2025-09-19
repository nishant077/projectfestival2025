import Video from './Video'

const HomeHeroText = () => {
  return (
    <>
    <div className='text-center pt-5 font-[anton]'>
        <div className='text-[6vw] uppercase leading-[7vw] flex items-center justify-center'>Stories</div>
        <div className='text-[6vw] uppercase leading-[7vw] flex items-start justify-center gap-2'>for
            <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden' ><Video />
            </div> Change</div>
        <div className='text-[6vw] uppercase leading-[8vw] flex items-center justify-center'>Festival 2025</div>
    </div>
    <div className='bottom-20 right-10 text-base font-bold text-white max-w-96 absolute text-justify'>
       <span>Join us in a global celebration of art and community philanthropy. Experience digital art, documentaries, short films, and paintings created by inspiring changemakers who are reimagining how communities give, share, and transform together.</span>
    </div>
    </>
  )
}

export default HomeHeroText