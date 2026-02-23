'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { useEffect } from 'react';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const cartItems = [
        { id: 1, title: 'Pure Organic Honey', price: 18.00, qty: 1, image: '🍯' },
        { id: 2, title: 'Fresh Red Strawberries', price: 5.20, qty: 2, image: '🍓' },
    ];

    const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <ShoppingBag size={24} className="text-primary" />
                                <h2 className="text-xl font-bold text-heading">Shopping Cart (2)</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 text-body transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 group">
                                    <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center text-3xl">
                                        {item.image}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between mb-1">
                                            <h4 className="text-sm font-bold text-heading line-clamp-1">{item.title}</h4>
                                            <button className="text-body hover:text-red-500">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                        <p className="text-xs text-body mb-3">{item.qty} x ${item.price.toFixed(2)}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center border border-gray-100 rounded-lg overflow-hidden">
                                                <button className="p-1 hover:bg-gray-50 text-body"><Minus size={14} /></button>
                                                <span className="px-3 text-sm font-bold">{item.qty}</span>
                                                <button className="p-1 hover:bg-gray-50 text-body"><Plus size={14} /></button>
                                            </div>
                                            <span className="font-bold text-primary">${(item.price * item.qty).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                            <div className="flex justify-between mb-6">
                                <span className="text-lg font-medium text-body">Subtotal</span>
                                <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
                            </div>
                            <div className="space-y-3">
                                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20">
                                    Checkout Now
                                </button>
                                <button className="w-full bg-white border border-gray-200 text-heading py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
                                    View Shopping Cart
                                </button>
                            </div>
                            <p className="text-center text-xs text-body mt-4">
                                Free shipping on all orders over <span className="text-primary font-bold">$99</span>
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
