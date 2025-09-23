import exhibition from './../../assets/Exhibition.mp4'
const Video = () => {
  return (
    <div className='h-screen w-full relative'>
    <video className='h-full w-full object-cover' autoPlay loop muted src={exhibition}/>
    </div>
  )
}

export default Video