import { Button } from "@/components/ui/button";

interface ContentProps {
    slide: {
        title: string;
        subtitle: string;
        description: string;
        buttonText: string;
        tag: string;
    };
}

export const Content = ({ slide }: ContentProps) => {
    return (
        <div className="px-4 md:px-20 z-10 ">
            <div className="max-w-2xl">
                <span className="inline-block text-secondary font-bold text-sm mb-4">
                    {slide.subtitle}
                </span>
                <h1 className="text-4xl md:text-4xl font-semibold text-heading mb-6 leading-tight">
                    {slide.title}
                </h1>
                <div className="flex items-center gap-6">
                    <Button className="">
                        Explore Shop
                    </Button>
                    <span className="text-heading  font-bold">  <span className="font-medium italic">starting at </span> {slide.tag}</span>
                </div>
            </div>
        </div>
    )
}