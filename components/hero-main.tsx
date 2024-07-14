import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";

export function HeroMain() {
  return (
    <HeroHighlight className="w-full h-screen relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/Background.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 text-center py-20 mt-52">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-4xl md:text-5xl lg:text-9xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto"  
        >
          Checkered {" "}
          <Highlight className="text-black dark:text-white">
            AI
          </Highlight>
        </motion.h1>
      </div>
    </HeroHighlight>
  );
}

