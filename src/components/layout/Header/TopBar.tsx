import { ChevronDown, MapPin } from "lucide-react";
import Link from 'next/link';


const TopBar = () => {
    return (
        <div className="bg-primary text-white py-2 px-4 text-sm hidden lg:block">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <span className="flex items-center gap-1">
                        Until the end of the sale: <span className="font-bold">629 Days 14:41:26</span>
                    </span>
                    <span className="h-4 w-[1px] bg-white/20"></span>
                    <Link href="#" className="hover:text-secondary flex items-center gap-1">
                        Buy one get one free on <span className="text-accent underline font-semibold">first order</span>
                    </Link>
                    <span className="h-4 w-[1px] bg-white/20"></span>
                    <Link href="#" className="hover:text-secondary flex items-center gap-1">
                        <MapPin size={14} /> Track Your Order
                    </Link>
                </div>
                <div className="flex items-center space-x-6">
                    <Link href="#" className="hover:text-secondary">Order Tracking</Link>
                    <Link href="#" className="hover:text-secondary">About Us</Link>
                    <div className="flex items-center cursor-pointer hover:text-secondary group relative">
                        Eng <ChevronDown size={14} className="ml-1" />
                    </div>
                    <div className="flex items-center cursor-pointer hover:text-secondary group relative">
                        USD <ChevronDown size={14} className="ml-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar