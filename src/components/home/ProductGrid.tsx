'use client';

import { useState } from 'react';
import ProductCard from '../shared/ProductCard';
import { products } from '@/utils/data';



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
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 gap-y-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>



            </div>
        </section>
    );
};

export default ProductGrid;
