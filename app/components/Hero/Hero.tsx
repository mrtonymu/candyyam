"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ChevronDown, Users, Award, Clock } from "lucide-react";

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const name = "Candy 严悦心";
    const nameChars = name.split("");

    const scrollToSection = (id: string) => {
        const element = document.querySelector(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-cream to-champagne/10">
            {/* Floating Organic Shapes with Parallax */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-forest/10 to-forest-light/10 blur-3xl opacity-60"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-champagne-gold/20 to-champagne/10 blur-3xl opacity-50"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                        scale: [1, 0.9, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 text-center px-6 max-w-5xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="inline-block mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white/30 rounded-full shadow-sm">
                        <Award className="w-4 h-4 text-champagne-gold" />
                        <span className="text-sm font-sans text-forest/80">面瘫康复者 · 专业健康引导师</span>
                    </div>
                </motion.div>

                {/* Name with letter-by-letter animation */}
                <motion.h1
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-forest mb-4"
                    variants={itemVariants}
                >
                    {nameChars.map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.5 + index * 0.05,
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Golden Divider */}
                <motion.div
                    variants={itemVariants}
                    className="w-24 h-1 bg-gradient-to-r from-transparent via-champagne-gold to-transparent mx-auto mb-6"
                />

                {/* Subtitle */}
                <motion.p
                    className="text-xl sm:text-2xl md:text-3xl font-sans text-forest/70 mb-4"
                    variants={itemVariants}
                >
                    灵芝健康引导师
                </motion.p>

                {/* Tagline */}
                <motion.p
                    className="text-base sm:text-lg md:text-xl font-sans text-forest/60 mb-10"
                    variants={itemVariants}
                >
                    和更多人一起，用健康创造自由与自信 🍀
                </motion.p>

                {/* Statistics Bar */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 pb-10 border-b border-forest/10"
                >
                    <div className="flex items-center gap-3 px-6 py-3 bg-white/40 backdrop-blur-md rounded-2xl border border-white/20">
                        <Users className="w-5 h-5 text-champagne-gold" />
                        <div className="text-left">
                            <div className="text-2xl font-serif font-bold text-forest">100+</div>
                            <div className="text-xs text-forest/60 font-sans">客户康复</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 px-6 py-3 bg-white/40 backdrop-blur-md rounded-2xl border border-white/20">
                        <Users className="w-5 h-5 text-champagne-gold" />
                        <div className="text-left">
                            <div className="text-2xl font-serif font-bold text-forest">500+</div>
                            <div className="text-xs text-forest/60 font-sans">社群成员</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 px-6 py-3 bg-white/40 backdrop-blur-md rounded-2xl border border-white/20">
                        <Clock className="w-5 h-5 text-champagne-gold" />
                        <div className="text-left">
                            <div className="text-2xl font-serif font-bold text-forest">14年+</div>
                            <div className="text-xs text-forest/60 font-sans">专业经验</div>
                        </div>
                    </div>
                </motion.div>

                {/* Dual CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="https://wa.me/60142280388?text=你好，我想了解免费健康咨询"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-champagne-gold to-champagne-dark text-forest rounded-full font-sans font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                        <span className="flex items-center justify-center gap-2">
                            免费健康咨询
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </a>
                    <button
                        onClick={() => scrollToSection('#about')}
                        className="w-full sm:w-auto px-8 py-4 bg-white/60 backdrop-blur-md border-2 border-forest/20 text-forest rounded-full font-sans font-semibold text-lg hover:bg-white/80 hover:border-champagne-gold transition-all"
                    >
                        了解我的故事
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
