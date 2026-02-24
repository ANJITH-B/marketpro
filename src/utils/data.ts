import img1 from '../../public/products/1.png'
import img2 from '../../public/products/2.png'
import img3 from '../../public/products/3.png'
import img4 from '../../public/products/4.png'
import img5 from '../../public/products/5.png'
import img6 from '../../public/products/6.png'
import img7 from '../../public/products/7.png'
import img8 from '../../public/products/8.png'
import img9 from '../../public/products/9.png'
import img10 from '../../public/products/10.png'
import img11 from '../../public/products/11.png'
import img12 from '../../public/products/12.png'
import img13 from '../../public/products/13.png'
import { Product } from './types'




export const products: Product[] = [
    {
        id: 1,
        title: 'Pure Organic Honey (500g) - Fresh from Farm',
        price: 18.00,
        oldPrice: 24.50,
        rating: 5,
        image: img1,
        tag: 'Hot',
        sold: 18,
        total: 35
    },
    {
        id: 2,
        title: 'Organic Fresh Broccoli (500g)',
        price: 3.50,
        oldPrice: 4.80,
        rating: 4,
        image: img12,
        tag: 'Sale',
        sold: 45,
        total: 100
    },
    {
        id: 3,
        title: 'Fresh Red Strawberries (250g)',
        price: 5.20,
        oldPrice: 7.00,
        rating: 5,
        image: img3,
        tag: '-25%',
        sold: 12,
        total: 20
    },
    {
        id: 4,
        title: 'Organic Whole Milk (1 Gallon)',
        price: 4.50,
        oldPrice: 5.50,
        rating: 4,
        image: img4,
        sold: 85,
        total: 150
    },
    {
        id: 5,
        title: 'Brown Eggs (Large, 12 count)',
        price: 3.20,
        oldPrice: 4.00,
        rating: 5,
        image: img11,
        sold: 212,
        total: 300
    },
    {
        id: 6,
        title: 'Organic Whole Milk (1 Gallon)',
        price: 4.50,
        oldPrice: 5.50,
        rating: 4,
        image: img13,
        sold: 85,
        total: 150
    },
    {
        id: 7,
        title: 'Brown Eggs (Large, 12 count)',
        price: 3.20,
        oldPrice: 4.00,
        rating: 5,
        image: img7,
        sold: 212,
        total: 300
    },
    {
        id: 8,
        title: 'Organic Whole Milk (1 Gallon)',
        price: 4.50,
        oldPrice: 5.50,
        rating: 4,
        image: img8,
        sold: 85,
        total: 150
    },
    {
        id: 9,
        title: 'Brown Eggs (Large, 12 count)',
        price: 3.20,
        oldPrice: 4.00,
        rating: 5,
        image: img9,
        sold: 212,
        total: 300
    },
    {
        id: 10,
        title: 'Organic Whole Milk (1 Gallon)',
        price: 4.50,
        oldPrice: 5.50,
        rating: 4,
        image: img10,
        sold: 85,
        total: 150
    },
];