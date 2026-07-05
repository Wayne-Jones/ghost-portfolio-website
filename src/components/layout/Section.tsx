import React, { ReactNode } from "react";

interface SectionProps {
  id?: string;
  ariaLabelledby?: string; // used for aria-labelledby attribute
  className?: string;
  children: ReactNode;
  /**
   * If true, adds a bottom border to separate sections.
   */
  divider?: boolean;
}

/**
 * Section wrapper – provides consistent vertical rhythm and optional divider.
 */
export const Section = ({
  id,
  ariaLabelledby,
  className,
  children,
  divider = false,
}: SectionProps) => (
  <section
    id={id}
    aria-labelledby={ariaLabelledby}
    className={`py-12${divider ? " border-b border-current/[0.08]" : ""}${className ? ` ${className}` : ""}`}
  >
    {children}
  </section>
);
