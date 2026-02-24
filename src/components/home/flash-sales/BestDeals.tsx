'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../../shared/ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';
import { Product } from '@/utils/types';
import { products } from '@/utils/data';

const BestDeals = () => {
    return (
        <section className="py-12 bg-gray-50/50">
            <div className="container mx-auto px-4">
                {/* Header with Countdown */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                    <div className="flex items-center gap-6">
                        <h2 className="text-3xl font-bold text-heading">Flash Sales Today</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="best-deals-prev w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-all">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="best-deals-next w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-all">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={8}
                    slidesPerView={2}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: '.best-deals-prev',
                        nextEl: '.best-deals-next',
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 10 },
                        768: { slidesPerView: 3, spaceBetween: 10 },
                        1024: { slidesPerView: 4, spaceBetween: 20 },
                        1280: { slidesPerView: 5, spaceBetween: 20 },
                    }}
                    className="pb-10"
                >
                    {products.slice(0, 10).map((product: Product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} showProgress={true} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default BestDeals;
