'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        step: '01',
        title: 'Audit',
        description:
            'Map your lead flow end-to-end. Identify 3–5 leakage points and quick wins. Get a 1-page automation blueprint + ROI estimate.',
        animation: 'geometric', // rotating geometric motif
    },
    {
        step: '02',
        title: 'Build',
        description:
            'Install the core automation layer. Lead handling, CRM hygiene, enrichment pipelines, and routing rules. All wired, tested, documented.',
        animation: 'scanner', // scanning laser-line grid
    },
    {
        step: '03',
        title: 'Launch',
        description:
            'Activate follow-up triggers, signal detection, and monitoring dashboards. Handoff with full documentation. Your system runs 24/7.',
        animation: 'waveform', // pulsing EKG waveform
    },
];

/* ─── SVG Animation Components ─── */

function GeometricMotif() {
    const ref = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const outer = ref.current?.querySelector('.ring-outer');
            const inner = ref.current?.querySelector('.ring-inner');
            if (outer) {
                gsap.to(outer, {
                    rotation: 360,
                    duration: 20,
                    repeat: -1,
                    ease: 'none',
                    transformOrigin: 'center center',
                });
            }
            if (inner) {
                gsap.to(inner, {
                    rotation: -360,
                    duration: 15,
                    repeat: -1,
                    ease: 'none',
                    transformOrigin: 'center center',
                });
            }
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <svg ref={ref} viewBox="0 0 200 200" className="w-32 h-32 opacity-30">
            <g className="ring-outer">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="8 4" />
                <circle cx="100" cy="20" r="4" fill="#C9A84C" />
                <circle cx="100" cy="180" r="4" fill="#C9A84C" />
            </g>
            <g className="ring-inner">
                <circle cx="100" cy="100" r="50" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="4 8" />
                <rect x="96" y="50" width="8" height="8" rx="1" fill="#C9A84C" opacity="0.6" />
                <rect x="96" y="142" width="8" height="8" rx="1" fill="#C9A84C" opacity="0.6" />
            </g>
            <circle cx="100" cy="100" r="3" fill="#C9A84C" />
        </svg>
    );
}

function ScannerGrid() {
    const lineRef = useRef<SVGLineElement>(null);

    useEffect(() => {
        if (!lineRef.current) return;
        const ctx = gsap.context(() => {
            gsap.to(lineRef.current, {
                attr: { y1: 200, y2: 200 },
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <svg viewBox="0 0 200 200" className="w-32 h-32 opacity-30">
            {/* Dot grid */}
            {Array.from({ length: 8 }).map((_, row) =>
                Array.from({ length: 8 }).map((_, col) => (
                    <circle
                        key={`${row}-${col}`}
                        cx={25 + col * 22}
                        cy={25 + row * 22}
                        r="1.5"
                        fill="#C9A84C"
                        opacity="0.3"
                    />
                ))
            )}
            {/* Scanning line */}
            <line
                ref={lineRef}
                x1="10"
                y1="0"
                x2="190"
                y2="0"
                stroke="#C9A84C"
                strokeWidth="1"
                opacity="0.8"
            />
        </svg>
    );
}

function Waveform() {
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        if (!pathRef.current) return;
        const length = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });

        const ctx = gsap.context(() => {
            gsap.to(pathRef.current, {
                strokeDashoffset: 0,
                duration: 2,
                repeat: -1,
                ease: 'power1.inOut',
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <svg viewBox="0 0 200 80" className="w-40 h-16 opacity-30">
            <path
                ref={pathRef}
                d="M0,40 Q10,40 15,40 T25,40 30,20 35,60 40,40 50,40 Q60,40 65,40 T75,40 80,10 85,70 90,40 100,40 Q110,40 115,40 T125,40 130,25 135,55 140,40 150,40 Q160,40 165,40 T175,40 180,15 185,65 190,40 200,40"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

const animations: Record<string, React.FC> = {
    geometric: GeometricMotif,
    scanner: ScannerGrid,
    waveform: Waveform,
};

export default function Protocol() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, i) => {
                if (!card) return;

                ScrollTrigger.create({
                    trigger: card,
                    start: 'top 20%',
                    end: 'bottom 20%',
                    pin: true,
                    pinSpacing: true,
                    onEnter: () => {
                        // Scale down previous cards
                        cardsRef.current.forEach((prevCard, j) => {
                            if (j < i && prevCard) {
                                gsap.to(prevCard, {
                                    scale: 0.9,
                                    filter: 'blur(20px)',
                                    opacity: 0.5,
                                    duration: 0.6,
                                    ease: 'power2.inOut',
                                });
                            }
                        });
                    },
                    onLeaveBack: () => {
                        // Restore previous card
                        if (i > 0 && cardsRef.current[i - 1]) {
                            gsap.to(cardsRef.current[i - 1], {
                                scale: 1,
                                filter: 'blur(0px)',
                                opacity: 1,
                                duration: 0.6,
                                ease: 'power2.inOut',
                            });
                        }
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" ref={sectionRef} className="relative py-20">
            <div className="text-center mb-16 px-6">
                <span className="text-xs font-bold font-[family-name:var(--font-jetbrains)] text-champagne uppercase tracking-[0.2em] mb-4 block">
                    How It Works
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold font-[family-name:var(--font-inter)] text-ivory tracking-tight">
                    Three phases.{' '}
                    <span className="font-[family-name:var(--font-playfair)] italic text-champagne">
                        Zero disruption.
                    </span>
                </h2>
            </div>

            <div className="space-y-8">
                {steps.map((step, i) => {
                    const AnimationComponent = animations[step.animation];
                    return (
                        <div
                            key={step.step}
                            ref={(el) => {
                                if (el) cardsRef.current[i] = el;
                            }}
                            className="min-h-[80vh] flex items-center justify-center px-6"
                        >
                            <div className="w-full max-w-4xl bg-obsidian-light border border-champagne/8 rounded-[3rem] p-12 sm:p-16 flex flex-col sm:flex-row items-center gap-10 sm:gap-16 relative overflow-hidden">
                                {/* Ambient glow */}
                                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-champagne/3 blur-[100px] rounded-full pointer-events-none" />

                                <div className="flex-shrink-0 relative z-10">
                                    <AnimationComponent />
                                </div>

                                <div className="relative z-10">
                                    <span className="text-sm font-[family-name:var(--font-jetbrains)] text-champagne/60 mb-3 block">
                                        {step.step}
                                    </span>
                                    <h3 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-inter)] text-ivory tracking-tight mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg text-ivory/50 leading-relaxed font-[family-name:var(--font-inter)]">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
