import { StaticImageData } from "next/image";

export interface Product {
    id: number;
    title: string;
    price: number;
    oldPrice?: number;
    rating: number;
    image: StaticImageData;
    tag?: string;
    sold?: number;
    total?: number;
}