import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "My Portfolio",
  description: "Personal software engineer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full antialiased flex flex-col">
        <header className="w-full flex justify-center md:justify-end py-6 px-4 md:pr-12 text-lg">
          <nav className="space-x-10">
            <Link href="/about" className="hover:text-orange-400 transition-colors">About</Link>
            <Link href="/projects" className="hover:text-orange-400 transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-orange-400 transition-colors">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
