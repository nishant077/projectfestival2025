import React, { useEffect, useState, useRef } from 'react';
import gsap from "gsap";
import { videos } from './MediaVideos';
import './DigitalMedia.css'

const ReactPlayer = React.lazy(() => import("react-player"));

const Media = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient && sliderRef.current) {
            initializedCards();
        }
    }, [isClient]);

    const initializedCards = () => {
        if (!sliderRef.current) return;
        const cards = Array.from(sliderRef.current.querySelectorAll(".card"));

        gsap.to(cards, {
            y: (i) => 0 + 20 * i + "%",
            z: (i) => 15 * i,
            duration: 1,
            ease: "power3.out",
            stagger: -0.1,
        });
    }

    const handleClick = () => {
        if (isAnimating || !sliderRef.current) return;
        setIsAnimating(true);

        const slider = sliderRef.current;
        const cards = Array.from(slider.querySelectorAll(".card"));
        
        if (cards.length === 0) {
            setIsAnimating(false);
            return;
        }
        
        const lastCard = cards[cards.length - 1]; // Get last card without popping

        gsap.to(lastCard, {
            y: "+=150%",
            duration: 0.75,
            ease: "power3.inOut",
            onStart: () => {
                setTimeout(() => {
                    // Move the last card to the beginning
                    slider.prepend(lastCard);
                    initializedCards();
                    setTimeout(() => {
                        setIsAnimating(false);
                    }, 1000);
                }, 300);
            }
        });
    }

    return (
        <div className='w-full h-full bg-[#000]'>
      <div className='container' onClick={handleClick}>
         <div className='slider' ref={sliderRef}>
           {videos.map((video)=>(
            <div className='card' key={video.id}>
               <div className='card-info'>
                <div className='card-item'>
                    <p>{video.date}</p>
                    </div>
                    <div className='card-item'>
                    <p>{video.title}</p>
                    </div>
                    <div className='card-item'>
                    <p>{video.category}</p>
                    </div>
               </div>
               <div className='video-player'>
                <ReactPlayer 
                 src={`https://vimeo.com/${video.id}`}
                 controls={false}
                 autoPlay={true}
                 loop={true}
                 playing
                 muted
                 width="100%"
                 height="100%"
                />
                </div>
            </div>
           ))}
         </div>
      </div>
    </div>
    )
}

export default Media