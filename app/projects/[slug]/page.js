import ProjectMediaCarousel from "../../../components/ProjectMediaCarousel";
import { projects } from "../../data/projects";
import Link from "next/link";

export const dynamicParams = false; // pre-generate pages at build time

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const metadata = {
  title: "Project – My Portfolio",
};

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <main className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold">Project not found</h1>
      </main>
    );
  }

  const { title, description, video, screenshots, link, technologies } = project;

  return (
    <main className="flex flex-col items-center px-4 pb-16 space-y-8 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mt-8 text-center">{title}</h1>

      {/* Carousel */}
      <ProjectMediaCarousel video={video} screenshots={screenshots} />

      {/* Description */}
      <section className="prose prose-lg dark:prose-invert max-w-none text-left">
        <p>{description}</p>
      </section>

      {/* GitHub link */}
      {link && (
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12a10 10 0 006.837 9.488c.5.091.683-.217.683-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.152-1.11-1.458-1.11-1.458-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.893 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.11-4.555-4.942 0-1.091.39-1.984 1.029-2.683-.103-.253-.447-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.53 9.53 0 012.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.416-.012 2.743 0 .268.18.58.688.482A10.002 10.002 0 0022 12c0-5.523-4.477-10-10-10z"
              clipRule="evenodd"
            />
          </svg>
          View on GitHub
        </Link>
      )}

      {/* Technologies */}
      {technologies?.length > 0 && (
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center">Technologies Used</h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
