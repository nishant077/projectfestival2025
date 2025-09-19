import art1 from '../../../assets/images/About4.jpeg'
import art2 from '../../../assets/images/About7.jpeg'
import art3 from '../../../assets/images/Gallery14.jpeg'
import art4 from '../../../assets/images/Gallery15.jpeg'
import art5 from '../../../assets/images/Gallery16.jpeg'
import art6 from '../../../assets/images/About2.jpeg'
import art7 from '../../../assets/images/Gallery17.jpeg'
import art8 from '../../../assets/images/Gallery18.jpg'
import art9 from '../../../assets/images/Gallery24.jpeg'

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from '../../../lib/utils'

const Skiper52 = () => {
  const images = [
    {
      src: art1,
      alt: "Community Art Project",
      code: "# 001",
      title: "Unity in Diversity",
      description: "A collaborative mural celebrating cultural diversity in urban spaces"
    },
    {
      src: art2,
      alt: "Street Art Festival",
      code: "# 002",
      title: "Colors of Change",
      description: "Annual festival transforming neighborhoods through creative expression"
    },
    {
      src: art3,
      alt: "Youth Art Program",
      code: "# 003",
      title: "Next Generation Voices",
      description: "Empowering young artists to address social issues through visual storytelling"
    },
    {
      src: art4,
      alt: "Public Installation",
      code: "# 004",
      title: "Reclaiming Spaces",
      description: "Interactive installation turning abandoned lots into community galleries"
    },
    {
      src: art5,
      alt: "Community Workshop",
      code: "# 005",
      title: "Skills for Expression",
      description: "Free workshops teaching artistic techniques to all age groups"
    },
    {
      src: art6,
      alt: "Collaborative Mural",
      code: "# 006",
      title: "Shared Vision",
      description: "Residents working together to visualize their neighborhood's future"
    },
    {
      src: art7,
      alt: "Art Activism",
      code: "# 007",
      title: "Messages of Hope",
      description: "Using public art to raise awareness about environmental issues"
    },
    {
      src: art8,
      alt: "Cultural Preservation",
      code: "# 008",
      title: "Honoring Heritage",
      description: "Traditional art forms revitalized through community participation"
    },
    {
      src: art9,
      alt: "Healing Through Art",
      code: "# 009",
      title: "Therapeutic Creation",
      description: "Art programs supporting mental health and community healing"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f6f4] to-[#e9e6e1] px-6 md:px-10 pt-10 pb-10 flex flex-col gap-8 md:gap-16">
      <div className="flex flex-col items-start">
        <motion.h1 
          className='text-4xl md:text-5xl font-[anton] mb-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          When Communities Create,
        </motion.h1>
        <motion.h1 
          className='text-4xl md:text-5xl font-[anton]'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Change Takes Shape
        </motion.h1>
        
        <AnimatePresence mode="wait">
          <motion.p 
            key={activeIndex}
            className="mt-6 max-w-2xl text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {images[activeIndex].description}
          </motion.p>
        </AnimatePresence>
      </div>
      
      <div className='flex items-center justify-center flex-1'>
        <HoverExpand_001 
          className="w-full" 
          images={images} 
          onActiveIndexChange={setActiveIndex} 
        />
      </div>
    </div>
  );
};

export { Skiper52 };

const HoverExpand_001 = ({
  images,
  className,
  onActiveIndexChange,
}: {
  images: { src: string; alt: string; code: string; title: string; description: string }[];
  className?: string;
  onActiveIndexChange?: (index: number) => void;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(0);

  const handleImageInteraction = (index: number) => {
    setActiveImage(index);
    if (onActiveIndexChange) {
      onActiveIndexChange(index);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.8,
      }}
      className={cn("relative w-full max-w-7xl", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="flex w-full items-end justify-center gap-2 md:gap-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl shadow-lg"
              initial={{ width: "3rem", height: "24rem" }}
              animate={{
                width: activeImage === index ? "35rem" : "5rem",
                height: activeImage === index ? "32rem" : "24rem",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onClick={() => handleImageInteraction(index)}
              onHoverStart={() => handleImageInteraction(index)}
              whileHover={{ y: -5 }}
            >
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                  />
                )}
              </AnimatePresence>
              
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  >
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                    <p className="text-xs opacity-70 mt-4">{image.code}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <img
                src={image.src}
                className="h-full w-full object-cover"
                alt={image.alt}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export { HoverExpand_001 };