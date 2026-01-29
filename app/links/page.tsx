import { MessageCircle, ShoppingBag, BookOpen, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Links",
    description: "Candy 严悦心 - 所有重要链接",
};

const links = [
    {
        title: "最新灵芝团购",
        subtitle: "Group Buy",
        icon: ShoppingBag,
        href: "https://wa.me/60123456789?text=我想了解最新的灵芝团购",
        gradient: "from-champagne-gold to-champagne-dark",
    },
    {
        title: "预约 1对1 咨询",
        subtitle: "Personal Consultation",
        icon: MessageCircle,
        href: "https://wa.me/60123456789?text=我想预约1对1健康咨询",
        gradient: "from-forest-light to-forest",
    },
    {
        title: "我的康复故事",
        subtitle: "My Recovery Story",
        icon: BookOpen,
        href: "/#about",
        gradient: "from-champagne to-champagne-gold",
    },
    {
        title: "加入健康社群",
        subtitle: "Join Community",
        icon: Users,
        href: "https://chat.whatsapp.com/YOUR_GROUP_INVITE_CODE",
        gradient: "from-forest to-forest-dark",
    },
];

export default function LinksPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-forest via-forest-dark to-forest flex flex-col items-center justify-center p-4 sm:p-6">
            {/* Profile Section */}
            <div className="text-center mb-8 sm:mb-12">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-champagne-gold to-champagne mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-2xl">
                    <span className="text-4xl sm:text-5xl font-serif font-bold text-forest">
                        C
                    </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-champagne-gold mb-2">
                    Candy 严悦心
                </h1>
                <p className="text-base sm:text-lg text-cream/80 font-sans">
                    灵芝健康引导师 🍀
                </p>
            </div>

            {/* Links Container */}
            <div className="w-full max-w-md space-y-4">
                {links.map((link, index) => {
                    const Icon = link.icon;
                    return (
                        <a
                            key={link.title}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="block group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={`relative w-full py-5 px-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${link.gradient} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-md border border-white/10`}>
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                        <Icon className="w-6 h-6 text-cream" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <h2 className="text-lg sm:text-xl font-serif font-bold text-cream mb-0.5">
                                            {link.title}
                                        </h2>
                                        <p className="text-xs sm:text-sm text-cream/70 font-sans">
                                            {link.subtitle}
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <svg
                                            className="w-5 h-5 text-cream/50 group-hover:text-cream group-hover:translate-x-1 transition-all"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>

            {/* Footer */}
            <div className="mt-12 sm:mt-16 text-center">
                <p className="text-xs sm:text-sm text-cream/50 font-sans">
                    © 2026 Candy 严悦心
                </p>
                <a
                    href="/"
                    className="inline-block mt-4 text-sm text-champagne-gold hover:text-champagne transition-colors font-sans"
                >
                    访问完整网站 →
                </a>
            </div>
        </main>
    );
}
