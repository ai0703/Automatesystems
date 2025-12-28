'use client';

import { Rocket, Check, Infinity, TrendingDown, Clock, UserCog, Database } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Solution() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
            }
        });

        tl.from('.solution-header', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
            .from('.solution-col-left', {
                x: -50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.4')
            .from('.solution-col-right', {
                x: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.8')
            .from('.solution-dashboard', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.4');

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white/50 backdrop-blur-sm rounded-3xl my-12">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 solution-header">
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-midnight">
                    One Engine. Two Solutions.
                </h2>
                <p className="text-lg text-brand-slate leading-relaxed">
                    We act as the invisible infrastructure behind your high-performing teams. Select your engine:
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20 relative">
                {/* Divider for desktop */}
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-brand-border to-transparent -translate-x-1/2"></div>

                {/* Left Column: Recruitment */}
                <div className="solution-col-left space-y-8">
                    <h3 className="text-2xl font-bold text-brand-midnight flex items-center gap-3">
                        <span className="w-8 h-8 rounded bg-brand-light-blue flex items-center justify-center text-brand-blue font-bold text-sm">A</span>
                        For Recruitment Leaders
                    </h3>
                    <div className="space-y-6">
                        {[
                            { icon: Rocket, title: "7-Day Speed Protocol", desc: "We lock in a 7-day SLA per role. You get candidates while the role is fresh, not weeks later." },
                            { icon: Check, title: 'Interview-Ready, Not Just "Leads"', desc: "We don't just scrape lists. We deliver candidates who fit the spec and are ready to talk." },
                            { icon: Infinity, title: "Zero Recruiter Burnout", desc: "Your team logs in to find interviews booked, not a blank search bar." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-light-blue flex items-center justify-center text-brand-blue">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-midnight mb-1">{item.title}</h4>
                                    <p className="text-brand-slate text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Sales */}
                <div className="solution-col-right space-y-8">
                    <h3 className="text-2xl font-bold text-brand-midnight flex items-center gap-3">
                        <span className="w-8 h-8 rounded bg-brand-light-blue flex items-center justify-center text-brand-blue font-bold text-sm">B</span>
                        For Sales Leaders
                    </h3>
                    <div className="space-y-6">
                        {[
                            { icon: TrendingDown, title: "Slash CAC by ≥80%", desc: "Stop paying headcount for data entry. Automate the expensive top-of-funnel work entirely." },
                            { icon: Clock, title: '24/7 Prospecting', desc: "Our AI engine works while you sleep, covering all time zones so no lead is left behind." },
                            { icon: UserCog, title: "Hyper-Personalization", desc: "We use multi-source data to write messages that actually get read, protecting your brand reputation." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-light-blue flex items-center justify-center text-brand-blue">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-midnight mb-1">{item.title}</h4>
                                    <p className="text-brand-slate text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Visual Dashboard Proof Point */}
            <div className="solution-dashboard max-w-4xl mx-auto">
                <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-8 border border-white/50 shadow-2xl overflow-hidden relative">

                    {/* Background Data Elements */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="absolute top-4 left-4 text-xs font-mono">ID: 9942a...</div>
                        <div className="absolute bottom-4 right-4 text-xs font-mono">STATUS: ACTIVE</div>
                    </div>

                    <div className="flex items-center gap-6 z-10 w-full sm:w-auto">
                        <div className="text-center sm:text-left">
                            <p className="text-sm font-medium text-brand-slate mb-1">Candidates Delivered this Week</p>
                            <p className="text-5xl font-bold text-brand-blue tracking-tight">15</p>
                        </div>
                        <div className="h-12 w-px bg-brand-border hidden sm:block"></div>
                        <div className="text-center sm:text-left">
                            <p className="text-sm font-medium text-brand-slate mb-1">Estimated Hours Saved</p>
                            <p className="text-5xl font-bold text-brand-green tracking-tight">40 <span className="text-2xl text-brand-slate font-medium">Hours</span></p>
                        </div>
                    </div>

                    <div className="z-10 bg-brand-light-gray rounded-lg p-3 flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-brand-blue shadow-sm">
                            <Database className="w-5 h-5" />
                        </div>
                        <div className="text-sm">
                            <div className="font-bold text-brand-midnight">system_status:</div>
                            <div className="text-brand-green flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                                Operational
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
