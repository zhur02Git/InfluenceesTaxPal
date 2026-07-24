import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Influencees Creator Finance",
  description: "Income and tax preparation for Singapore creators.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
