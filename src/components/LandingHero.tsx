import { ReactNode, useEffect, useState } from "react";
import { useTranslations } from "../hooks/useTranslations";

export default function LandingHero(): ReactNode {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { t } = useTranslations();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="mt-10 sm:mt-16 mx-10 sm:md:mx-15 lg:mx-35 lg:mt-20">
            <div className="relative w-full px-8 py-5 lg:py-12 z-[1] overflow-hidden rounded-3xl max-[375px]:rounded-none max-[375px]:w-screen max-[375px]:left-1/2 max-[375px]:-translate-x-1/2">
                <div className="absolute inset-0 z-[1]">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 rounded-3xl"></div>
                    <div 
                        className="absolute inset-0 opacity-70 rounded-3xl"
                        style={{
                            background: `
                                radial-gradient(circle at 20% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
                                radial-gradient(circle at 40% 80%, rgba(244, 114, 182, 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 90% 90%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)
                            `,
                            animation: 'float 8s ease-in-out infinite'
                        }}
                    ></div>
                    <div 
                        className="absolute w-32 h-32 rounded-full opacity-20 pointer-events-none transition-all duration-300 ease-out"
                        style={{
                            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
                            left: mousePosition.x - 64,
                            top: mousePosition.y - 64,
                            transform: 'translate(-50%, -50%)'
                        }}
                    ></div>
                    <div className="absolute inset-0 pointer-events-none">
                        <div 
                            className="absolute w-20 h-20 rounded-full opacity-20"
                            style={{
                                background: 'linear-gradient(45deg, #ec4899, #f472b6)',
                                top: '20%',
                                right: '15%',
                                animation: 'bounce 6s ease-in-out infinite'
                            }}
                        ></div>
                        <div 
                            className="absolute w-12 h-12 opacity-15 rotate-45"
                            style={{
                                background: 'linear-gradient(45deg, #a855f7, #ec4899)',
                                top: '60%',
                                right: '25%',
                                animation: 'bounce 4s ease-in-out infinite reverse'
                            }}
                        ></div>
                        <div 
                            className="absolute w-8 h-8 opacity-25"
                            style={{
                                background: 'linear-gradient(45deg, #f472b6, #a855f7)',
                                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                                top: '40%',
                                left: '10%',
                                animation: 'float 5s ease-in-out infinite'
                            }}
                        ></div>
                        <div className="absolute top-8 right-8 opacity-10 text-pink-500 font-mono text-xs transform rotate-12">
                            {'<Galio />'}
                        </div>
                        <div className="absolute bottom-16 left-12 opacity-10 text-purple-600 font-mono text-xs transform -rotate-6">
                            {'{ components }'}
                        </div>
                    </div>
                </div>
                <div className="relative z-[4] space-y-3">
                    <div className="space-y-2">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-normal tracking-[-0.02em] text-gray-600">
                            {t('hero.waitOver')}
                        </h2>
                        <h2 
                            className="text-[32px] lg:text-[64px] md:text-[52px] leading-tight font-bold tracking-[-0.02em]"
                            style={{
                                background: 'linear-gradient(45deg, #1f2937, #6366f1, #ec4899)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            {t('hero.galioHere')}
                        </h2>
                        <p className="max-w-[446px] text-gray-700 text-md leading-relaxed font-medium">
                            {t('hero.description')}
                        </p>
                    </div>
                    <div className="flex items-center gap-8 mt-4 z-[4] relative">
                        <a 
                            href="/docs/intro"
                            className="appearance-none text-white hover:scale-105 transition-all duration-300 no-underline px-8 py-4 rounded-[48px] z-[4] font-medium shadow-lg hover:shadow-xl"
                            style={{
                                background: 'linear-gradient(45deg, #6366f1, #ec4899, #f472b6)',
                                boxShadow: '0 4px 20px rgba(236, 72, 153, 0.3)'
                            }}
                        >
                            {t('hero.startBuilding')}
                        </a>
                        <a 
                            href="/docs/intro" 
                            className="text-pink-600 hover:text-pink-700 underline hover:no-underline transition-all duration-200 z-[4] font-medium px-4 py-2 rounded-lg hover:bg-pink-50"
                        >
                            {t('hero.learnMore')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}