// src/hooks/useLenis.js
import { useEffect } from "react";
import Lenis from "lenis";

const useLenis = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,  // Scroll duration in seconds
            easing: (t) => t,  // Linear easing for scroll
            smoothWheel: true,  // Smooth scrolling for mouse wheel
            smoothTouch: true,  // Smooth scrolling for touch devices
            direction: "vertical",  // Ensure scroll is vertical
        });

        // Function to continuously update scroll position
        const update = () => {
            lenis.raf();  // Lenis will manage the scroll position on each frame
            requestAnimationFrame(update);  // Recurse for smooth updates
        };

        // Start the animation frame loop
        update();

        // Clean up when the component unmounts
        return () => {
            lenis.destroy();  // Remove all event listeners and cleanup
        };
    }, []);
};

export default useLenis;
22