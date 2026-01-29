"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Image from "next/image";

// Placeholder images - replace with actual Instagram photos
const instagramPosts = [
    { id: 1, image: "/ig-1.jpg", alt: "Lingzhi wellness" },
    { id: 2, image: "/ig-2.jpg", alt: "Health journey" },
    { id: 3, image: "/ig-3.jpg", alt: "Natural healing" },
    { id: 4, image: "/ig-4.jpg", alt: "Wellness lifestyle" },
    { id: 5, image: "/ig-5.jpg", alt: "Organic health" },
    { id: 6, image: "/ig-6.jpg", alt: "Healing journey" },
];

export default function InstagramFeed() {
    const instagramHandle = "candy_yam110";
    const instagramUrl = `https://www.instagram.com/${instagramHandle}/`;

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-cream to-champagne/10" aria-label="Instagram动态">
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
                        Latest on Instagram
                    </h2>
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-base sm:text-lg text-forest/70 font-sans hover:text-champagne-gold transition-colors"
                    >
                        <Instagram className="w-5 h-5" />
                        <span>@{instagramHandle}</span>
                    </a>
                </motion.div>

                {/* Instagram Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                    {instagramPosts.map((post, index) => (
                        <motion.a
                            key={post.id}
                            href={instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-forest/10 to-champagne/10 group cursor-pointer"
                        >
                            {/* Placeholder gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-forest/20 via-champagne-gold/20 to-champagne/30" />

                            {/* Uncomment when you have actual images */}
                            {/* <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              /> */}

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-forest/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-champagne-gold" />
                            </div>

                            {/* Placeholder Icon (remove when images are added) */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-forest/30" />
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Follow CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-10 sm:mt-12"
                >
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-champagne-gold to-champagne-dark text-forest rounded-full font-sans font-semibold hover:shadow-lg transition-shadow"
                    >
                        <Instagram className="w-5 h-5" />
                        <span>Follow on Instagram</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
