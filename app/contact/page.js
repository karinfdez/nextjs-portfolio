export const metadata = {
  title: 'Contact – My Portfolio',
};

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
      <p className="max-w-xl text-lg text-gray-400 mb-6">
        I’d love to connect — you can find me on the links below.
      </p>
      {/* divider */}
      <div className="h-0.5 w-full max-w-sm bg-orange-500 mb-6" />
      {/* social icons – replace <svg> with your actual icons when ready */}
      <div className="flex gap-8 text-orange-500 text-3xl">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-orange-400 transition-colors duration-200">
          {/* placeholder */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.49 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.02.07 1.55 1.05 1.55 1.05.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.26-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.29.1-2.68 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.9-1.29 2.74-1.02 2.74-1.02.56 1.39.21 2.42.1 2.68.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.68-4.57 4.93.36.31.69.92.69 1.85 0 1.34-.012 2.42-.012 2.75 0 .27.17.59.67.49A10.02 10.02 0 0 0 22 12c0-5.52-4.48-10-10-10Z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-orange-400 transition-colors duration-200">
          {/* placeholder */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M4.98 3.5C3.34 3.5 2 4.85 2 6.5s1.34 3 2.98 3C6.63 9.5 8 8.17 8 6.5 8 4.85 6.63 3.5 4.98 3.5zM2.4 20.5h5.16V9H2.4v11.5zM9.34 9H14.4v1.56h.08c.7-1.2 2.41-2.46 4.96-2.46 5.3 0 6.28 3.48 6.28 8.01v9.39h-5.16v-8.32c0-1.99-.04-4.56-2.78-4.56-2.78 0-3.21 2.17-3.21 4.41v8.47H9.34V9z"/></svg>
        </a>
        <a href="mailto:karinfdezp@gmail.com" aria-label="Email" className="hover:text-orange-400 transition-colors duration-200">
          {/* placeholder */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>
        </a>
      </div>
    </main>
  );
}
