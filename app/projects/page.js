export const metadata = {
  title: 'Projects – My Portfolio',
};

import ProjectsCarousel from "../components/ProjectsCarousel";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 overflow-hidden px-4 space-y-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Projects</h1>
      <ProjectsCarousel
        projects={projects}
      />
    </main>
  );
}
