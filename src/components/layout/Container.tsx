import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Layout container – centers content with max width and responsive paddings.
 */
export const Container = ({ children, className }: ContainerProps) => (
  <div className={`max-w-7xl px-4 sm:px-6 lg:px-8${className ? ` ${className}` : ""}`}>{children}</div>
);
