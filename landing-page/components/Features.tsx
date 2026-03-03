'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Search, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════
   CARD 1 — Diagnostic Shuffler (Lead Lifecycle)
   3 overlapping cards cycling with spring-bounce
   ═══════════════════════════════════════════════ */
function DiagnosticShuffler() {
    const [cards, setCards] = useState([
        { label: 'Capture', detail: 'Multi-source lead intake → unified pipeline', icon: '01' },
        { label: 'Enrich', detail: 'Contact + company data enrichment in real-time', icon: '02' },
        { label: 'Route', detail: 'Qualification, scoring & rep routing with SLA alerts', icon: '03' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards((prev) => {
                const next = [...prev];
                const last = next.pop()!;
                next.unshift(last);
                return next;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="card-surface p-8 h-full">
            <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-champagne" />
                <h3 className="text-lg font-bold font-[family-name:var(--font-inter)] text-obsidian tracking-tight">
                    Lead Lifecycle Automation
                </h3>
            </div>
            <p className="text-sm text-slate/60 mb-8 font-[family-name:var(--font-inter)]">
                Every lead captured, enriched, routed, and followed up automatically.
            </p>

            <div className="relative h-48">
                {cards.map((card, i) => (
                    <div
                        key={card.label}
                        className="absolute inset-x-0 transition-all duration-700"
                        style={{
                            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                            top: `${i * 16}px`,
                            zIndex: cards.length - i,
                            opacity: 1 - i * 0.15,
                            transform: `scale(${1 - i * 0.04})`,
                        }}
                    >
                        <div className="bg-obsidian-light border border-champagne/10 rounded-2xl p-5 flex items-center gap-4">
                            <span className="text-2xl font-bold font-[family-name:var(--font-jetbrains)] text-champagne/40">
                                {card.icon}
                            </span>
                            <div>
                                <div className="text-sm font-bold text-ivory">{card.label}</div>
                                <div className="text-xs text-ivory/40 mt-0.5">{card.detail}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════
   CARD 2 — Telemetry Typewriter (Signal Engine)
   Monospace live feed with blinking cursor
   ═══════════════════════════════════════════════ */
function TelemetryTypewriter() {
    const [lines, setLines] = useState<string[]>([]);
    const [currentLine, setCurrentLine] = useState('');
    const [lineIndex, setLineIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const messages = [
        '→ Signal detected: New Head of Marketing @ Acme SaaS',
        '→ Source: LinkedIn job change (2 days ago)',
        '→ Match score: 94% | ICP fit confirmed',
        '→ Enriching contact: email, phone, company data...',
        '→ Pushing to evergreen campaign: "New Hire Welcome"',
        '→ Outreach scheduled: T+3 days (optimal window)',
        '→ Signal detected: VP Sales @ CloudStack | role shift',
        '→ Running dedupe check against CRM...',
        '→ Status: clean | no existing record found',
        '→ Creating HubSpot contact + assigning to SDR-2',
    ];

    useEffect(() => {
        let charIndex = 0;
        let currentMessageIndex = lineIndex;

        const typeChar = () => {
            const msg = messages[currentMessageIndex % messages.length];
            if (charIndex <= msg.length) {
                setCurrentLine(msg.slice(0, charIndex));
                charIndex++;
                return setTimeout(typeChar, 30 + Math.random() * 40);
            } else {
                setLines((prev) => [...prev.slice(-6), msg]);
                setCurrentLine('');
                charIndex = 0;
                currentMessageIndex++;
                setLineIndex(currentMessageIndex);
                return setTimeout(typeChar, 800);
            }
        };

        const timer = typeChar();
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="card-surface p-8 h-full">
            <div className="flex items-center gap-2 mb-2">
                <Search className="w-5 h-5 text-champagne" />
                <h3 className="text-lg font-bold font-[family-name:var(--font-inter)] text-obsidian tracking-tight">
                    Signal Engine
                </h3>
            </div>
            <p className="text-sm text-slate/60 mb-4 font-[family-name:var(--font-inter)]">
                Detect job changes and new hires, push accounts into outreach at the right time.
            </p>

            {/* Live Feed Label */}
            <div className="flex items-center gap-2 mb-3">
                <span className="pulse-dot-container">
                    <span className="w-2 h-2 rounded-full bg-green-status inline-block" />
                </span>
                <span className="text-xs font-bold font-[family-name:var(--font-jetbrains)] text-green-status uppercase tracking-wider">
                    Live Feed
                </span>
            </div>

            <div
                ref={containerRef}
                className="bg-obsidian rounded-2xl p-4 h-44 overflow-hidden font-[family-name:var(--font-jetbrains)] text-xs"
            >
                {lines.map((line, i) => (
                    <div key={i} className="text-ivory/40 leading-relaxed truncate">
                        {line}
                    </div>
                ))}
                {currentLine && (
                    <div className="text-champagne leading-relaxed">
                        {currentLine}
                        <span className="cursor-blink text-champagne ml-0.5">▍</span>
                    </div>
                )}
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════
   CARD 3 — Cursor Protocol Scheduler (CRM Hygiene)
   Animated cursor clicking through weekly grid
   ═══════════════════════════════════════════════ */
function CursorScheduler() {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const [activeDays, setActiveDays] = useState<number[]>([]);
    const [cursorPos, setCursorPos] = useState({ x: -20, y: -20 });
    const [pressing, setPressing] = useState(false);
    const [showCursor, setShowCursor] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const sequence = [1, 3, 5]; // Mon, Wed, Fri
        let step = 0;

        const runSequence = () => {
            setActiveDays([]);
            setSaved(false);
            setShowCursor(true);
            step = 0;
            nextStep();
        };

        const nextStep = () => {
            if (step < sequence.length) {
                const dayIndex = sequence[step];
                // Move cursor to day cell
                const xPos = 16 + dayIndex * 42;
                const yPos = 52;
                setCursorPos({ x: xPos, y: yPos });

                setTimeout(() => {
                    // Click
                    setPressing(true);
                    setTimeout(() => {
                        setPressing(false);
                        setActiveDays((prev) => [...prev, dayIndex]);
                        step++;
                        setTimeout(nextStep, 600);
                    }, 200);
                }, 500);
            } else {
                // Move to Save button
                setCursorPos({ x: 120, y: 110 });
                setTimeout(() => {
                    setPressing(true);
                    setTimeout(() => {
                        setPressing(false);
                        setSaved(true);
                        setTimeout(() => {
                            setShowCursor(false);
                            setTimeout(runSequence, 2000);
                        }, 800);
                    }, 200);
                }, 500);
            }
        };

        const timer = setTimeout(runSequence, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="card-surface p-8 h-full">
            <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-champagne" />
                <h3 className="text-lg font-bold font-[family-name:var(--font-inter)] text-obsidian tracking-tight">
                    CRM Hygiene Infrastructure
                </h3>
            </div>
            <p className="text-sm text-slate/60 mb-6 font-[family-name:var(--font-inter)]">
                Deduplication, normalization, and lifecycle rules that keep the system trustworthy.
            </p>

            <div className="bg-obsidian rounded-2xl p-5 relative overflow-hidden">
                <div className="text-xs font-[family-name:var(--font-jetbrains)] text-ivory/30 mb-3 uppercase tracking-wider">
                    Hygiene Schedule
                </div>

                {/* Weekly grid */}
                <div className="grid grid-cols-7 gap-2 mb-5">
                    {days.map((day, i) => (
                        <div
                            key={i}
                            className={`aspect-square rounded-xl flex items-center justify-center text-xs font-bold font-[family-name:var(--font-jetbrains)] transition-all duration-300 ${activeDays.includes(i)
                                ? 'bg-champagne text-obsidian scale-95'
                                : 'bg-obsidian-lighter text-ivory/30'
                                }`}
                        >
                            {day}
                        </div>
                    ))}
                </div>

                {/* Save button */}
                <button
                    className={`w-full py-2.5 rounded-xl text-xs font-bold font-[family-name:var(--font-jetbrains)] uppercase tracking-wider transition-all duration-300 ${saved
                        ? 'bg-green-status/20 text-green-status'
                        : 'bg-obsidian-lighter text-ivory/40'
                        }`}
                >
                    {saved ? '✓ Saved' : 'Save Schedule'}
                </button>

                {/* Animated Cursor */}
                {showCursor && (
                    <svg
                        className="absolute pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                        style={{
                            left: cursorPos.x,
                            top: cursorPos.y,
                            transform: pressing ? 'scale(0.85)' : 'scale(1)',
                        }}
                        width="20"
                        height="24"
                        viewBox="0 0 20 24"
                        fill="none"
                    >
                        <path
                            d="M1 1L1 17L5.5 13L9.5 21L12.5 19.5L8.5 11.5L14 11L1 1Z"
                            fill="#C9A84C"
                            stroke="#0D0D12"
                            strokeWidth="1.5"
                        />
                    </svg>
                )}
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════
   FEATURES SECTION — Container
   ═══════════════════════════════════════════════ */
export default function Features() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="features"
            ref={sectionRef}
            className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto"
        >
            <div className="text-center mb-16">
                <span className="text-xs font-bold font-[family-name:var(--font-jetbrains)] text-champagne uppercase tracking-[0.2em] mb-4 block">
                    Capabilities
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold font-[family-name:var(--font-inter)] text-ivory tracking-tight">
                    The automation layer,{' '}
                    <span className="font-[family-name:var(--font-playfair)] italic text-champagne">
                        visualized.
                    </span>
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="feature-card">
                    <DiagnosticShuffler />
                </div>
                <div className="feature-card">
                    <TelemetryTypewriter />
                </div>
                <div className="feature-card">
                    <CursorScheduler />
                </div>
            </div>
        </section>
    );
}
