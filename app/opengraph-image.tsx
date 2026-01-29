import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export const alt = 'Candy 严悦心 | 灵芝健康引导师';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#1A3C34',
                    backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(45, 106, 79, 0.15) 0%, transparent 50%)',
                }}
            >
                {/* Main Title */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '24px',
                    }}
                >
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 700,
                            color: '#D4AF37',
                            letterSpacing: '-0.02em',
                            textAlign: 'center',
                            fontFamily: 'serif',
                        }}
                    >
                        Candy 严悦心
                    </div>

                    <div
                        style={{
                            fontSize: 36,
                            color: '#F4E4C1',
                            textAlign: 'center',
                            fontFamily: 'sans-serif',
                            fontWeight: 400,
                            letterSpacing: '0.05em',
                        }}
                    >
                        灵芝健康引导师
                    </div>

                    <div
                        style={{
                            fontSize: 28,
                            color: '#FAF9F6',
                            opacity: 0.8,
                            textAlign: 'center',
                            fontFamily: 'sans-serif',
                            fontWeight: 300,
                            marginTop: '16px',
                        }}
                    >
                        Organic Luxury Health Guidance
                    </div>
                </div>

                {/* Decorative Element */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 40,
                        fontSize: 48,
                    }}
                >
                    🍀
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
