import ProjectMediaCarousel from "../../components/ProjectMediaCarousel";
import ReactMarkdown from "react-markdown";
import { projects } from "../../data/projects";
import AnimatedReveal from "../../components/AnimatedReveal";
import AnimatedTag from "../../components/AnimatedTag";
import GitHubLink from "../../components/GitHubLink";

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

  const { title, project_description_1, project_description_2, video, screenshots, githubLink, technologies } = project;

  return (
    <main className="flex flex-col px-4 py-20 space-y-8 max-w-4xl mx-auto">
      <AnimatedReveal delay={0.1}>
        <h1 className="text-4xl md:text-5xl font-bold text-center">{title}</h1>
      </AnimatedReveal>

      {/* Carousel */}
      <AnimatedReveal delay={0.1}>
        <ProjectMediaCarousel video={video} screenshots={screenshots} />
      </AnimatedReveal>

      {/* GitHub link */}
      {githubLink && (
        <AnimatedReveal delay={0.2}>
          <GitHubLink url={githubLink} />
        </AnimatedReveal>
      )}

      {/* Technologies */}
      {technologies?.length > 0 && (
        <AnimatedReveal delay={0.3}>
          <section className="w-full text-center sm:text-left">
            <h2 className="w-full text-center sm:text-left text-2xl font-semibold mb-4">Tools and Technologies</h2>
            <ul className="flex flex-wrap justify-center sm:justify-start gap-3">
              {technologies.map((tech) => (
                <AnimatedTag
                  key={tech}
                  className="px-3 py-1 rounded-full bg-gray-700/40 text-sm text-gray-300"
                >
                  {tech}
                </AnimatedTag>
              ))}
            </ul>
          </section>
        </AnimatedReveal>
       
      )}

      {project_description_1 && (
        <AnimatedReveal delay={0.4}>
          <div className="text-2xl font-semibold mb-4 justify-center md:justify-start flex text-start w-full pt-4">Project Description</div>
          <section className="text-lg md:text-xl max-w-none text-left px-2 sm:px-4 md:px-0">
            <ReactMarkdown>{project_description_1}</ReactMarkdown>
          </section>
        </AnimatedReveal>
      )}

      {project_description_2 && (
        <AnimatedReveal delay={0.5}>
          <section className="text-lg md:text-xl max-w-none text-left px-2 sm:px-4 md:px-0">
            <ReactMarkdown>{project_description_2}</ReactMarkdown>
          </section>
        </AnimatedReveal>
      )}



    </main>
  );
}
