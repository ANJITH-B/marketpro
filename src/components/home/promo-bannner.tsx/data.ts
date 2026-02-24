import { StaticImageData } from 'next/image';
import img1 from '../../../../public/promotional-banner/promotional-banner-img1.png'
import img2 from '../../../../public/promotional-banner/promotional-banner-img2.png'
import img3 from '../../../../public/promotional-banner/promotional-banner-img3.png'
import img4 from '../../../../public/promotional-banner/promotional-banner-img4.png'

export interface Banner {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    bgColor: string;
    textColor: string;
    buttonColor: string;
    image: StaticImageData;
    price: string;
}

export const banners: Banner[] = [
    {
        title: 'Best Deals',
        subtitle: 'Sale up to 50% OFF',
        description: 'Everyday Fresh & Clean with our selection',
        buttonText: 'Shop Now',
        bgColor: 'bg-[#FFF3EC]',
        textColor: 'text-heading',
        buttonColor: 'bg-primary',
        image: img1,
        price: '$12.99'
    },
    {
        title: 'Healthy Food',
        subtitle: '100% Organic',
        description: 'Enjoy healthy life with our organic food',
        buttonText: 'Shop Now',
        bgColor: 'bg-[#E3F2EE]',
        textColor: 'text-heading',
        buttonColor: 'bg-secondary',
        image: img2,
        price: '$12.99'
    },
    {
        title: 'Fast Delivery',
        subtitle: 'Free Shipping',
        description: 'Free shipping on all orders over $99',
        buttonText: 'Shop Now',
        bgColor: 'bg-[#F0E8D5]',
        textColor: 'text-heading',
        buttonColor: 'bg-accent',
        image: img3,
        price: '$12.99'
    },
    {
        title: 'Fast Delivery',
        subtitle: 'Free Shipping',
        description: 'Free shipping on all orders over $99',
        buttonText: 'Shop Now',
        bgColor: 'bg-[#F0E8D5]',
        textColor: 'text-heading',
        buttonColor: 'bg-accent',
        image: img4,
        price: '$12.99'
    }
];