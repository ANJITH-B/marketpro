'use client';

import { Star, ShoppingCart, Heart, Eye, Store } from 'lucide-react';
import Image from 'next/image';
import { Product } from '@/utils/types';

interface ProductCardProps {
    product: Product
    showProgress?: boolean
}

const ProductCard = ({ product, showProgress = false }: ProductCardProps) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-300  p-4 transition-all duration-300   hover:border-primary/60 group relative">

            {showProgress ? (
                <span className="absolute top-4 right-4 z-10 bg-primary/10 text-primary text-xs px-2.5 py-1 pb-1.5 rounded-full border border-primary/20">
                    <button className="text-xs font-semibold flex items-center gap-1.5 hover:text-primary transition-all transform active:scale-90">
                        Add <ShoppingCart size={14} />
                    </button>
                </span>) : (
                <span className="absolute top-3 left-3 z-10 bg-amber-300 text-white text-xs px-2.5 py-1 pb-1.5 rounded-lg rounded-tr-none rounded-bl-none border-primary/20">
                    <button className="text-xs font-semibold flex items-center gap-1.5 hover:text-primary transition-all transform active:scale-90"> New
                    </button>
                </span>
            )}


            {!showProgress && (
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-1 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <button className="w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-colors">
                        <Heart size={18} />
                    </button>
                    <button className="w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-colors">
                        <Eye size={18} />
                    </button>
                </div>
            )}

            {/* Product Image */}
            <div className="relative aspect-square mb-4 overflow-hidden rounded-xl flex items-center justify-center text-4xl">
                {/* Mock Image */}
                <div className="w-full h-full p-5">
                    <Image src={product.image} alt={product.title} width={200} height={200} className='w-full h-full object-contain' />
                </div>
            </div>

            {/* Content */}
            {!showProgress && (
                <>
                    <h3 className="text-sm font-bold text-heading hover:text-primary transition-colors line-clamp-2 min-h-[40px]">
                        {product.title}
                    </h3>
                    <p className='text-xs text-body flex items-center gap-2 pt-1'>
                        <Store size={16} strokeWidth={1.5} className='text-primary' />
                        By Lucky Supermarket</p>
                </>
            )}
            <div className="space-y-2">
                <div className="flex flex-col justify-between mt-2">
                    <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-primary">${product.price}</span>
                        {product.oldPrice && (
                            <span className="text-sm text-body line-through">${product.oldPrice}</span>
                        )}
                    </div>

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
                </div>

                {showProgress && <h3 className="text-sm font-bold text-heading hover:text-primary transition-colors line-clamp-2 min-h-[40px]">
                    {product.title}
                </h3>}



                {!showProgress && <button className=" font-semibold flex items-center justify-center gap-3 hover:bg-primary hover:text-white transition-all transform active:scale-90
                    w-full bg-primary/10 text-primary text-xs px-2.5 py-2  rounded-full border border-primary/20">
                    <span className='pb-0.5'>Add To Cart</span> <ShoppingCart size={12} />
                </button>}

                {showProgress && product.sold !== undefined && product.total !== undefined && (
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
