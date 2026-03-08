import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Check if an element is clickable to expand cursor
        const handleHoverStart = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                target.classList.contains('cursor-pointer');

            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleHoverStart);
        window.addEventListener('mouseout', () => setIsHovering(false));
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleHoverStart);
            window.removeEventListener('mouseout', () => setIsHovering(false));
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible]);

    // Hide default cursor globally on large screens where custom cursor works
    useEffect(() => {
        document.body.classList.add('hide-default-cursor');
        return () => document.body.classList.remove('hide-default-cursor');
    }, []);

    if (typeof window === 'undefined' || window.innerWidth < 768) return null; // Don't show on mobile

    return (
        <>
            {/* The small tracking dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-n-gold rounded-full pointer-events-none z-[9999] mix-blend-exclusion"
                animate={{
                    x: mousePos.x - 4,
                    y: mousePos.y - 4,
                    scale: isHovering ? 0 : 1,
                    opacity: isVisible ? 1 : 0
                }}
                transition={{ type: "tween", ease: "linear", duration: 0 }}
            />

            {/* The trailing, expanding ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-n-gold/60 rounded-full pointer-events-none z-[9998] mix-blend-exclusion flex items-center justify-center bg-n-gold/10 backdrop-blur-sm"
                animate={{
                    x: mousePos.x - 20,
                    y: mousePos.y - 20,
                    scale: isHovering ? 2 : 1,
                    opacity: isVisible ? 1 : 0
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
            >
                {/* Optional 'View' text inside the expanded cursor when hovering something specific */}
            </motion.div>
        </>
    );
}
