import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'uppercase whitespace-nowrap rounded-md font-bold flex items-center transition-colors focus:outline-hidden focus:ring-2 focus:ring-dark-purple focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-gray dark:focus:ring-light-purple disabled:pointer-events-none disabled:opacity-50 ',
  {
    variants: {
      variant: {
        default:
          'bg-dark-purple dark:bg-light-purple text-white dark:text-dark-gray hover:bg-dark-purple/90 dark:hover:bg-light-purple/90',
        outline:
          'border border-dark-purple dark:border-light-purple text-dark-purple dark:text-light-purple bg-transparent hover:bg-dark-purple dark:hover:bg-light-purple hover:text-white dark:hover:text-dark-gray'
      },
      size: {
        default: 'p-4 text-base gap-2'
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
