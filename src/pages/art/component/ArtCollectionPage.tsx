import art1 from '../../../assets/images/About4.jpeg'
import art2 from '../../../assets/images/About7.jpeg'
import art3 from '../../../assets/images/Gallery14.jpeg'
import art4 from '../../../assets/images/Gallery15.jpeg'
import art5 from '../../../assets/images/Gallery16.jpeg'

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import { useRef } from "react";

const projects = [
  {
    title: "Project 1",
    src: art1
  },
  {
    title: "Project 2",
    src: art2
  },
  {
    title: "Project 3",
    src: art3
  },
  {
    title: "Project 4",
    src: art4
  },
  {
    title: "Project 5",
    src: art5
  },
];

const StickyCard_001 = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  src: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 50}px)`,
        }}
        className="rounded-4xl relative -top-1/4 flex h-[400px] w-[600px] origin-top flex-col overflow-hidden"
      >
        <img src={src} alt={title} className="h-full w-full object-cover" />
      </motion.div>
    </div>
  );
};

const Skiper16 = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative flex w-full flex-col  gap-2 items-center justify-center pb-[40vh] pt-[50vh] bg-[#1e1e1e] text-white"
      >
        <div className="absolute left-1/2 top-[5%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
          <h3 className="font-[anton] relative max-w-5xl text-5xl">
          Every brushstroke, every frame, every idea—an act of giving, an act of change.
          </h3>
          <p className='relative max-w-xl text-sm md:text-base'>The Art Showcase is a celebration of creativity born from community spirit. Here, artists translate generosity, resilience, and hope into powerful visuals that invite us to see the world through new perspectives.</p>
        </div>
        {projects.map((project, i) => {
          const targetScale = Math.max(
            0.5,
            1 - (projects.length - i - 1) * 0.1,
          );
          return (
            <StickyCard_001
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
};

export { Skiper16, StickyCard_001 };

/**
 * Skiper 16 StickyCard_001 — React + Framer Motion
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
