

import { cn } from '@/utils/utils';
import { tv, type VariantProps } from 'tailwind-variants';

const button = tv(
  {
    base: "bg-primary text-white px-5 py-1.5 rounded-full hover:bg-primary/90 transition-all transform hover:-translate-y-1",
    variants: {
      variant: {
        heading: 'text-6xl font-thin  text-gray-900',
        subheading: 'text-base font-semibold ',
        navigation: 'text-4xl font-semibold',
        p: 'text-base leading-relaxed',
        span: 'text-sm text-gray-500'
      }
    },
    defaultVariants: {
      variant: 'p'
    }
  }
);


type ButtonProps = VariantProps<typeof button> & { 
  as?: React.ElementType;  
  children: React.ReactNode; 
  className?: string; 
};

export const Button = ({ variant = 'p', as, children, className }: ButtonProps) => {

  const Component = as || 'button';

  return (
    <Component className={cn(button({ variant }), className)}>
      {children}
    </Component>
  );
};
