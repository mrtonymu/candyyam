"use client";

import { motion } from "framer-motion";
import { Calendar, Heart, Sparkles, TrendingUp } from "lucide-react";

const timeline = [
    {
        year: "2019",
        icon: Heart,
        title: "面瘫突袭",
        description: "生活被突如其来的面瘫打乱，左脸失去知觉，无法正常表达情绪。那段时间，我感到无助和迷茫。",
        color: "from-forest/20 to-forest-light/10",
    },
    {
        year: "2020",
        icon: Sparkles,
        title: "遇见灵芝",
        description: "在朋友的介绍下，开始接触灵芝。从怀疑到尝试，我开始了自然疗愈的探索之旅。",
        color: "from-champagne/30 to-champagne-gold/15",
    },
    {
        year: "2021",
        icon: TrendingUp,
        title: "逐步康复",
        description: "坚持调理，配合健康的生活方式，面部功能逐渐恢复。这个过程让我深刻理解了身心疗愈的力量。",
        color: "from-forest-light/20 to-champagne/15",
    },
    {
        year: "2022-现在",
        icon: Calendar,
        title: "陪伴他人",
        description: "完全康复后，我决定成为健康引导师，用自己的经历和专业知识，陪伴更多人走向健康与自由。",
        color: "from-champagne-gold/25 to-forest/10",
    },
];

export default function About() {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-cream to-champagne/5" aria-label="关于我">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-forest font-bold mb-4">
                        我的康复之路
                    </h2>
                    <p className="text-base sm:text-lg text-forest/70 font-sans max-w-2xl mx-auto">
                        从面瘫患者到健康引导师，这是一段关于坚持、信念与自愈的真实故事
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-forest/20 via-champagne-gold/30 to-forest/20 -translate-x-1/2 hidden sm:block" />

                    <div className="space-y-8 sm:space-y-12">
                        {timeline.map((item, index) => {
                            const Icon = item.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                                        }`}
                                >
                                    {/* Content Card */}
                                    <div className={`flex-1 ${isEven ? "sm:text-right" : "sm:text-left"} ml-12 sm:ml-0`}>
                                        <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/60 transition-all duration-300 hover:shadow-lg">
                                            <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${item.color} opacity-50 -z-10`} />

                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-2xl sm:text-3xl font-serif font-bold text-champagne-gold">
                                                    {item.year}
                                                </span>
                                            </div>

                                            <h3 className="text-xl sm:text-2xl font-serif text-forest font-bold mb-3">
                                                {item.title}
                                            </h3>

                                            <p className="text-sm sm:text-base text-forest/70 font-sans leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Icon Circle */}
                                    <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-champagne-gold to-champagne-dark flex items-center justify-center shadow-lg z-10">
                                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-forest" />
                                    </div>

                                    {/* Spacer for even items */}
                                    <div className="flex-1 hidden sm:block" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 sm:mt-16 bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
                >
                    <p className="text-lg sm:text-xl font-serif text-forest mb-4">
                        "每一次疗愈，都是一次重生"
                    </p>
                    <p className="text-sm sm:text-base text-forest/70 font-sans">
                        我相信，健康不仅是身体的恢复，更是心灵的自由。让我用我的经历，陪伴你找到属于自己的疗愈之路。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
