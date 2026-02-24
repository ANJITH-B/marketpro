'use client';

import Image from 'next/image';
import Link from 'next/link';
import { categories } from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';


const CategoryList = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="relative overflow-hidden">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={8}
                        loop={true}
                        slidesPerView={2}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            480: { slidesPerView: 3, spaceBetween: 10 },
                            640: { slidesPerView: 4, spaceBetween: 10 },
                            768: { slidesPerView: 6, spaceBetween: 15 },
                            1024: { slidesPerView: 8, spaceBetween: 20 },
                            1280: { slidesPerView: 10, spaceBetween: 20 },
                        }}
                        className="py-4"
                    >
                        {categories.map((category, index) => (
                            <SwiperSlide key={index}>
                                <Link
                                    href="#"
                                    className="group flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300"
                                >
                                    <div className={`w-20 h-20 rounded-full ${category.color} flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Image src={category.icon} alt={category.name} width={50} height={50} className="object-contain" />
                                    </div>
                                    <h3 className="text-sm font-bold text-heading group-hover:text-primary transition-colors whitespace-nowrap">
                                        {category.name}
                                    </h3>
                                    <span className="text-[12px] text-body">{category.items} Items</span>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default CategoryList;
