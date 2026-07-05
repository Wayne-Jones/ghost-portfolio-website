import React, { ReactNode } from "react";

interface FocusRingProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper that applies the shared `focus-ring` utility when the element receives focus.
 * Tailwind's `focus-visible` ensures the style only appears for keyboard navigation.
 */
export const FocusRing = ({ children, className }: FocusRingProps) => (
  <div className={`focus-visible focus-ring${className ? ` ${className}` : ""}`}>{children}</div>
);
