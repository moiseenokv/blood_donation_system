import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Blood Donation Appp",
  description: "Simple donation App with Next.js ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
