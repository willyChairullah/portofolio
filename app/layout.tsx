import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Willy Pratama | Full-stack Web Developer",
  description: "Portfolio of Willy Pratama, Full-stack Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
