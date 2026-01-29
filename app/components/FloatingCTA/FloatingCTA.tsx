"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function FloatingCTA() {
    const [isHovered, setIsHovered] = useState(false);

    // Replace with actual WhatsApp number
    const whatsappNumber = "60142280388"; // Format: country code + number (no + or spaces)
    const whatsappMessage = encodeURIComponent("你好，我想了解灵芝健康引导服务 🍀");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50"
        >
            <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                    scale: [1, 1.02, 1],
                }}
                transition={{
                    scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
                className="group relative bg-gradient-to-r from-champagne-gold to-champagne-dark text-forest px-6 py-3 sm:px-8 sm:py-4 rounded-full font-sans font-semibold text-base sm:text-lg shadow-lg hover:shadow-[0_8px_30px_rgb(212,175,55,0.4)] transition-shadow flex items-center gap-2 sm:gap-3"
            >
                <span className="hidden sm:inline">开启健康之旅</span>
                <span className="sm:hidden">开启之旅</span>
                <motion.div
                    animate={{ x: isHovered ? 3 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-champagne-gold/20 blur-xl -z-10 group-hover:bg-champagne-gold/30 transition-colors" />
            </motion.a>
        </motion.div>
    );
}
