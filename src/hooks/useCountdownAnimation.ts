import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const useCountdownAnimation = () => {
  const countdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdownRef.current) {
        const countdownCards = countdownRef.current.querySelectorAll('.countdown-card-container');
        
        if (countdownCards.length > 0) {
          gsap.set(countdownCards, {
            y: -100,
            opacity: 0
          });

          gsap.to(countdownCards, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.2, 
            delay: 0.5
          });
        }
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (countdownRef.current) {
        const countdownCards = countdownRef.current.querySelectorAll('.countdown-card-container');
        gsap.killTweensOf(countdownCards);
      }
    };
  }, []);

  return {
    countdownRef
  };
};