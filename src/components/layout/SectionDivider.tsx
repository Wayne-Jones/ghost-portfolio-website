import React from "react";

/**
 * Simple 1 px hairline divider using Tailwind's border utilities.
 */
export const SectionDivider = () => (
  <hr className="border-t border-current/[0.08]" aria-hidden="true" />
);
