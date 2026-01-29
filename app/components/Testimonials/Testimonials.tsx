"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "李女士",
        age: "45岁",
        location: "吉隆坡",
        condition: "长期失眠 · 免疫力低下",
        quote: "跟着Candy调理3个月，睡眠质量明显改善，整个人精神状态都不一样了。她的陪伴让我重新找回了对健康的信心。",
        rating: 5,
        image: null, // Placeholder for privacy
    },
    {
        name: "张先生",
        age: "52岁",
        location: "槟城",
        condition: "慢性疲劳 · 亚健康",
        quote: "Candy不仅专业，更重要的是她的真诚。从她的康复经历中，我看到了希望。现在我的体力恢复了很多，工作也更有活力。",
        rating: 5,
        image: null,
    },
    {
        name: "王女士",
        age: "38岁",
        location: "新山",
        condition: "产后调理 · 气血不足",
        quote: "产后身体虚弱，是Candy帮我制定了灵芝调理方案。她的耐心陪伴和专业指导，让我快速恢复了元气。非常感谢！",
        rating: 5,
        image: null,
    },
];

export default function Testimonials() {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-cream" aria-label="客户见证">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-forest font-bold mb-4">
                        他们的疗愈故事
                    </h2>
                    <p className="text-base sm:text-lg text-forest/70 font-sans max-w-2xl mx-auto">
                        真实的改变，来自真诚的陪伴
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                            className="relative bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/60 hover:shadow-lg"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 opacity-10">
                                <Quote className="w-16 h-16 text-forest" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-champagne-gold text-champagne-gold" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-sm sm:text-base text-forest/80 font-sans leading-relaxed mb-6 relative z-10">
                                "{testimonial.quote}"
                            </p>

                            {/* Divider */}
                            <div className="w-12 h-0.5 bg-gradient-to-r from-champagne-gold to-transparent mb-4" />

                            {/* User Info */}
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forest/20 to-champagne/20 flex items-center justify-center">
                                        <span className="text-forest font-serif font-bold text-lg">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-base font-serif font-semibold text-forest">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-xs text-forest/50 font-sans">
                                            {testimonial.age} · {testimonial.location}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs text-champagne-dark font-sans italic mt-2">
                                    {testimonial.condition}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 sm:mt-16"
                >
                    <p className="text-sm sm:text-base text-forest/60 font-sans">
                        💚 每一个改变，都从一次真诚的对话开始
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
