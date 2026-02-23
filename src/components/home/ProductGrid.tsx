'use client';

import { useState } from 'react';
import ProductCard from '../shared/ProductCard';

const popularProducts = [
    { id: 6, title: 'Fresh Organic Carrots (1kg)', price: 2.10, rating: 5, image: '🥕', tag: 'New' },
    { id: 7, title: 'Red Juicy Apples (1kg)', price: 4.80, rating: 4, image: '🍎' },
    { id: 8, title: 'Fresh Bananas (1 Dozen)', price: 1.50, oldPrice: 2.00, rating: 5, image: '🍌', tag: '-10%' },
    { id: 9, title: 'Organic Spinach (200g)', price: 2.50, rating: 4, image: '🥬' },
    { id: 10, title: 'Whole Grain Bread', price: 3.80, rating: 5, image: '🍞' },
    { id: 11, title: 'Natural Greek Yogurt (500g)', price: 5.20, rating: 4, image: '🍦' },
    { id: 12, title: 'Fresh Atlantic Salmon (250g)', price: 12.50, oldPrice: 15.00, rating: 5, image: '🐟' },
    { id: 13, title: 'Organic Olive Oil (500ml)', price: 18.20, rating: 5, image: '🫒' },
    { id: 14, title: 'Fresh Blueberries (125g)', price: 4.20, rating: 4, image: '🫐' },
    { id: 15, title: 'Cherry Tomatoes (250g)', price: 2.80, rating: 5, image: '🍅' },
];

const ProductGrid = () => {
    const tabs = ['All', 'Vegetables', 'Fruits', 'Dairy', 'Snacks'];
    const [activeTab, setActiveTab] = useState('All');

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                {/* Header with Tabs */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-8">
                    <h2 className="text-3xl font-bold text-heading">Popular Products</h2>
                    <div className="flex flex-wrap items-center gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === tab
                                        ? 'bg-primary text-white shadow-md'
                                        : 'text-body hover:text-primary hover:bg-primary/5'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {popularProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Load More Button */}
                <div className="mt-16 text-center">
                    <button className="bg-heading text-white px-10 py-4 rounded-xl font-bold hover:bg-primary transition-all shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1">
                        Load More Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
