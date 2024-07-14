// index.tsx
"use client";

import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

import Loader from "@/components/Loader"; 
import { MainNavbar } from "@/components/navbar";
import { HeroMain } from "@/components/hero-main";
import { HeroParallaxTry } from "@/components/Parallax";


const Home = () => {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState<any>(null); 

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <main>
      {loaderFinished ? (
        <>
          <MainNavbar/>
          
          <HeroMain/>
          <div className="mt-8">
          {/* <HeroScroll/> */}
          <HeroParallaxTry/>
          </div>
          
          
        </>
      ) : (
        <Loader timeline={timeline} />
      )}
    </main>
  );
};

export default Home;
