import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from '../../../lib/utils'

const Gallery = () => {
  const images = [
    {
      src: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2025-04/250409-hungary-lgbtq-protest-mn-1345-b54746.jpg',
      alt: "Community Art Project",
    },
    {
      src: 'https://m.thepeninsulaqatar.com/get/maximage/20250308_1741450051-296.jpeg?1741450051',
      alt: "Street Art Festival",
    },
    {
      src: 'https://img.freepik.com/premium-photo/lgbt-rights-png-gender-equality-protest-remix-transparent-background_53876-1021674.jpg',
      alt: "Youth Art Program",

    },
    {
      src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/newscms/2017_25/2049841/afp_pg8zf.jpg',
      alt: "Public Installation",
    },
    {
      src: 'https://helios-i.mashable.com/imagery/articles/05yLBRqPjmZbNqFa4viQEWc/hero-image.fill.size_1200x900.v1623956600.png',
      alt: "Community Workshop",
    },
    {
      src: 'https://www.acluga.org/app/uploads/2023/03/adobestock_278047167-600x400.jpeg',
      alt: "Collaborative Mural",
    },
    {
      src: 'https://d3i6fh83elv35t.cloudfront.net/static/2019/12/2019-10-08T184608Z_13605085_RC1FB7E9D970_RTRMADP_3_USA-COURT-LGBT-1024x683.jpg',
      alt: "Art Activism",
      code: "# 007",
    },
    {
      src: 'https://i.guim.co.uk/img/media/d0a79707c9050705869839a8b99459c620257131/0_206_3488_2094/master/3488.jpg?width=465&dpr=1&s=none&crop=none',
      alt: "Cultural Preservation",
    },
    {
      src: 'https://images.euronews.com/articles/stories/04/78/91/24/1536x864_cmsv2_779e862b-9c43-5387-b2ef-725ebb22f752-4789124.jpg',
      alt: "Healing Through Art",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" pt-10 pb-10 px-10 flex flex-col gap-8 md:gap-10">
      <div className="flex flex-col items-start">
        <h3 className="text-4xl font-[anton]">Stories in Pictures</h3>
        <AnimatePresence mode="wait">
          <motion.p 
            key={activeIndex}
            className="mt-6 max-w-2xl text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
          </motion.p>
        </AnimatePresence>
      </div>
      
      <div className='flex items-center justify-center flex-1'>
        <HoverExpand_001 
          className="w-full" 
          images={images} 
        />
      </div>
    </div>
  );
};

export { Gallery };

const HoverExpand_001 = ({
  images,
  className,
  onActiveIndexChange,
}: {
  images: { src: string; alt: string }[]; // Remove code, title, description
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
};;

export { HoverExpand_001 };