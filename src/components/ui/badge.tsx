import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-slate-200 border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-slate-950 focus-visible:ring-[3px] focus-visible:ring-slate-950/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-red-500 aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 [&>svg]:pointer-events-none [&>svg]:size-3! dark:border-slate-800 dark:focus-visible:border-slate-300 dark:focus-visible:ring-slate-300/50 dark:aria-invalid:border-red-900 dark:aria-invalid:ring-red-900/20 dark:dark:aria-invalid:ring-red-900/40",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-slate-50 [a]:hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:[a]:hover:bg-slate-50/80",
        secondary:
          "bg-slate-100 text-slate-900 [a]:hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:[a]:hover:bg-slate-800/80",
        destructive:
          "bg-red-500/10 text-red-500 focus-visible:ring-red-500/20 dark:bg-red-500/20 dark:focus-visible:ring-red-500/40 [a]:hover:bg-red-500/20 dark:bg-red-900/10 dark:text-red-900 dark:focus-visible:ring-red-900/20 dark:dark:bg-red-900/20 dark:dark:focus-visible:ring-red-900/40 dark:[a]:hover:bg-red-900/20",
        outline:
          "border-slate-200 text-slate-950 [a]:hover:bg-slate-100 [a]:hover:text-slate-500 dark:border-slate-800 dark:text-slate-50 dark:[a]:hover:bg-slate-800 dark:[a]:hover:text-slate-400",
        ghost:
          "hover:bg-slate-100 hover:text-slate-500 dark:hover:bg-slate-100/50 dark:hover:bg-slate-800 dark:hover:text-slate-400 dark:dark:hover:bg-slate-800/50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
