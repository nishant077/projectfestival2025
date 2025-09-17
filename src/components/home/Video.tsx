import exhibition from './../../assets/Exhibition.mp4'
const Video = () => {
  return (
    <div className='h-full w-full'>
    <video className='h-full w-full object-cover' autoPlay loop muted src={exhibition}/>
    </div>
  )
}

export default Video