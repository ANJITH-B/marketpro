'use client';

import { Send } from 'lucide-react';
import Image from 'next/image';
import newsletter from '../../../public/newsletterImg.png';

const Newsletter = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="bg-[#E6E6E6] rounded-3xl p-10 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* Background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 max-w-xl text-center md:text-left flex flex-col gap-4">
                        <h2 className="text-2xl md:text-4xl font-semibold text-black  mb-2">Stay informed about latest updates</h2>
                        <form className="flex flex-col sm:flex-row gap-2">
                            <div className="relative flex-1">
                                <input
                                    type="email"
                                    placeholder="Your email address..."
                                    className="w-full px-4 py-2 rounded-xl outline-none text-heading font-medium bg-white"
                                />
                            </div>
                            <button className="bg-secondary text-white px-6 py-2 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all shadow-lg hover:shadow-secondary/20">
                                Subscribe <Send size={18} />
                            </button>
                        </form>
                        <p className="text-black/80 text-lg">
                            Subscribe to our newsletter and get 20% discount on your first order.
                        </p>
                    </div>

                    <div className="relative z-10 w-full max-w-md">
                        <Image src={newsletter} alt='newsletter' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
