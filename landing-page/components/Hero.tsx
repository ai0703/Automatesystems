'use client';

import { ArrowRight, Users, Calendar, Hexagon } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);
    const rotatingTextRef = useRef<HTMLSpanElement>(null);

    const offers = [
        "3–5 interview-ready candidates",
        "qualified sales meetings"
    ];

    useGSAP(() => {
        // 1. Initial Entrance Animations
        const tl = gsap.timeline();

        // Staggered fade in for text content
        tl.from(textRef.current!.children, {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
        })
            // Slide in for visual card
            .from(visualRef.current, {
                x: 50,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
            }, "-=0.8");

        // 2. Text Rotation Animation
        const textTl = gsap.timeline({ repeat: -1 });

        offers.forEach((offer) => {
            // Fade In & Slide Up
            textTl.to(rotatingTextRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                onStart: () => {
                    if (rotatingTextRef.current) rotatingTextRef.current.innerText = offer;
                }
            })
                // Hold
                .to({}, { duration: 2 })
                // Fade Out & Slide Up
                .to(rotatingTextRef.current, {
                    opacity: 0,
                    y: -20,
                    duration: 0.5,
                    ease: "power2.in"
                })
                // Reset position immediately for next loop (hidden)
                .set(rotatingTextRef.current, { y: 20 });
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex flex-col pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

            {/* Branding Header */}
            <div className="w-full flex justify-between items-center mb-16 sm:mb-24">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="relative w-10 h-10 flex items-center justify-center bg-brand-blue rounded-xl shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
                        <Hexagon className="text-white w-6 h-6 fill-white/20" />
                    </div>
                    <span className="text-2xl font-bold text-brand-midnight tracking-tight group-hover:text-brand-blue transition-colors">
                        AutomateSystems
                    </span>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full flex-grow pb-20">
                {/* Left Column: Text Content */}
                <div ref={textRef} className="space-y-8 relative z-10">
                    <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold font-heading leading-[1.1] text-brand-midnight tracking-tight">
                        Stop Burning Out Your Team on Manual Sourcing. Start Filling Pipelines in 7 Days.
                    </h1>
                    <p className="text-lg sm:text-l md:text-xl text-brand-slate leading-relaxed max-w-lg min-h-[5em] sm:min-h-[4em]">
                        AutomateSystems builds the infrastructure that delivers{" "}
                        <span className="inline-block relative">
                            <span
                                ref={rotatingTextRef}
                                className="font-bold text-brand-blue inline-block opacity-0 transform translate-y-5"
                            >
                                {/* Initial text set by JS fallback */}
                                3–5 interview-ready candidates
                            </span>
                        </span>
                        {" "}directly to your calendar. Monthly. <span className='font-semibold text-brand-midnight'>Guaranteed.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-2">
                        <a
                            href="https://calendly.com/automatesystem1/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-orange hover:brightness-110 text-white font-bold py-4 px-8 rounded-md shadow-[0_4px_6px_-1px_rgba(249,115,22,0.3)] transition-all transform hover:-translate-y-0.5 uppercase tracking-wide flex items-center gap-2 group"
                        >
                            Book Your Growth Strategy
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <p className="text-sm text-brand-slate hidden sm:block">
                            Get a free custom pipeline analysis.<br />No commitment.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                                    <div className="w-full h-full bg-brand-light-blue/50 flex items-center justify-center text-[10px] text-brand-blue font-bold">U{i}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm font-medium text-brand-midnight">
                            Join 500+ Hiring Managers & Sales Leaders automating their growth.
                        </p>
                    </div>
                </div>

                {/* Right Column: Visual */}
                <div ref={visualRef} className="relative">
                    {/* Glass Card */}
                    <div className="glass-card rounded-2xl p-6 relative z-10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                        {/* Mock Calendar Header */}
                        <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-brand-light-blue flex items-center justify-center text-brand-blue">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <span className="font-heading font-bold text-brand-midnight">My Calendar</span>
                            </div>
                            <div className="text-sm text-brand-slate">October 2025</div>
                        </div>

                        {/* Mock Calendar Grid */}
                        <div className="grid grid-cols-7 gap-2 mb-4 text-center text-xs text-brand-slate opacity-60">
                            <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
                        </div>
                        <div className="grid grid-cols-7 gap-2">
                            {Array.from({ length: 14 }).map((_, i) => (
                                <div key={i} className="aspect-square rounded-md bg-brand-light-gray/50 border border-gray-50 p-1 relative group">
                                    <span className="text-[10px] text-gray-400 absolute top-1 left-1">{10 + i}</span>
                                    {/* Random "Bookings" */}
                                    {(i === 1 || i === 3 || i === 4 || i === 8 || i === 11) && (
                                        <div className="mt-4 w-full h-2 bg-brand-blue rounded-full opacity-80 shadow-sm animate-pulse"></div>
                                    )}
                                    {(i === 3 || i === 8) && (
                                        <div className="mt-1 w-2/3 h-2 bg-brand-green rounded-full opacity-80 shadow-sm"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Notification Badge Overlay */}
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 border border-brand-light-gray animate-bounce-slow">
                            <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
                                5
                            </div>
                            <div>
                                <div className="font-bold text-brand-midnight text-sm">New Qualified Leads</div>
                                <div className="text-xs text-brand-green font-medium">Delivered Today</div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements behind card */}
                    <div className="absolute top-10 -right-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-green/20 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </section>
    );
}
