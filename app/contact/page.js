export const metadata = {
  title: 'Contact – My Portfolio',
};

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
      <p className="max-w-xl text-lg text-gray-400 mb-6">
        I’d love to hear from you! Feel free to reach out via email or social media.
      </p>
      <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline text-lg">
        your.email@example.com
      </a>
    </main>
  );
}
