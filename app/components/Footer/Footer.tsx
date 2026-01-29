"use client";

import { motion } from "framer-motion";
import { Heart, Instagram, MessageCircle, Users } from "lucide-react";

export default function Footer() {
    const whatsappGroupLink = "https://chat.whatsapp.com/YOUR_GROUP_INVITE_CODE"; // Replace with actual group link

    return (
        <footer className="bg-gradient-to-b from-forest to-forest-dark text-cream py-12 sm:py-16 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-champagne-gold">
                            Candy 严悦心
                        </h3>
                        <p className="text-sm sm:text-base text-cream/80 font-sans leading-relaxed">
                            灵芝健康引导师 · 用健康创造自由与自信
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a
                                href="https://wa.me/60123456789"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-champagne-gold/20 flex items-center justify-center transition-colors"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/candy_yam110/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-champagne-gold/20 flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg sm:text-xl font-serif font-semibold text-champagne">
                            快速导航
                        </h4>
                        <ul className="space-y-2 text-sm sm:text-base font-sans">
                            <li>
                                <a href="#services" className="text-cream/80 hover:text-champagne-gold transition-colors">
                                    我的服务
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-cream/80 hover:text-champagne-gold transition-colors">
                                    我的故事
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="text-cream/80 hover:text-champagne-gold transition-colors">
                                    客户见证
                                </a>
                            </li>
                            <li>
                                <a href="#faq" className="text-cream/80 hover:text-champagne-gold transition-colors">
                                    常见问题
                                </a>
                            </li>
                            <li>
                                <a href="/links" className="text-cream/80 hover:text-champagne-gold transition-colors">
                                    Link in Bio
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* WhatsApp Community */}
                    <div className="space-y-4">
                        <h4 className="text-lg sm:text-xl font-serif font-semibold text-champagne">
                            加入健康社群
                        </h4>
                        <p className="text-sm sm:text-base text-cream/80 font-sans leading-relaxed">
                            加入我们的健康社群，每日获取灵芝养生资讯 🍀
                        </p>
                        <a
                            href={whatsappGroupLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 w-full px-6 py-4 rounded-2xl bg-champagne-gold/20 backdrop-blur-md border border-champagne-gold/30 text-champagne-gold font-sans font-semibold hover:bg-champagne-gold/30 transition-colors shadow-lg hover:shadow-xl group"
                        >
                            <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span>加入社群</span>
                        </a>
                        <p className="text-xs text-cream/60 font-sans">
                            免费加入，随时退出
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent mb-6 sm:mb-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-cream/60 font-sans">
                    <p>© 2026 Candy 严悦心. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        Made with <Heart className="w-4 h-4 text-champagne-gold fill-champagne-gold" /> in Malaysia
                    </p>
                </div>
            </div>
        </footer>
    );
}
