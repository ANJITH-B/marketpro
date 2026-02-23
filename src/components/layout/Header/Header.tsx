'use client'
import { useState } from "react";
import TopBar from "./TopBar";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../../public/logo.png'
import { ChevronDown, Heart, Search, ShoppingCart, User } from "lucide-react";
import CartDrawer from "@/components/shared/CartDrawer";
import { NavigationBar } from "./Navigation";


const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <header className="w-full sticky top-0 z-50 bg-white">
            {/* Middle Header */}
            <div className="py-6 border-b border-gray-100">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={logo} alt='' width={150} height={150} />
                    </Link>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl mx-10 hidden md:flex items-center border-2 border-primary/20 rounded-lg overflow-hidden focus-within:border-primary transition-colors">
                        <div className="px-4 py-2 bg-gray-50 border-r border-gray-200 text-sm font-medium text-heading whitespace-nowrap hidden lg:flex items-center gap-1 cursor-pointer">
                            All categories <ChevronDown size={14} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for products, categories or brands..."
                            className="flex-1 px-4 py-2 outline-none text-sm"
                        />
                        <button className="bg-primary text-white p-3 hover:bg-primary/90 transition-colors">
                            <Search size={20} />
                        </button>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-6">
                        <Link href="#" className="flex items-center gap-2 group">
                            <div className="relative">
                                <User size={28} className="text-heading group-hover:text-primary transition-colors" />
                            </div>
                            <span className="text-sm font-medium text-heading hidden lg:block group-hover:text-primary transition-colors">Profile</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-2 group">
                            <div className="relative">
                                <Heart size={28} className="text-heading group-hover:text-primary transition-colors" />
                                <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold border-2 border-white">2</span>
                            </div>
                            <span className="text-sm font-medium text-heading hidden lg:block group-hover:text-primary transition-colors">Wishlist</span>
                        </Link>
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="flex items-center gap-2 group"
                        >
                            <div className="relative">
                                <ShoppingCart size={28} className="text-heading group-hover:text-primary transition-colors" />
                                <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold border-2 border-white">2</span>
                            </div>
                            <span className="text-sm font-medium text-heading hidden lg:block group-hover:text-primary transition-colors">Cart</span>
                        </button>
                    </div>
                </div>
            </div>

            <NavigationBar />
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </header>
    );
};

export default Header;
