import React from 'react';
import { Home, Clock, BarChart2, Menu } from 'lucide-react';

const NavBar = () => {
    const navLinks = [
        { name: 'Home', icon: <Home size={18} />, href: '#', active: true },
        { name: 'Timeline', icon: <Clock size={18} />, href: '#', active: false },
        { name: 'Stats', icon: <BarChart2 size={18} />, href: '#', active: false },
    ];

    return (
        <div className="navbar bg-base-100 px-4 md:px-8 border-b border-gray-100">
            {/* Navbar Start: Logo */}
            <div className="navbar-start">
                <div className="flex items-center gap-1 cursor-pointer">
                    <span className="text-xl font-extrabold text-slate-800">Keen</span>
                    <span className="text-xl font-extrabold text-emerald-800">Keeper</span>
                </div>
            </div>

            {/* Navbar End: Desktop Links & Mobile Toggle */}
            <div className="navbar-end">
                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium ${link.active
                                    ? 'bg-emerald-900 text-white shadow-md' // Active State
                                    : 'text-slate-500 hover:bg-gray-100'     // Inactive State
                                }`}
                        >
                            {link.icon}
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Dropdown (daisyUI) */}
                <div className="dropdown dropdown-end lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        <Menu size={24} />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-gray-100"
                    >
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={link.active ? 'bg-emerald-900 text-white' : ''}
                                >
                                    {link.icon}
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;