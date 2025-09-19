import ImageCursorTrail from "../../../components/ui/image-cursortrail"
import { Skiper52 } from "../../../components/ui/skiper-ui/skiper52"
import { Skiper16 } from "./ArtCollectionPage"

const ArtPage = () => {
  const images = [
    "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
    "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
    "https://images.unsplash.com/photo-1644141655284-2961181d5a02?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500",
    "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
    "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500",
    "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
  ]
  return (
    <div>
       <div className="h-screen w-full bg-gradient-to-b from-red-50 via-[#FFFFF0] to-red-100">
        <ImageCursorTrail
        items={images}
        maxNumberOfImages={5}
        distance={25}
        imgClass="sm:w-40 w-28 sm:h-48 h-36"
        >
          <div className="relative z-40 flex justify-center items-center h-full px-4">
          <div className="flex flex-col gap-4 text-center">
            <div className="flex items-center gap-1">
            <h3 className="md:text-[7vw] font-[anton]">A Canvas</h3>
            <img src="https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2Fh5Zfbzp2yIRk7lLnV86XOQ%252F_5A_0798_H.jpg&width=910" className="w-52 h-20 object-cover rounded-full shrink-0"></img>
            <h3 className="md:text-[7vw] font-[anton]">of Change</h3>
            </div>

            <h3 className="text-3xl md:text-4xl leading-tight">
              <span className="block font-[Slab-light]">Where Creativity Meets</span>
              <span className="block font-[Slab-light]">Community <span className="text-gray-400">Philanthropy</span></span>
            </h3>

            <p className="max-w-xl mx-auto text-gray-500 text-sm md:text-base">
            Step into our virtual gallery and explore a vibrant collection of artworks, films, and performances created by changemakers from across the world. Each piece tells a unique story of generosity, resilience, and the power of communities leading their own change. From digital art to documentaries, trailers, and paintings, this space celebrates creativity as a force for transformation.
            </p>
          </div>
        </div>
    </ImageCursorTrail>
    </div>
    <Skiper16/>
    <Skiper52/>
    </div>
  )
}

export default ArtPage
