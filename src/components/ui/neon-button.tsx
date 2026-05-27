import React from 'react'
import { cn } from '../../lib/utils'
import { VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
    "relative group border mx-auto text-center rounded-full inline-flex items-center justify-center gap-2",
    {
        variants: {
            variant: {
                default: "bg-blue-500/5 hover:bg-blue-500/0 border-blue-500/20 text-white",
                solid: "bg-blue-500 hover:bg-blue-600 text-white border-transparent hover:border-white/50 transition-all duration-200",
                ghost: "border-transparent bg-transparent hover:border-zinc-600 hover:bg-white/10 text-white",
            },
            size: {
                default: "px-7 py-3",
                sm: "px-4 py-1.5",
                lg: "px-10 py-4",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { 
        neon?: boolean;
        asChild?: boolean;
    }

const NeonButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, neon = true, size, variant, children, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            >
                {asChild ? (
                    React.Children.map(children, (child) => {
                        if (React.isValidElement(child)) {
                            return React.cloneElement(child, {
                                children: (
                                    <>
                                        <span className={cn("absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 inset-y-0 bg-gradient-to-r w-3/4 mx-auto from-transparent dark:via-blue-500 via-blue-600 to-transparent hidden", neon && "block")} />
                                        {child.props.children}
                                        <span className={cn("absolute group-hover:opacity-30 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent dark:via-blue-500 via-blue-600 to-transparent hidden", neon && "block")} />
                                    </>
                                )
                            } as any);
                        }
                        return child;
                    })
                ) : (
                    <>
                        <span className={cn("absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 inset-y-0 bg-gradient-to-r w-3/4 mx-auto from-transparent dark:via-blue-500 via-blue-600 to-transparent hidden", neon && "block")} />
                        {children}
                        <span className={cn("absolute group-hover:opacity-30 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent dark:via-blue-500 via-blue-600 to-transparent hidden", neon && "block")} />
                    </>
                )}
            </Comp>
        );
    }
)

NeonButton.displayName = 'NeonButton';

export { NeonButton, buttonVariants };
