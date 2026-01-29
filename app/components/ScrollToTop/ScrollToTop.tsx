"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [300, 400], [0, 1]);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsVisible(latest > 400);
        });

        return () => unsubscribe();
    }, [scrollY]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!isVisible) return null;

    return (
        <motion.button
            style={{ opacity }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 sm:bottom-28 sm:right-8 z-40 w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-xl hover:bg-champagne-gold/20 transition-all duration-300 flex items-center justify-center group"
            aria-label="返回顶部"
        >
            <ChevronUp className="w-5 h-5 text-forest group-hover:-translate-y-1 transition-transform" />
        </motion.button>
    );
}
