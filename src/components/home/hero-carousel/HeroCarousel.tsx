'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import banner_bg from '../../../../public/banner-bg.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Content } from './Content';
import Image from 'next/image';
import { slides } from './data';


const HeroCarousel = () => {
    return (
        <section className="container relative group overflow-hidden mt-5 mx-auto rounded-2xl">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.hero-pagination',
                    bulletClass: 'hero-bullet',
                    bulletActiveClass: 'hero-bullet-active',
                }}
                navigation={{
                    nextEl: '.hero-next',
                    prevEl: '.hero-prev',
                }}
                className="w-full h-[300px] md:h-[300px] lg:h-[350px]"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={`w-full h-full ${slide.bgColor} relative flex items-center`}>
                            <Content slide={slide} />
                            <Image src={banner_bg} alt="banner-bg" className="absolute object-cover" />
                            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-40 md:opacity-100 flex items-end justify-end">
                                <div className="relative w-full h-full flex items-center justify-center p-12">
                                    <div className="w-full h-full max-w-md max-h-[400px] flex items-center justify-center rotate-3">
                                        <Image src={slide.image} alt={slide.title} className='h-full object-contain' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button className="hero-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-heading hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
                <ChevronLeft size={24} />
            </button>
            <button className="hero-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-heading hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                <ChevronRight size={24} />
            </button>

            <div className="hero-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2"></div>

        </section>
    );
};

export default HeroCarousel;
