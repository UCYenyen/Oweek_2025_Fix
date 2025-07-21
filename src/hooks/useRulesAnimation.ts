import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const useRulesAnimations = () => {
    const sunRef = useRef<HTMLImageElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            startAnimations();
        }, 10);

        const startAnimations = () => {
            if (!sunRef.current && !backgroundRef.current) {
                console.log("No valid references found");
                return;
            }

            const masterTimeline = gsap.timeline();

            gsap.set(backgroundRef.current, {
                backgroundColor: "#3F61AD"
            });

            gsap.set(sunRef.current, {
                autoAlpha: 1,
                y: 300,
                scale: 0.8
            });

            masterTimeline
                .to(sunRef.current, {
                    scale: 1,
                    y: 0,
                    duration: 2,
                    ease: "power2.out"
                })
                .to(backgroundRef.current, {
                    backgroundColor: "#B2D5F1",
                    duration: 5,
                    ease: "power2.out"
                }, "<");

            // Idle animation
            setTimeout(() => {
                gsap.to(sunRef.current, {
                    rotate: 1.5,
                    scale: 1.0025,
                    transformOrigin: "center center",
                    duration: 4,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1
                });
            }, 1000);
        };

        return () => {
            clearTimeout(timer);
            gsap.killTweensOf([
                sunRef.current,
                backgroundRef.current
            ]);
        };
    }, []);

    return {
        sunRef,
        backgroundRef
    };
};
