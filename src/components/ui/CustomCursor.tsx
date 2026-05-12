import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Motion values for smooth tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring animations for the trailing effect
    const springConfig = { damping: 25, stiffness: 250 };
    const trailX = useSpring(mouseX, springConfig);
    const trailY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('role') === 'button';

            setIsHovering(!!isInteractive);
        };

        const handleMouseLeaveWindow = () => setIsVisible(false);
        const handleMouseEnterWindow = () => setIsVisible(true);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseleave', handleMouseLeaveWindow);
        document.addEventListener('mouseenter', handleMouseEnterWindow);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeaveWindow);
            document.removeEventListener('mouseenter', handleMouseEnterWindow);
        };
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
            {/* Main cursor dot */}
            <motion.div
                className="w-1.5 h-1.5 bg-brand-primary rounded-full fixed top-0 left-0"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Trailing ring */}
            <motion.div
                className="w-7 h-7 border border-brand-primary/50 rounded-full fixed top-0 left-0 flex items-center justify-center"
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(255, 215, 0, 0.12)' : 'transparent',
                    borderColor: isHovering ? 'rgba(255, 215, 0, 0.85)' : 'rgba(255, 215, 0, 0.45)',
                }}
                style={{
                    x: trailX,
                    y: trailY,
                    translateX: '-50%',
                    translateY: '-50%',
                    mixBlendMode: 'difference',
                }}
            />
        </div>
    );
};
