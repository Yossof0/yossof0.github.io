import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yossof Abdelwahed — Web Developer",
  description: "Portfolio website for Yossof Abdelwahed",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
