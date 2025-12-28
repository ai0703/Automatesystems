'use client';

import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function CTA() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(sectionRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            },
            scale: 0.95,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    }, { scope: sectionRef });

    return (
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
            <div ref={sectionRef} className="bg-brand-midnight rounded-3xl p-12 sm:p-20 text-center relative overflow-hidden">
                {/* Abstract Glow Background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-brand-blue/20 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
                        Stop Losing Revenue to Inefficiency.
                    </h2>
                    <p className="text-xl text-brand-light-gray/80 leading-relaxed">
                        You are one click away from a fully automated, 24/7 pipeline. Limited slots available for this month’s pilot program.
                    </p>

                    <div className="flex flex-col items-center gap-6 pt-4">
                        <a
                            href="https://calendly.com/automatesystem1/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-orange hover:brightness-110 text-white font-bold py-4 px-8 rounded-md shadow-[0_4px_6px_-1px_rgba(249,115,22,0.5)] transition-all transform hover:-translate-y-1 uppercase tracking-wide flex items-center gap-2 text-lg"
                        >
                            Book Your Consult & Get a Free Analysis
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <button className="text-white hover:text-brand-blue transition-colors underline underline-offset-4 decoration-brand-blue/50 hover:decoration-brand-blue">
                            Or Watch a 2-Minute Overview Video
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
