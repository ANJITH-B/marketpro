import { cn } from '@/utils/utils';
import { tv, type VariantProps } from 'tailwind-variants';

const typography = tv(
  {
    base: "text-gray-500 text-start text-black",
    variants: {
      variant: {
        heading: 'text-6xl font-thin  text-gray-900',
        subheading: 'text-base font-semibold ',
        h2: 'text-4xl font-semibold',
        p: 'text-base leading-relaxed',
        span: 'text-sm text-gray-500'
      }
    },
    defaultVariants: {
      variant: 'p'
    }
  }
);

const tagMap = { heading: 'h1', subheading: 'h4', h2: 'h2', p: 'p', span: 'span'} as const;

type TypographyProps = VariantProps<typeof typography> & { 
  as?: React.ElementType;  
  children: React.ReactNode; 
  className?: string; 
};

export const Typography = ({ variant = 'p', as, children, className }: TypographyProps) => {

  const Component = as || tagMap[variant as keyof typeof tagMap] || 'p';

  return (
    <Component className={cn(typography({ variant }), className)}>
      {children}
    </Component>
  );
};