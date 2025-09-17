import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import Navbar from './components/navigation/Navbar'
import FullScreenNav from './components/navigation/FullScreenNav'
import ArtPage from './pages/art/component/ArtPage'
import DigitalMedia from './pages/DitigalMedia/DigitalMedia'
import { VirtualGallery } from './pages/exhibition/VirtualGallery'
import Media from './pages/DitigalMedia/Media'




const App = () => {

  return (
    <div>
      <Navbar/>
      <FullScreenNav/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/art' element={<ArtPage/>}/>
        <Route path='/digital-media' element={<DigitalMedia/>}/>
        <Route path='/project' element={<VirtualGallery/>}/>
        <Route path='/media' element={<Media/>}/>
      </Routes>
    </div>
  )
}

export default App
