export default function StructuredData() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Candy 严悦心",
        alternateName: ["Candy Yam", "严悦心"],
        jobTitle: "灵芝健康引导师",
        description: "Health Guide & Lingzhi Expert specializing in organic wellness and holistic healing. Recovered from facial paralysis through natural methods.",
        url: "https://candyyam.com",
        image: "https://candyyam.com/candy-portrait.png",
        sameAs: [
            // Add social media profiles when available
            // "https://www.facebook.com/candyyam",
            // "https://www.instagram.com/candyyam",
            // "https://wa.me/60123456789",
        ],
        knowsAbout: [
            "Lingzhi (Reishi Mushroom)",
            "Holistic Health",
            "Wellness Coaching",
            "Natural Healing",
            "Self-healing",
            "Facial Paralysis Recovery",
        ],
        alumniOf: {
            "@type": "Organization",
            name: "Health & Wellness Certification", // Replace with actual credentials
        },
        address: {
            "@type": "PostalAddress",
            addressCountry: "MY", // Malaysia
            addressLocality: "Kuala Lumpur", // Replace with actual location
        },
        offers: {
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                name: "Lingzhi Health Guidance",
                description: "Personalized health coaching focused on natural healing and wellness through Lingzhi (Reishi) and holistic practices.",
            },
        },
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Candy 严悦心 | 灵芝健康引导师",
        url: "https://candyyam.com",
        description: "和更多人一起，用健康创造自由与自信。专注于灵芝健康引导，从面瘫走回健康，用真诚陪伴您的疗愈之旅。",
        inLanguage: ["zh-CN", "en"],
        author: {
            "@type": "Person",
            name: "Candy 严悦心",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}
