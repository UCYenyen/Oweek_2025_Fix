import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const useHomeAnimations = () => {
  const leftYucaRef = useRef<HTMLImageElement>(null);
  const chikenYucaRef = useRef<HTMLImageElement>(null);
  const gladiatorRef = useRef<HTMLImageElement>(null);
  const nerdRef = useRef<HTMLImageElement>(null);
  const cloudRef = useRef<HTMLImageElement>(null);
  const sunRef = useRef<HTMLImageElement>(null);
  const luminateTitleRef = useRef<HTMLImageElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      startAnimations();
    }, 10);

    const startAnimations = () => {
      const images = [leftYucaRef.current, chikenYucaRef.current, gladiatorRef.current, nerdRef.current, cloudRef.current, sunRef.current, luminateTitleRef.current];
      
      const validImages = images.filter(img => img !== null);
      
      if (validImages.length === 0) {
        console.log("No valid image references found");
        return;
      }

      const masterTimeline = gsap.timeline();

      gsap.set(backgroundRef.current, {
        backgroundColor: "#3F61AD"
      });

      gsap.set(sunRef.current, {
        opacity: 1,
        y: 300,
        scale: 0.8
      });

      gsap.set(luminateTitleRef.current, {
        opacity: 1,
        y: -150,
        scale: 1
      });

      gsap.set([leftYucaRef.current, chikenYucaRef.current], {
        x: -300,
        opacity: 0,
        scale: 1
      });
      
      gsap.set([gladiatorRef.current, nerdRef.current], {
        x: 300,
        opacity: 0,
        scale: 0.8
      });

      gsap.set(cloudRef.current, {
        opacity: 0,
        scale: 0.5
      });

      masterTimeline
        .to(leftYucaRef.current, {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.8,
          ease: "power2.out"
        })
        .to(chikenYucaRef.current, {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.6,
          ease: "power2.out"
        }, "<")
        .to(gladiatorRef.current, {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.8,
          ease: "power2.out"
        }, "<")
        .to(nerdRef.current, {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.6,
          ease: "power2.out"
        }, "<")
        .to(cloudRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out"
        }, "<")
        .to(sunRef.current, {
          scale: 1,
          y: 0,
          duration: 2,
          ease: "power2.out"
        }, "<")
        .to(luminateTitleRef.current, { 
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out"
        }, "<")
       
        .to(backgroundRef.current, {
          backgroundColor: "#B2D5F1",
          duration: 5,
          ease: "power2.out"
        }, "<"); 
        
      // Idle animation disini
      setTimeout(() => {
        gsap.to(cloudRef.current, {
          x: 25,
          y: -10,
          duration: 3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        });

        gsap.to(sunRef.current, {
          rotate: 1.5,
          scale:1.05,
          transformOrigin: "center center",
          duration: 4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        });

        gsap.to(leftYucaRef.current, {
          y: -15,
          duration: 2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        });

        gsap.to(chikenYucaRef.current, {
          y: -12,
          rotation: 2,
          duration: 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        });

        gsap.to(gladiatorRef.current, {
          y: -10,
          rotation: -1,
          duration: 2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        });

        gsap.to(nerdRef.current, {
          y: -8,
          duration: 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        });
      }, 1000);
    };

    return () => {
      clearTimeout(timer);
      gsap.killTweensOf([
        leftYucaRef.current,
        chikenYucaRef.current,
        gladiatorRef.current,
        nerdRef.current,
        cloudRef.current,
        sunRef.current,
        luminateTitleRef.current,
        backgroundRef.current
      ]);
    };
  }, []);

  return {
    leftYucaRef,
    chikenYucaRef,
    gladiatorRef,
    nerdRef,
    cloudRef,
    sunRef,
    luminateTitleRef,
    backgroundRef
  };
};