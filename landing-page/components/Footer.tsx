'use client';

export default function Footer() {
    const navColumns = [
        {
            title: 'Product',
            links: ['How It Works', 'Capabilities', 'Case Studies'],
        },
        {
            title: 'Company',
            links: ['About', 'Blog', 'Contact'],
        },
        {
            title: 'Legal',
            links: ['Privacy Policy', 'Terms of Service'],
        },
    ];

    return (
        <footer className="bg-obsidian border-t border-ivory/5 rounded-t-[4rem] mt-8">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-xl font-bold font-[family-name:var(--font-inter)] text-ivory tracking-tight">
                            Automate Systems
                        </h3>
                        <p className="text-sm text-ivory/30 font-[family-name:var(--font-inter)] leading-relaxed max-w-xs">
                            The automation layer behind modern sales + marketing teams.
                            AI Swarm handles the busywork behind revenue.
                        </p>

                        {/* System Status */}
                        <div className="flex items-center gap-2 pt-4">
                            <span className="pulse-dot-container">
                                <span className="w-2 h-2 rounded-full bg-green-status inline-block" />
                            </span>
                            <span className="text-xs font-[family-name:var(--font-jetbrains)] text-green-status uppercase tracking-wider">
                                System Operational
                            </span>
                        </div>
                    </div>

                    {/* Nav Columns */}
                    {navColumns.map((col) => (
                        <div key={col.title}>
                            <h4 className="text-sm font-bold font-[family-name:var(--font-inter)] text-ivory/60 uppercase tracking-wider mb-4">
                                {col.title}
                            </h4>
                            <ul className="space-y-3">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-ivory/30 hover:text-champagne hover-lift transition-colors font-[family-name:var(--font-inter)]"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-ivory/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-ivory/20 font-[family-name:var(--font-jetbrains)]">
                        © 2026 Automate Systems. All rights reserved.
                    </p>
                    <p className="text-xs text-ivory/20 font-[family-name:var(--font-jetbrains)]">
                        Built with precision. Runs without intervention.
                    </p>
                </div>
            </div>
        </footer>
    );
}
