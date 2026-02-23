'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { banners } from './data';
import Image from 'next/image';



const PromoBanners = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {banners.map((banner, index) => (
                        <div
                            key={index}
                            className={`${banner.bgColor} rounded-2xl p-8 relative overflow-hidden group min-h-[250px] flex flex-col justify-center`}
                        >
                            <div className="relative z-10 max-w-[60%]">
                                <span className="text-secondary font-bold text-sm mb-2 block uppercase tracking-wider">
                                    {banner.subtitle}
                                </span>
                                <h3 className="text-2xl font-bold text-heading mb-3 group-hover:text-primary transition-colors">
                                    {banner.title}
                                </h3>
                                <p className="text-body text-sm mb-6">
                                    {banner.description}
                                </p>
                                <Link
                                    href="#"
                                    className={`${banner.buttonColor} text-white px-5 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-2 transform transition-all group-hover:scale-105 active:scale-95`}
                                >
                                    {banner.buttonText} <ArrowRight size={16} />
                                </Link>
                            </div>

                            {/* Decorative Element / Mock Image / need to imporve */}
                            <div className="absolute right-0 bottom-0 text-8xl opacity-100 transform translate-x-1 translate-y-1 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 pointer-events-none">
                                <Image src={banner.image} alt={banner.title} width={100} height={100}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromoBanners;
