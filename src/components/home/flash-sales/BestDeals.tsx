'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Timer } from 'lucide-react';
import ProductCard from '../../shared/ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';

const bestDeals = [
    {
        id: 1,
        title: 'Pure Organic Honey (500g) - Fresh from Farm',
        price: 18.00,
        oldPrice: 24.50,
        rating: 5,
        image: '🍯',
        tag: 'Hot',
        sold: 18,
        total: 35
    },
    {
        id: 2,
        title: 'Organic Fresh Broccoli (500g)',
        price: 3.50,
        oldPrice: 4.80,
        rating: 4,
        image: '🥦',
        tag: 'Sale',
        sold: 45,
        total: 100
    },
    {
        id: 3,
        title: 'Fresh Red Strawberries (250g)',
        price: 5.20,
        oldPrice: 7.00,
        rating: 5,
        image: '🍓',
        tag: '-25%',
        sold: 12,
        total: 20
    },
    {
        id: 4,
        title: 'Organic Whole Milk (1 Gallon)',
        price: 4.50,
        oldPrice: 5.50,
        rating: 4,
        image: '🥛',
        sold: 85,
        total: 150
    },
    {
        id: 5,
        title: 'Brown Eggs (Large, 12 count)',
        price: 3.20,
        oldPrice: 4.00,
        rating: 5,
        image: '🥚',
        sold: 212,
        total: 300
    },
    {
        id: 6,
        title: 'Organic Whole Milk (1 Gallon)',
        price: 4.50,
        oldPrice: 5.50,
        rating: 4,
        image: '🥛',
        sold: 85,
        total: 150
    },
    {
        id: 7,
        title: 'Brown Eggs (Large, 12 count)',
        price: 3.20,
        oldPrice: 4.00,
        rating: 5,
        image: '🥚',
        sold: 212,
        total: 300
    },
];

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

                {/* Carousel */}
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: '.best-deals-prev',
                        nextEl: '.best-deals-next',
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1280: { slidesPerView: 5 },
                    }}
                    className="pb-10"
                >
                    {bestDeals.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default BestDeals;
