'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Word-by-word reveal for the manifesto text
            const words = sectionRef.current?.querySelectorAll('.reveal-word');
            if (words) {
                gsap.from(words, {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 65%',
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: 'power3.out',
                });
            }

            // Parallax texture
            const texture = sectionRef.current?.querySelector('.parallax-texture');
            if (texture) {
                gsap.to(texture, {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                    y: -100,
                    ease: 'none',
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Helper to wrap text in spans for word-by-word animation
    const renderWords = (text: string, className = '') =>
        text.split(' ').map((word, i) => (
            <span key={i} className={`reveal-word inline-block mr-[0.3em] ${className}`}>
                {word}
            </span>
        ));

    return (
        <section
            id="philosophy"
            ref={sectionRef}
            className="relative py-32 sm:py-44 px-6 sm:px-10 lg:px-16 bg-slate overflow-hidden"
        >
            {/* Parallaxing texture image */}
            <div className="parallax-texture absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=60&auto=format&fit=crop"
                    alt="Abstract golden texture"
                    className="w-full h-[130%] object-cover opacity-[0.06]"
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Neutral statement */}
                <p className="text-xl sm:text-2xl text-ivory/40 leading-relaxed mb-8 font-[family-name:var(--font-inter)]">
                    {renderWords('Most revenue teams focus on:')}
                    <br />
                    {renderWords('more tools, more headcount, more manual processes.', 'text-ivory/50')}
                </p>

                {/* Differentiated statement — massive drama serif */}
                <h2 className="text-3xl sm:text-5xl lg:text-7xl leading-[1.15] font-[family-name:var(--font-inter)] font-bold text-ivory">
                    {renderWords('We focus on:')}
                    <br />
                    <span className="font-[family-name:var(--font-playfair)] italic">
                        {renderWords('the')}
                        <span className="reveal-word inline-block mr-[0.3em] text-champagne">invisible</span>
                        {renderWords('infrastructure.')}
                    </span>
                </h2>

                {/* Supporting line */}
                <p className="reveal-word mt-10 text-lg text-ivory/30 max-w-2xl font-[family-name:var(--font-inter)]">
                    We install the automation layer that makes your revenue systems run
                    without humans babysitting tools.
                </p>
            </div>
        </section>
    );
}
