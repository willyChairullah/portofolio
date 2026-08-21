import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Willy | Web Developer",
  description: "Portfolio of Willy Chairullah, Full-stack Web Developer.",
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
