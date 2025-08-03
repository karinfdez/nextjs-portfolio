import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Personal software engineer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full antialiased flex flex-col">{children}</body>
    </html>
  );
}
