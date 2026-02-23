'use client';

import Image from 'next/image';
import Link from 'next/link';
import { categories } from './data';

const CategoryList = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            href="#"
                            className="group flex flex-col items-center text-center p-4 rounded-xl "
                        >
                            <div className={`w-20 h-20 rounded-full ${category.color} flex items-center justify-center text-4xl mb-4 group-hover:scale-105 transition-transform duration-300`}>
                                <Image src={category.icon} alt={category.name} width={50} height={50} />
                            </div>
                            <h3 className="text-sm font-bold text-heading group-hover:text-primary transition-colors">
                                {category.name}
                            </h3>
                            <span className="text-[12px] text-body">{category.items} Items</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryList;
