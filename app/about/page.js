export const metadata = {
  title: 'About – My Portfolio',
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
      <p className="max-w-xl text-lg text-gray-400">
        Hi! I’m Karin, a software engineer passionate about crafting delightful digital experiences.
        This is a placeholder about page – feel free to replace this text with your story, skills and interests.
      </p>
      <a
        href="/files/karinfdez-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
      >
        Download Résumé
      </a>
    </main>
  );
}
