import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import Navbar from './components/navigation/Navbar'
import FullScreenNav from './components/navigation/FullScreenNav'
import ArtPage from './pages/art/component/ArtPage'
import DigitalMedia from './pages/DitigalMedia/DigitalMedia'
import { About} from './pages/about/About'
import Media from './pages/DitigalMedia/Media'
import VirtualGallery from './pages/virtualGallery/VirtualGallery'
import OrbitGallery from './pages/orbitGallery/OrbitGallery'




const App = () => {

  return (
    <div>
      <Navbar/>
      <FullScreenNav/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/art' element={<ArtPage/>}/>
        <Route path='/digital-media' element={<DigitalMedia/>}/>
        <Route path='/virtual-gallery' element={<VirtualGallery/>}/>
        <Route path='/art-hub' element={<OrbitGallery/>}/>
        <Route path='/project' element={<About/>}/>
        <Route path='/media' element={<Media/>}/>
      </Routes>
    </div>
  )
}

export default App
