"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Sparkles, Users } from "lucide-react";

const services = [
    {
        icon: MessageCircle,
        title: "一对一健康咨询",
        titleEn: "Personal Consultation",
        description: "深度了解您的健康状况，制定个性化的灵芝调理方案",
        gradient: "from-forest/10 to-forest-light/5",
    },
    {
        icon: Sparkles,
        title: "灵芝产品推荐",
        titleEn: "Lingzhi Guidance",
        description: "根据体质和需求，推荐最适合您的优质灵芝产品",
        gradient: "from-champagne/20 to-champagne-gold/10",
    },
    {
        icon: Heart,
        title: "长期陪伴计划",
        titleEn: "Wellness Journey",
        description: "持续跟进健康进展，提供情绪支持和生活方式指导",
        gradient: "from-forest-light/10 to-champagne/10",
    },
    {
        icon: Users,
        title: "线上健康课程",
        titleEn: "Online Courses",
        description: "分享自愈经验，传授自然疗愈的智慧与方法",
        gradient: "from-champagne-gold/15 to-forest/5",
    },
];

export default function Services() {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-champagne/5 to-cream" aria-label="服务项目">
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
                        我的服务
                    </h2>
                    <p className="text-base sm:text-lg text-forest/70 font-sans max-w-2xl mx-auto">
                        用专业与真诚，陪伴您的健康之旅
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                className="relative bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 cursor-pointer group transition-all duration-300 hover:bg-white/60 hover:shadow-lg"
                            >
                                <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${service.gradient} opacity-50 -z-10`} />

                                <div className="flex flex-col h-full">
                                    {/* Icon */}
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-forest/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-champagne-gold/20 transition-colors">
                                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-forest" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl sm:text-3xl font-serif text-forest font-bold mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-forest/50 font-sans uppercase tracking-wider mb-4">
                                        {service.titleEn}
                                    </p>

                                    {/* Description */}
                                    <p className="text-sm sm:text-base text-forest/70 font-sans leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 sm:mt-16"
                >
                    <p className="text-base sm:text-lg text-forest/60 font-sans mb-6">
                        准备好开始你的健康之旅了吗？
                    </p>
                    <a
                        href="https://wa.me/60142280388?text=你好，我想预约免费健康咨询 🍀"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-champagne-gold to-champagne-dark text-forest rounded-full font-sans font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        <span>立即预约免费咨询</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <p className="text-xs sm:text-sm text-forest/40 font-sans mt-4">
                        通常在5分钟内回复
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
