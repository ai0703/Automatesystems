'use client';

import { Search, Send, Link as LinkIcon } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Problem() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.problem-card', {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
        });
    }, { scope: sectionRef });

    const problems = [
        {
            icon: Search,
            title: "The Sourcing Black Hole",
            description: "Roles stack up faster than you can fill them. Recruiters burn out hunting for \"purple squirrels,\" leading to missed SLAs.",
            iconColor: "text-red-500",
            iconBg: "bg-red-50"
        },
        {
            icon: Send,
            title: "The \"Spray and Pray\" Trap",
            description: "SDRs send generic emails that get ignored. Cost per appointment skyrockets while lead quality plummets.",
            iconColor: "text-orange-500",
            iconBg: "bg-orange-50"
        },
        {
            icon: LinkIcon,
            title: "The Follow-Up Failure",
            description: "Warm leads go cold because your team lacks the bandwidth to chase them.",
            iconColor: "text-amber-500",
            iconBg: "bg-amber-50"
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-midnight">
                    Your Team Was Hired to Close, Not to Grind.
                </h2>
                <p className="text-lg text-brand-slate leading-relaxed">
                    You are paying high salaries for talent, but they are stuck doing robot work. Every hour your recruiters spend scrolling LinkedIn, or your sales reps spend writing cold emails, is an hour lost on closing deals.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {problems.map((item, index) => (
                    <div key={index} className="problem-card bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className={`w-12 h-12 rounded-lg ${item.iconBg} flex items-center justify-center mb-6`}>
                            <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-midnight mb-3">{item.title}</h3>
                        <p className="text-brand-slate leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <h3 className="text-2xl font-medium text-brand-midnight">
                    The Hard Truth: <span className="text-brand-slate text-xl block sm:inline mt-2 sm:mt-0 font-normal">In today’s market, manual prospecting is too slow and too expensive. You don't need more staff; you need better infrastructure.</span>
                </h3>
            </div>
        </section>
    );
}
