import "./globals.css";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import AnimatedDots from "../components/AnimatedDots";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Personal software engineer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.className} min-h-full antialiased flex flex-col`}>
        <header className="w-full flex justify-center md:justify-end py-8 px-4 md:pr-12 text-xl lg:text-2xl max-w-6xl mx-auto relative">
          <AnimatedDots className="absolute left-0 top-0 scale-90" colorClass="bg-orange-500" isClickable={true} />
          <nav className="space-x-10">
            <Link href="/about" className="hover:text-orange-400 transition-colors duration-200">About</Link>
            <Link href="/projects" className="hover:text-orange-400 transition-colors duration-200">Projects</Link>
            <Link href="/contact" className="hover:text-orange-400 transition-colors duration-200">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
