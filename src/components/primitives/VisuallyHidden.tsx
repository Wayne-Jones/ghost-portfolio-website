import React, { ReactNode } from "react";

interface VisuallyHiddenProps {
  children: ReactNode;
  className?: string;
}

/**
 * Visually hidden element – still accessible to screen readers.
 * Uses Tailwind's `sr-only` utility.
 */
export const VisuallyHidden = ({ children, className }: VisuallyHiddenProps) => (
  <span className={`sr-only${className ? ` ${className}` : ""}`}>{children}</span>
);
