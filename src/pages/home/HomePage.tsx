import Video from '../../components/home/Video'
import HomeHeroText from '../../components/home/HomeHeroText'



const HomePage = () => {
  return (
    <div>
        <div className='w-screen h-screen bg-black fixed'>
        <Video/>
        </div>
        <div className='w-screen h-screen relative text-white flex flex-col'>
        <HomeHeroText/>
        </div>

    </div>
  )
}

export default HomePage