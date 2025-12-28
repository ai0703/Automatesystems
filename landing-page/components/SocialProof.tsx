'use client';

import { Quote, Hexagon, Cpu, Activity, Zap, Globe, Layers, Command } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function SocialProof() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const clients = [
        { name: "NexusAI", icon: Cpu },
        { name: "FlowState", icon: Activity },
        { name: "Optima", icon: Zap },
        { name: "GlobalSync", icon: Globe },
        { name: "Vortex", icon: Layers },
        { name: "Command+R", icon: Command },
    ];

    const testimonials = [
        {
            text: "We were drowning in open roles. AutomateSystems plugged in their accelerator, and within week one, we had 4 perfect candidates for our hardest technical role. It’s not just a tool; it’s a competitive advantage.",
            author: "Sarah J.",
            role: "Head of Talent",
            company: "Alcor"
        }
    ];

    useGSAP(() => {
        gsap.from(sectionRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            },
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        // Stagger in logos
        gsap.from('.client-logo', {
            scrollTrigger: {
                trigger: '.logo-grid',
                start: 'top 85%',
            },
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.7)'
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">

            {/* Testimonials */}
            <div className="mb-24 relative">
                <div className="inline-flex justify-center mb-6 text-brand-blue opacity-20">
                    <Quote size={64} fill="currentColor" />
                </div>

                {testimonials.map((t, i) => (
                    <div key={i} className="max-w-4xl mx-auto relative z-10">
                        <blockquote className="text-2xl sm:text-3xl font-medium text-brand-midnight leading-relaxed mb-8">
                            "{t.text}"
                        </blockquote>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-1 h-px bg-brand-blue/30 mb-2"></div>
                            <div className="text-brand-midnight font-bold text-lg">{t.author}</div>
                            <div className="text-brand-slate text-sm font-medium">{t.role}, {t.company}</div>
                        </div>
                    </div>
                ))}

                {/* Decorative subtle pulse behind testimonial */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-24 border-y border-gray-100 py-12 bg-brand-light-gray/20 rounded-3xl">
                {[
                    { value: "80%", label: "Reduction in Appointment Costs" },
                    { value: "7 Days", label: "Average Time-to-Candidate Delivery" },
                    { value: "24/7", label: "Active Execution Time" },
                ].map((stat, i) => (
                    <div key={i} className="p-4">
                        <div className="text-4xl sm:text-5xl font-bold text-brand-blue mb-2 tracking-tight">{stat.value}</div>
                        <div className="text-brand-midnight font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Client Text / Intro */}
            <p className="text-brand-slate font-medium mb-12 uppercase tracking-widest text-sm">Trusted by Forward-Thinking Teams</p>

            {/* Logo Cloud */}
            <div className="logo-grid flex flex-wrap justify-center items-center gap-x-12 gap-y-12 opacity-80">
                {clients.map((client, i) => (
                    <div key={i} className="client-logo flex items-center gap-3 group grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
                        <div className="p-2 rounded-lg bg-gray-50 border border-gray-100 group-hover:border-brand-blue/20 group-hover:bg-brand-light-blue/20 transition-colors">
                            <client.icon className="w-6 h-6 text-brand-slate group-hover:text-brand-blue transition-colors" />
                        </div>
                        <span className="text-lg font-bold font-heading text-brand-slate group-hover:text-brand-midnight transition-colors">{client.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
