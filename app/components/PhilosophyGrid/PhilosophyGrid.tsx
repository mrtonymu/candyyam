"use client";

import { motion } from "framer-motion";
import { Heart, Users, Sparkles, Leaf, Sun, Wind, Target } from "lucide-react";

const philosophyCards = [
    {
        title: "灵芝",
        subtitle: "Lingzhi · Reishi",
        description: "大自然的馈赠，千年智慧的结晶。灵芝不仅是一种草药，更是连接古老智慧与现代健康的桥梁。",
        details: [
            "增强免疫系统功能",
            "改善睡眠质量与深度",
            "调节身心平衡状态",
            "促进新陈代谢循环",
        ],
        icon: Sparkles,
        span: "md:col-span-2",
        gradient: "from-forest/20 via-forest-light/15 to-champagne/10",
        iconBg: "bg-forest/15",
        iconHover: "group-hover:bg-champagne-gold/25",
        decorativeIcon: Leaf,
    },
    {
        title: "陪伴",
        subtitle: "Companionship",
        description: "真诚的倾听，温暖的支持。每一次对话，都是一次心灵的疗愈。我用自己的经历，陪你走过每一步。",
        details: [
            "一对一深度健康咨询",
            "长期跟进与调整方案",
            "24/7 WhatsApp支持",
        ],
        icon: Users,
        span: "md:col-span-1",
        gradient: "from-champagne/30 via-champagne-gold/20 to-champagne/15",
        iconBg: "bg-champagne/20",
        iconHover: "group-hover:bg-champagne-gold/35",
        decorativeIcon: Heart,
    },
    {
        title: "自愈",
        subtitle: "Self-Healing",
        description: "唤醒身体的本能，重获生命的活力。相信自己，相信自然的力量，每个人都有自我疗愈的能力。",
        details: [
            "自然疗法引导",
            "身心调和训练",
            "生活方式优化",
        ],
        icon: Heart,
        span: "md:col-span-1",
        gradient: "from-forest-light/20 via-champagne/15 to-forest/10",
        iconBg: "bg-forest-light/15",
        iconHover: "group-hover:bg-champagne/30",
        decorativeIcon: Sun,
    },
    {
        title: "目标",
        subtitle: "Our Mission",
        description: "让每个人都能用健康创造自由与自信。不仅是身体的康复，更是心灵的重生。",
        details: [
            "帮助100+人改善健康",
            "建立健康生活社群",
            "传播自然疗愈智慧",
        ],
        icon: Target,
        span: "md:col-span-2",
        gradient: "from-champagne-gold/25 via-forest-light/15 to-champagne/20",
        iconBg: "bg-champagne-gold/20",
        iconHover: "group-hover:bg-champagne-gold/35",
        decorativeIcon: Wind,
    },
];

const principles = [
    { icon: Leaf, text: "天然有机" },
    { icon: Sun, text: "身心合一" },
    { icon: Wind, text: "顺应自然" },
];

export default function PhilosophyGrid() {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-cream via-champagne/5 to-cream" aria-label="健康哲学">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-forest font-bold mb-4">
                        健康哲学
                    </h2>
                    <p className="text-base sm:text-lg text-forest/70 font-sans max-w-2xl mx-auto mb-6">
                        用自然的力量，陪伴每一次蜕变
                    </p>

                    {/* Principles Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {principles.map((principle, index) => {
                            const Icon = principle.icon;
                            return (
                                <motion.div
                                    key={principle.text}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white/30 rounded-full shadow-sm"
                                >
                                    <Icon className="w-4 h-4 text-forest" />
                                    <span className="text-sm font-sans text-forest/80">{principle.text}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Philosophy Cards Grid - 2x2 Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {philosophyCards.map((card, index) => {
                        const Icon = card.icon;
                        const DecorativeIcon = card.decorativeIcon;
                        return (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, y: -6 }}
                                className={`${card.span} relative bg-white/40 backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/60 hover:backdrop-blur-lg hover:shadow-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 cursor-pointer group overflow-hidden`}
                            >
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${card.gradient} opacity-70 -z-10`} />

                                {/* Decorative Elements */}
                                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-champagne-gold/10 blur-2xl group-hover:bg-champagne-gold/20 transition-colors" />
                                <DecorativeIcon className="absolute bottom-4 right-4 w-20 h-20 sm:w-24 sm:h-24 text-forest/5 group-hover:text-forest/10 transition-colors" />

                                <div className="relative flex flex-col h-full">
                                    {/* Icon & Title */}
                                    <div className="mb-4">
                                        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${card.iconBg} ${card.iconHover} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                                            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-forest" />
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-serif text-forest font-bold mb-1">
                                            {card.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-forest/50 font-sans uppercase tracking-wider">
                                            {card.subtitle}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm sm:text-base text-forest/70 font-sans leading-relaxed mb-4">
                                        {card.description}
                                    </p>

                                    {/* Details List */}
                                    <div className="mt-auto space-y-2 pt-4 border-t border-forest/10">
                                        {card.details.map((detail, i) => (
                                            <motion.div
                                                key={detail}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 + i * 0.08 }}
                                                viewport={{ once: true }}
                                                className="flex items-center gap-2"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-champagne-gold flex-shrink-0" />
                                                <span className="text-xs sm:text-sm text-forest/60 font-sans">
                                                    {detail}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-10 sm:mt-12 bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
                >
                    <p className="text-lg sm:text-xl font-serif text-forest/70 italic mb-2">
                        "健康不是终点，而是一场温柔的旅程"
                    </p>
                    <p className="text-sm text-forest/50 font-sans">
                        — Candy 严悦心
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
