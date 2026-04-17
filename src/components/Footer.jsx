import React from 'react';
import Link from 'next/link';


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1a4332] text-white py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* 1. Branding Section */}
                <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                    KeenKeeper
                </h2>
                <p className="text-gray-300 text-center text-sm md:text-base max-w-2xl mb-8 opacity-80">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>

                {/* 2. Social Links */}
                <div className="flex flex-col items-center gap-4 mb-12">
                    <span className="text-sm font-medium uppercase tracking-widest opacity-90">
                        Social Links
                    </span>
                    <div className="flex gap-4">
                        {[
                            { icon: <img src='/assets/facebook.png' />, href: "/" },
                            { icon: <img src='/assets/instagram.png' />, href: "/" },
                            { icon: <img src='/assets/twitter.png' />, href: "/" },
                        ].map((social, idx) => (
                            <Link
                                key={idx}
                                href={social.href}
                                className="hover:translate-y-0.5"
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* 3. Bottom Bar */}
                <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm text-gray-400">
                    <p>© {currentYear} KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-6 md:gap-8">
                        <a href="/" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="/" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="/" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;