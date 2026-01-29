"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "灵芝适合哪些人？",
        answer: "灵芝是一种温和的天然保健品，适合大多数人群。特别适合免疫力低下、长期疲劳、睡眠质量差、亚健康状态的人群。但孕妇、哺乳期妇女、正在服用抗凝血药物的人群建议先咨询医生。",
    },
    {
        question: "咨询流程是怎样的？",
        answer: "首先通过WhatsApp与我联系，我会了解您的健康状况和需求。然后为您制定个性化的调理方案，包括灵芝产品推荐、生活方式建议等。整个过程我会持续跟进，提供支持和指导。",
    },
    {
        question: "需要多长时间才能看到效果？",
        answer: "每个人的体质和情况不同，一般来说，坚持调理1-3个月会有明显改善。重要的是保持耐心和信心，配合健康的生活方式，效果会更好。我会根据您的进展调整方案。",
    },
    {
        question: "收费标准如何？",
        answer: "我提供免费的初步咨询，了解您的需求后会根据服务内容（一对一咨询、长期陪伴计划等）给出透明的收费说明。我的目标是让每个人都能获得专业且真诚的健康指导。",
    },
    {
        question: "线上咨询还是线下见面？",
        answer: "目前主要提供线上咨询服务（WhatsApp、视频通话），方便马来西亚各地的朋友。如果您在吉隆坡地区，也可以安排线下见面咨询。线上服务同样专业有效。",
    },
    {
        question: "你的资质和经验如何？",
        answer: "我是面瘫康复的亲历者，通过灵芝和自然疗法成功恢复健康。我持续学习健康养生知识，并已帮助多位客户改善健康状况。我的优势在于真实的经历和真诚的陪伴。",
    },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-white/40 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl overflow-hidden hover:bg-white/60 transition-colors"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left group"
            >
                <h3 className="text-base sm:text-lg font-serif text-forest font-semibold pr-4 flex-1">
                    {question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center group-hover:bg-champagne-gold/20 transition-colors">
                    {isOpen ? (
                        <Minus className="w-4 h-4 text-forest" />
                    ) : (
                        <Plus className="w-4 h-4 text-forest" />
                    )}
                </div>
            </button>

            <motion.div
                initial={false}
                animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-sm sm:text-base text-forest/70 font-sans leading-relaxed">
                        {answer}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function FAQ() {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-champagne/5 to-cream" aria-label="常见问题">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-forest font-bold mb-4">
                        常见问题
                    </h2>
                    <p className="text-base sm:text-lg text-forest/70 font-sans max-w-2xl mx-auto">
                        解答您可能关心的问题
                    </p>
                </motion.div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={faq.question}
                            question={faq.question}
                            answer={faq.answer}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 sm:mt-16"
                >
                    <p className="text-sm sm:text-base text-forest/60 font-sans mb-4">
                        还有其他问题？
                    </p>
                    <a
                        href="https://wa.me/60123456789?text=你好，我有一些问题想咨询 🍀"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-md border border-white/40 text-forest rounded-full font-sans font-semibold hover:bg-champagne-gold/20 transition-colors shadow-md hover:shadow-lg"
                    >
                        直接联系我
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
