import { ReactNode } from "react";


export default function LandingHero(): ReactNode {
    return (
        <section className="mt-0 sm:mt-8 lg:mt-15">
            <div className="bg-[#C9D3E2] w-full px-8 py-5 lg:py-12 relative z-[1] overflow-hidden rounded-3xl max-[375px]:rounded-none max-[375px]:w-screen max-[375px]:left-1/2 max-[375px]:-translate-x-1/2">
                <div className="relative z-[4] space-y-3">
                    <div className="space-y-2">
                        <h2 className="text-xl md:text-2xl lg:text-3xl  font-normal tracking-[-0.02em] text-gray-600">
                            The wait is Over.
                        </h2>
                        <h2 className="text-[32px] lg:text-[64px] md:text-[52px] leading-tight font-bold tracking-[-0.02em] text-gray-900">
                            Galio is Here
                        </h2>
                        <p className="max-w-[446px] text-gray-900 text-md leading-relaxed">Instantly transform your React Native apps with galio components</p>
                    </div>
                    <div className="flex items-center gap-8 mt-4 z-[4] relative">
                        <a 
                            href="https://galio.io"
                            className="appearance-none bg-indigo-700 text-white hover:bg-indigo-800 transition-colors duration-200 no-underline px-8 py-4 rounded-[48px] z-[4] font-medium"
                        >Start here</a>
                        <a href="#" className="text-indigo-800 underline hover:text-indigo-900 transition-colors duration-200 z-[4] font-medium">Learn More</a>
                    </div>
                </div>
                <div className="absolute inset-0 bg-noise z-[2]"></div>
                <video className="z-[1] absolute inset-0 w-full h-full object-cover rounded-3xl" autoPlay muted loop playsInline preload="auto">
                        <source src="/img/landingvid.mp4"/>
                </video>
            </div>
        </section>
    );
}