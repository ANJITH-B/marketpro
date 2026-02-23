import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    const footerLinks = [
        {
            title: 'Company',
            links: [
                { name: 'About Us', href: '#' },
                { name: 'Delivery Information', href: '#' },
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms & Conditions', href: '#' },
                { name: 'Contact Us', href: '#' },
                { name: 'Support Center', href: '#' },
            ],
        },
        {
            title: 'Information',
            links: [
                { name: 'Search Terms', href: '#' },
                { name: 'Advanced Search', href: '#' },
                { name: 'Help & FAQ', href: '#' },
                { name: 'Store Location', href: '#' },
                { name: 'Orders & Returns', href: '#' },
                { name: 'Feedback', href: '#' },
            ],
        },
        {
            title: 'Category',
            links: [
                { name: 'Vegetables & Fruit', href: '#' },
                { name: 'Beverages', href: '#' },
                { name: 'Meats & Seafood', href: '#' },
                { name: 'Breakfast & Dairy', href: '#' },
                { name: 'Frozen Foods', href: '#' },
                { name: 'Biscuits & Snacks', href: '#' },
            ],
        },
    ];

    return (
        <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Info */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="bg-secondary p-1 rounded-lg">
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                    <span className="text-secondary font-bold text-xl">M</span>
                                </div>
                            </div>
                            <span className="text-2xl font-bold text-heading">Marketpro</span>
                        </Link>
                        <p className="text-body text-sm mb-6 leading-relaxed max-w-sm">
                            We are a dynamic team of full stack developers and designers crafting premium web experiences. Marketpro is your one-stop shop for all your grocery needs.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin size={20} className="text-secondary shrink-0 mt-1" />
                                <span className="text-sm text-heading font-medium">5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={20} className="text-secondary shrink-0" />
                                <span className="text-sm text-heading font-medium">(+91) - 540-025-124553</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={20} className="text-secondary shrink-0" />
                                <span className="text-sm text-heading font-medium">sale@marketpro.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-lg font-bold text-heading mb-6">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-sm text-body hover:text-primary transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-body text-center md:text-left">
                        © 2024 <span className="text-primary font-bold">Marketpro</span>. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        {/* App Store Links mockup */}
                        <div className="flex gap-2">
                            <div className="bg-heading rounded-lg px-3 py-1 flex items-center gap-2 cursor-pointer hover:bg-heading/90 transition-colors">
                                <div className="text-white">
                                    <p className="text-[10px] leading-tight opacity-70">Download on the</p>
                                    <p className="text-xs font-bold leading-tight">App Store</p>
                                </div>
                            </div>
                            <div className="bg-heading rounded-lg px-3 py-1 flex items-center gap-2 cursor-pointer hover:bg-heading/90 transition-colors">
                                <div className="text-white">
                                    <p className="text-[10px] leading-tight opacity-70">Get it on</p>
                                    <p className="text-xs font-bold leading-tight">Google Play</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <Link href="#" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                            <Facebook size={18} />
                        </Link>
                        <Link href="#" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                            <Twitter size={18} />
                        </Link>
                        <Link href="#" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                            <Instagram size={18} />
                        </Link>
                        <Link href="#" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                            <Youtube size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
