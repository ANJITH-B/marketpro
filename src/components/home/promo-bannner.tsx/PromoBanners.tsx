'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Banner, banners } from './data';
import Image from 'next/image';

const PromoBanners = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:gap-6 gap-2">
                    {banners.map((banner, index) => (
                        <BannerCard key={index} banner={banner} />
                    ))}
                </div>
            </div>
        </section>
    );
};


export default PromoBanners;


const BannerCard = ({ banner }: { banner: Banner }) => {
    return (
        <div
            className={`${banner.bgColor} rounded-2xl overflow-hidden group min-h-[120px] flex flex-col justify-center relative order-2 border border-gray-200`}
        >
            <div className="absolute z-10  2xl:max-w-[60%]  xl:p-8 p-4  flex flex-col gap-2">
                <h3 className="text-xl 2xl:text-2xl font-semibold text-heading   group-hover:text-primary transition-colors">
                    {banner.title}
                </h3>
                <p className=" text-sm mb-1 2xl:mb-2 text-red-500">
                    <span className='italic text-gray-500'>Starting at </span>
                    <span className='font-bold text-base'>{banner.price}</span>
                </p>
                <Link
                    href="#"
                    className={`bg-primary w-fit text-white px-3.5 py-1.5 pb-2 rounded-lg text-xs font-semibold inline-flex items-center gap-2`}
                >
                    {banner.buttonText} <ArrowRight size={16} />
                </Link>
            </div>
            <Image className='object-cover w-full h-full' src={banner.image} alt={banner.title} />
        </div>
    )
}
