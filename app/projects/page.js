
"use client";
import AnimatedReveal from "../components/AnimatedReveal";
import ProjectsCarousel from "../components/ProjectsCarousel";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 overflow-hidden px-4 space-y-8">
      <AnimatedReveal delay={0.1}>
        <h1 className="w-full text-center text-4xl md:text-6xl font-bold mb-4">Projects</h1>
        
        <p className="text-gray-300 text-lg leading-relaxed text-center max-w-xl mx-auto mt-2">
          {`A few highlights of the personal projects I’ve built, combining automation, AI, and clean frontend architecture.`}
        </p>
      </AnimatedReveal>
      <ProjectsCarousel
        projects={projects}
      />
    </main>
  );
}