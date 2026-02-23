'use client';
import { ChevronDown, Phone } from 'lucide-react';
import Link from 'next/link';
import { navLinks } from './data';

export const NavigationBar = () => {
    return (
        <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 flex items-center justify-between py-1">
                <div className="flex items-center">
                    {/* Categories Dropdown */}
                    <button className="bg-secondary text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold hover:bg-secondary/90 transition-colors mr-10">
                        <div className="flex flex-col gap-[3px]">
                            <span className="w-4 h-[2px] bg-white"></span>
                            <span className="w-4 h-[2px] bg-white"></span>
                            <span className="w-4 h-[2px] bg-white"></span>
                        </div>
                        Browse Categories
                        <ChevronDown size={14} />
                    </button>

                    {/* Nav Links */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="flex items-center gap-1 text-sm font-bold text-heading hover:text-primary transition-colors relative"
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown size={14} />}
                                {link.badge && (
                                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-[10px] text-white px-1 rounded font-bold uppercase py-px">
                                        {link.badge}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Contact info */}
                <div className="flex items-center gap-3 text-heading hover:text-primary transition-colors cursor-pointer group">
                    <div className="bg-secondary/10 p-2 rounded-full group-hover:bg-primary/10">
                        <Phone size={20} className="text-secondary group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-body uppercase font-bold leading-none">Need any Help? call us</span>
                        <span className="text-sm font-bold leading-tight">+(2) 871 382 023</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
