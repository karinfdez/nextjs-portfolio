export const metadata = {
  title: 'Projects – My Portfolio',
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
      <p className="max-w-xl text-lg text-gray-400">
        This page will showcase my work. Check back soon for a curated list of projects!
      </p>
    </main>
  );
}
