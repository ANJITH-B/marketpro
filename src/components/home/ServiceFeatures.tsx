'use client';

import { Truck, RotateCcw, ShieldCheck, Headphones } from 'lucide-react';

const features = [
    {
        title: 'Free Shipping',
        description: 'Free shipping on all orders over $99',
        icon: <Truck size={32} className="text-secondary" />,
        bgColor: 'bg-[#E3F2EE]'
    },
    {
        title: 'Money Return',
        description: '30 days money back guarantee',
        icon: <RotateCcw size={32} className="text-primary" />,
        bgColor: 'bg-[#FFF3EC]'
    },
    {
        title: 'Secure Payment',
        description: 'All your payments are safe with us',
        icon: <ShieldCheck size={32} className="text-accent" />,
        bgColor: 'bg-[#F0E8D5]'
    },
    {
        title: 'Support 24/7',
        description: 'Contact us 24 hours a day',
        icon: <Headphones size={32} className="text-secondary" />,
        bgColor: 'bg-[#E3F2EE]'
    }
];

const ServiceFeatures = () => {
    return (
        <section className="py-12 border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 p-6 rounded-2xl border border-gray-50 bg-white hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className={`w-16 h-16 rounded-full ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                {feature.icon}
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-heading">{feature.title}</h4>
                                <p className="text-sm text-body">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceFeatures;
