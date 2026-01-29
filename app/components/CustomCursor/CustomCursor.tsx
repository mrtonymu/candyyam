"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    if (!mounted) return null;

    return (
        <>
            {/* Main Cursor */}
            <motion.div
                className="pointer-events-none fixed z-[9999] hidden md:block"
                style={{
                    willChange: "transform",
                }}
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 800,
                    damping: 35,
                    mass: 0.3,
                }}
            >
                <div className="h-3 w-3 rounded-full bg-champagne-gold/60 backdrop-blur-sm" />
            </motion.div>

            {/* Follower Cursor */}
            <motion.div
                className="pointer-events-none fixed z-[9998] hidden md:block"
                style={{
                    willChange: "transform",
                }}
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.8 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    mass: 0.5,
                }}
            >
                <div className="h-10 w-10 rounded-full border border-champagne-gold/30" />
            </motion.div>
        </>
    );
}
