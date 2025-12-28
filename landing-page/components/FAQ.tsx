'use client';

import { Plus, Minus } from 'lucide-react';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.faq-item', {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            },
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out'
        });
    }, { scope: sectionRef });

    const faqs = [
        {
            question: "Will the AI messages sound robotic and hurt my brand?",
            answer: "Absolutely not. We utilize advanced personalization logic referencing specific details about the prospect. Plus, we include human-in-the-loop QA to ensure every message aligns with your brand voice."
        },
        {
            question: "How quickly can we launch?",
            answer: "Our onboarding is streamlined. We build your custom outbound strategy and launch your first campaign within 72 hours of our kickoff call."
        },
        {
            question: "What defines a \"Qualified\" lead?",
            answer: "We define this with you. For recruiting, they must meet the skills matrix and be open to interviewing. For sales, they must fit your Ideal Customer Profile (ICP). If they don't fit, we replace them."
        },
        {
            question: "Is this a subscription or a one-time fee?",
            answer: "We operate on a transparent monthly tier system based on volume. Scale up or down based on your needs. No massive annual lock-ins."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-midnight text-center mb-12">
                Frequently Asked Questions
            </h2>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item border-b border-gray-200">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
                        >
                            <span className="text-lg sm:text-xl font-bold text-brand-midnight pr-8">{faq.question}</span>
                            <div className="flex-shrink-0 text-brand-blue">
                                {openIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                            </div>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                        >
                            <p className="text-brand-slate text-lg leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
