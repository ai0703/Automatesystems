'use client';

export default function Footer() {
    return (
        <footer className="bg-brand-midnight border-t border-brand-slate/20 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-brand-slate text-sm">
                    © 2026 AutomateSystems. All Rights Reserved.
                </div>
                <div className="flex gap-8 text-sm text-brand-slate">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Contact Support</a>
                </div>
            </div>
        </footer>
    );
}
