import "./globals.css";

import { Fraunces } from "next/font/google";
import AnimatedDots from "./components/AnimatedDots";
import Navigation from "./components/Navigation";
import AnimatedReveal from "./components/AnimatedReveal";

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
        <header className="w-full flex justify-center md:justify-end py-8 px-4 md:pr-12 text-xl lg:text-2xl max-w-6xl mx-auto relative sticky top-0 z-50 bg-gray-900/90 backdrop-blur">
          <AnimatedDots className="absolute left-0 top-0 scale-90" colorClass="bg-orange-500" isClickable={true} />
          <AnimatedReveal delay={0.1}>
          <Navigation />
          </AnimatedReveal>
        </header>
        {children}
      </body>
    </html>
  );
}
