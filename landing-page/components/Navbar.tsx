'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { label: 'How It Works', href: '#protocol' },
        { label: 'Capabilities', href: '#features' },
        { label: 'Philosophy', href: '#philosophy' },
    ];

    return (
        <nav
            ref={navRef}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${scrolled
                ? 'bg-ivory/60 backdrop-blur-xl border border-slate/10 shadow-lg shadow-obsidian/5 px-6 py-3 rounded-[2rem]'
                : 'bg-transparent px-8 py-4 rounded-[3rem]'
                }`}
        >
            <div className="flex items-center gap-8">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 group">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 flex-shrink-0">
                        <rect width="40" height="40" rx="12" className={`transition-colors duration-500 ${scrolled ? 'fill-obsidian' : 'fill-ivory/10'}`} />
                        <path d="M10 28L20 12L30 28" className={`transition-colors duration-500 ${scrolled ? 'stroke-champagne' : 'stroke-champagne'}`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 23L20 12L26 23" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                        <circle cx="20" cy="12" r="2" fill="#C9A84C" />
                    </svg>
                    <span
                        className={`text-lg font-bold tracking-tight transition-colors duration-500 font-[family-name:var(--font-inter)] ${scrolled ? 'text-obsidian' : 'text-ivory'
                            }`}
                    >
                        Automate Systems
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`text-sm font-medium tracking-wide hover-lift transition-colors duration-500 ${scrolled
                                ? 'text-slate hover:text-obsidian'
                                : 'text-ivory/70 hover:text-ivory'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <a
                    href="#cta"
                    className={`hidden md:inline-flex items-center gap-2 text-sm font-bold tracking-wide px-5 py-2.5 rounded-[2rem] transition-all duration-500 cursor-pointer ${scrolled
                        ? 'bg-champagne text-obsidian shadow-md shadow-champagne/20 hover:scale-[1.03]'
                        : 'bg-champagne/20 text-champagne border border-champagne/30 hover:bg-champagne/30 hover:scale-[1.03]'
                        }`}
                >
                    Get Audit
                    <ArrowRight className="w-4 h-4" />
                </a>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className={`md:hidden transition-colors ${scrolled ? 'text-obsidian' : 'text-ivory'
                        }`}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden mt-4 pt-4 border-t border-slate/10 flex flex-col gap-3 pb-2">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={`text-sm font-medium ${scrolled ? 'text-slate' : 'text-ivory/70'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#cta"
                        onClick={() => setMobileOpen(false)}
                        className="btn-magnetic btn-champagne text-sm w-full justify-center mt-2"
                    >
                        <span className="btn-bg bg-champagne" />
                        Get Your Audit
                    </a>
                </div>
            )}
        </nav>
    );
}
