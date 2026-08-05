import type { Metadata } from "next";
import "@fontsource/geist/400.css";
import "@fontsource/geist/500.css";
import "@fontsource/geist/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fatima Alfurais — Software Engineer",
  description: "Portfolio of Fatima Alfurais, a software engineering student.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
