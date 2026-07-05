import React from "react";
import Link from "next/link";

/**
 * SkipLink – first focusable element on the page.
 * Hidden via `sr-only` until focused (Tailwind's `focus-visible` utilities).
 */
export const SkipLink = () => (
  <Link
    href="#main"
    className="sr-only focus-visible:not-sr-only focus-visible:relative focus-visible:z-50 focus-visible:bg-white focus-visible:text-black focus-visible:px-4 focus-visible:py-2"
  >
    Skip to main content
  </Link>
);
