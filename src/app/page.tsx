import Image from "next/image";

import HeroCarousel from "@/components/home/hero-carousel/HeroCarousel";
import CategoryList from "@/components/home/categories/CategoryList";
import PromoBanners from "@/components/home/promo-bannner.tsx/PromoBanners";
import BestDeals from "@/components/home/flash-sales/BestDeals";
import ProductGrid from "@/components/home/ProductGrid";
import ServiceFeatures from "@/components/home/ServiceFeatures";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <CategoryList />
      <PromoBanners />
      <BestDeals />
      <ProductGrid />
      <ServiceFeatures />
      <Newsletter />
    </main>
  );
}
