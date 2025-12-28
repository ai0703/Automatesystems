'use client';

import { Check, X } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Differentiation() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.diff-card-them', {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
            },
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });

        gsap.from('.diff-card-us', {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
            },
            x: 50,
            opacity: 0,
            duration: 0.8,
            delay: 0.2, // Slight delay for "Us" card emphasis
            ease: 'power3.out'
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-brand-light-gray rounded-3xl my-12">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-midnight">
                    We Deliver Outcomes, Not Just Software.
                </h2>
                <p className="text-lg text-brand-slate leading-relaxed">
                    Most providers sell you a login and wish you luck. We provide a managed outcome.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Them Card */}
                <div className="diff-card-them bg-white p-8 rounded-2xl border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-400 mb-6">Them - Traditional Tools</h3>
                    <div className="space-y-6">
                        {[
                            { label: "Effort", value: "High (You manage the tool)" },
                            { label: "Speed", value: "4–6 Weeks ramp up" },
                            { label: "Guarantee", value: "Best Effort" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start opacity-60">
                                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                    <X className="w-4 h-4 text-gray-500" />
                                </div>
                                <div>
                                    <div className="font-bold text-brand-midnight">{item.label}</div>
                                    <div className="text-brand-slate">{item.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Us Card */}
                <div className="diff-card-us bg-white p-8 rounded-2xl border-t-4 border-brand-blue shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 bg-brand-light-blue rounded-bl-xl text-xs font-bold text-brand-blue uppercase tracking-wider">Recommended</div>
                    <h3 className="text-xl font-bold text-brand-midnight mb-6">Us - AutomateSystems</h3>
                    <div className="space-y-6">
                        {[
                            { label: "Effort", value: "Zero (Done-for-you delivery)" },
                            { label: "Speed", value: "7-Day Role SLA" },
                            { label: "Guarantee", value: "Qualified Lead/Candidate Guarantee" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-4 h-4 text-brand-green" />
                                </div>
                                <div>
                                    <div className="font-bold text-brand-midnight">{item.label}</div>
                                    <div className="text-brand-slate font-medium">{item.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
