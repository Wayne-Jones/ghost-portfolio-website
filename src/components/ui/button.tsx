import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md font-bold uppercase transition-colors duration-300 ease-studio focus-visible:focus-ring disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none',
  {
    variants: {
      variant: {
        default:
          'bg-accent text-accent-foreground hover:bg-accent/90',
        outline:
          'border border-accent bg-transparent text-accent hover:bg-accent hover:text-accent-foreground',
        imageGhost:
          'gap-2 border border-current/50 bg-transparent px-5 py-2.5 text-foreground hover:border-transparent hover:bg-accent hover:text-accent-foreground'
      },
      size: {
        default: 'px-5 py-2.5 text-base gap-2'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
