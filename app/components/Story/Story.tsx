"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Story() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

    // Character-by-character reveal
    const text = "从面瘫走回健康，用真诚陪伴每个想改变的人";
    const chars = text.split("");

    return (
        <section ref={ref} className="min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 bg-cream" aria-label="个人故事">
            <motion.div
                style={{ opacity, scale }}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center"
            >
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative order-2 md:order-1"
                >
                    <div className="aspect-[3/4] rounded-2xl sm:rounded-3xl bg-white/40 backdrop-blur-md border border-white/20 overflow-hidden shadow-lg relative">
                        <Image
                            src="/candy-portrait.png"
                            alt="Candy 严悦心 - 灵芝健康引导师"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent" aria-hidden="true" />
                    </div>
                </motion.div>

                {/* Text Side with scroll-triggered reveal */}
                <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-serif text-forest font-bold"
                    >
                        我的故事
                    </motion.h2>

                    <p className="text-xl sm:text-2xl md:text-3xl font-serif text-forest-light leading-relaxed" aria-label={text}>
                        {chars.map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0.3 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                    duration: 0.3,
                                    delay: i * 0.03,
                                }}
                                viewport={{ once: true, amount: 0.8 }}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-base sm:text-lg text-forest/70 font-sans leading-relaxed"
                    >
                        每一次陪伴，都是一次疗愈的旅程。我相信，健康不仅是身体的恢复，更是心灵的自由。
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
}
