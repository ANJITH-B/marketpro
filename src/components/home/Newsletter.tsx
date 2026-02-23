'use client';

import { Send } from 'lucide-react';

const Newsletter = () => {
    return (
        <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="bg-primary rounded-3xl p-10 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* Background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 max-w-xl text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stay informed about latest updates</h2>
                        <p className="text-white/80 text-lg">
                            Subscribe to our newsletter and get 20% discount on your first order.
                        </p>
                    </div>

                    <div className="relative z-10 w-full max-w-md">
                        <form className="flex flex-col sm:flex-row gap-3">
                            <div className="relative flex-1">
                                <input
                                    type="email"
                                    placeholder="Your email address..."
                                    className="w-full px-6 py-4 rounded-xl outline-none text-heading font-medium"
                                />
                            </div>
                            <button className="bg-secondary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all shadow-lg hover:shadow-secondary/20">
                                Subscribe <Send size={18} />
                            </button>
                        </form>
                        <p className="text-white/60 text-xs mt-4 text-center sm:text-left">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
