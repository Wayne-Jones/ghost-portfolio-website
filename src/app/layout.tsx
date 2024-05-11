import { ThemeProvider } from "@/provider/ThemeProvider";
import { Metadata } from "next";
import { montserrat } from '@/helper/util';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: "GhostCMS NextJS",
  description: "Welcome to Next.js powered by GhostCMS",
};
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
