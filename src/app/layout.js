"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { usePathname } from "next/navigation";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const excludedPaths = ["/pages/login", "/pages/signup", "/"];
  const shouldShowHeaderFooter = !excludedPaths.includes(pathname);
  console.log("Current Pathname:", pathname, shouldShowHeaderFooter);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {shouldShowHeaderFooter && <Navbar />}

        {children}
        {shouldShowHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
