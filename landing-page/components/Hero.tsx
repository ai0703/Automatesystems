'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.3 });

            // Staggered fade-up for all hero text elements
            tl.from('.hero-anim', {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.08,
                ease: 'power3.out',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden pt-40 lg:pt-48"
        >
            {/* Background Image — Dark Marble */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80&auto=format&fit=crop"
                    alt="Abstract dark marble texture"
                    className="w-full h-full object-cover"
                />
                {/* Heavy gradient overlay — primary-to-black */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/85 to-obsidian/40" />
                {/* Champagne accent glow */}
                <div className="absolute bottom-0 left-0 w-[60%] h-[40%] bg-champagne/5 blur-[120px] rounded-full" />
            </div>

            {/* Content — Bottom-left third */}
            <div
                ref={contentRef}
                className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 sm:pb-28 lg:pb-32"
            >
                <div className="max-w-3xl space-y-6">
                    {/* Preset B Hero Pattern: "[Aspirational noun] meets [Precision word]." */}
                    <h1 className="hero-anim">
                        <span className="block text-4xl sm:text-5xl lg:text-7xl font-bold font-[family-name:var(--font-inter)] tracking-tight text-ivory leading-[1.05]">
                            Pipeline meets
                        </span>
                        <span className="block text-6xl sm:text-7xl lg:text-[8rem] font-[family-name:var(--font-playfair)] italic text-champagne leading-[0.95] mt-2">
                            Precision.
                        </span>
                    </h1>

                    <p className="hero-anim text-lg sm:text-xl text-ivory/60 leading-relaxed max-w-xl font-[family-name:var(--font-inter)]">
                        AI Swarm handles the busywork behind revenue. Lead handling,
                        enrichment, routing, CRM hygiene, and signal-based outreach.
                        Automatically.
                    </p>

                    <div className="hero-anim flex flex-wrap gap-4 pt-4">
                        <a
                            href="#cta"
                            className="btn-magnetic btn-champagne"
                        >
                            <span className="btn-bg bg-champagne" />
                            Get Your Revenue Leak Audit
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Trust signal */}
                    <div className="hero-anim flex items-center gap-3 pt-2">
                        <div className="flex -space-x-2">
                            {['WUA', 'VEED', 'AS'].map((name, i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full bg-obsidian-light border-2 border-obsidian flex items-center justify-center text-[10px] font-bold font-[family-name:var(--font-jetbrains)] text-champagne/80"
                                >
                                    {name[0]}
                                </div>
                            ))}
                        </div>
                        <span className="text-sm text-ivory/40 font-[family-name:var(--font-jetbrains)]">
                            Trusted by B2B SaaS revenue teams
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
