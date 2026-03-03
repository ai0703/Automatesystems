'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.cta-anim', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="cta"
            ref={sectionRef}
            className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16"
        >
            <div className="max-w-4xl mx-auto text-center">
                <div className="bg-obsidian-light border border-champagne/10 rounded-[3rem] p-12 sm:p-20 relative overflow-hidden">
                    {/* Ambient glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-60 bg-champagne/8 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10 space-y-8">
                        <span className="cta-anim text-xs font-bold font-[family-name:var(--font-jetbrains)] text-champagne uppercase tracking-[0.2em] block">
                            Start Here
                        </span>

                        <h2 className="cta-anim text-3xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-inter)] text-ivory tracking-tight leading-tight">
                            Stop losing revenue to{' '}
                            <span className="font-[family-name:var(--font-playfair)] italic text-champagne">
                                invisible leaks.
                            </span>
                        </h2>

                        <p className="cta-anim text-lg text-ivory/40 max-w-xl mx-auto leading-relaxed font-[family-name:var(--font-inter)]">
                            Get a free Revenue Leak Audit. We&apos;ll map your lead flow, surface
                            3–5 leakage points, and give you a 1-page automation blueprint.
                        </p>

                        <div className="cta-anim flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <a
                                href="https://calendly.com/automatesystem1/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-magnetic btn-champagne text-base"
                            >
                                <span className="btn-bg bg-champagne" />
                                Get Your Revenue Leak Audit
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Proof anchors */}
                        <div className="cta-anim pt-8 border-t border-ivory/5 flex flex-col sm:flex-row gap-6 text-sm text-ivory/30">
                            <div className="flex-1">
                                <p className="font-[family-name:var(--font-jetbrains)] text-xs text-champagne/50 mb-1">
                                    Linda @ WUA
                                </p>
                                <p className="font-[family-name:var(--font-inter)] italic">
                                    &ldquo;Replaced dozens of campaign workflows with one central
                                    system that processes every lead automatically.&rdquo;
                                </p>
                            </div>
                            <div className="flex-1">
                                <p className="font-[family-name:var(--font-jetbrains)] text-xs text-champagne/50 mb-1">
                                    Vid @ VEED
                                </p>
                                <p className="font-[family-name:var(--font-inter)] italic">
                                    &ldquo;Signal engine detects new hires and pushes accounts into
                                    evergreen outreach automatically.&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
