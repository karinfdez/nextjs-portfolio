import "./globals.css";

import { Fraunces } from "next/font/google";
import AnimatedDots from "./components/AnimatedDots";
import Navigation from "./components/Navigation";
import AnimatedReveal from "./components/AnimatedReveal";
import HamburgerMenu from "./components/HamburgerMenu";
import FloatingShapesBG from "./components/FloatingShapesBG";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Personal software engineer portfolio",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", sizes: "48x48" },
       { url: "/favicon.ico", sizes: "64x64" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.className} animated-bg min-h-full antialiased flex flex-col overflow-x-hidden`}>
        <FloatingShapesBG />
          <header className="w-full flex justify-between md:justify-end py-8 px-4 md:px-12 text-xl lg:text-2xl max-w-6xl mx-auto relative sticky top-0 z-40 bg-transparent md:backdrop-blur">
            <AnimatedDots className="absolute left-4 md:left-6 top-0 scale-90" animateOnHover={true} colorClass="bg-orange-500" isClickable={true} />
            <div className="block md:hidden">
              <HamburgerMenu />
            </div>
            <AnimatedReveal delay={0.1}>
              <div className="hidden md:block">
                <Navigation />
              </div>
            </AnimatedReveal>
          </header>
            {children}
      </body>
    </html>
  );
}
