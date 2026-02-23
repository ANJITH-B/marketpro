'use client';

import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProductCardProps {
    product: {
        id: number;
        title: string;
        price: number;
        oldPrice?: number;
        rating: number;
        image: string;
        tag?: string;
        sold?: number;
        total?: number;
    }
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-4 transition-all duration-300 hover:shadow-xl hover:border-primary/20 group relative">
            {/* Badge/Tag */}
            {product.tag && (
                <span className="absolute top-4 left-4 z-10 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded">
                    {product.tag}
                </span>
            )}

            {/* Action Icons (Hover) */}
            <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <button className="w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-colors">
                    <Heart size={18} />
                </button>
                <button className="w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-colors">
                    <Eye size={18} />
                </button>
            </div>

            {/* Product Image */}
            <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center text-4xl">
                {/* Mock Image */}
                <div className="group-hover:scale-110 transition-transform duration-500">
                    {product.image}
                </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={14}
                            className={i < product.rating ? "fill-accent text-accent" : "text-gray-200"}
                        />
                    ))}
                    <span className="text-[12px] text-body">({product.rating}.0)</span>
                </div>

                <Link href="#" className="block">
                    <h3 className="text-sm font-bold text-heading hover:text-primary transition-colors line-clamp-2 min-h-[40px]">
                        {product.title}
                    </h3>
                </Link>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-primary">${product.price}</span>
                        {product.oldPrice && (
                            <span className="text-sm text-body line-through">${product.oldPrice}</span>
                        )}
                    </div>
                    <button className="bg-secondary/10 text-secondary p-2 rounded-lg hover:bg-secondary hover:text-white transition-all transform active:scale-90">
                        <ShoppingCart size={20} />
                    </button>
                </div>

                {/* Sold Progress Bar (Optional) */}
                {product.sold !== undefined && product.total !== undefined && (
                    <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-[11px] font-bold text-heading">
                            <span>Sold: {product.sold}/{product.total}</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-secondary transition-all duration-1000"
                                style={{ width: `${(product.sold / product.total) * 100}%` }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
