export const metadata = {
  title: 'About – My Portfolio',
};

import Image from "next/image";
import Button from "../../components/Button";
import AnimatedParagraph from "../../components/AnimatedParagraph";
import AnimatedTag from "../../components/AnimatedTag";
import profileImg from "../images/flip-images/karin.png";
import AnimatedReveal from "../../components/AnimatedReveal";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Avatar */}
        <AnimatedReveal delay={0.1} className="hidden md:block">
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <Image
            src={profileImg}
            alt="Karin profile photo"
            width={260}
            height={260}
            priority
            className="rounded-2xl object-cover border-4 border-orange-500"
          />
        </div>
        </AnimatedReveal>
        {/* Bio */}
        <div className="flex-1 space-y-4 text-center md:text-left items-center md:items-start">
        <AnimatedReveal delay={0.2}>
          <h1 className="text-3xl md:text-4xl font-bold">Karin Fernandez</h1>
          <p className="text-gray-400">Miami, FL</p>
        </AnimatedReveal>

          <AnimatedParagraph className="text-lg leading-relaxed text-gray-300">
            Hey I’m Karin, a software engineer focused on crafting clean, functional & fast web apps. I currently build delightful digital experiences at <span className="font-semibold text-orange-400">[Your Company]</span> and love everything around front-end, performance and great UX.
          </AnimatedParagraph>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
            {[
              "Web Dev",
              "React / Next.js",
              "UI / UX",
              "Performance",
              "Open Source",
            ].map((tag, idx) => (
              <AnimatedTag
                key={tag}
                delay={idx * 0.1}
                className="px-3 py-1 rounded-full bg-gray-700/40 text-sm text-gray-300"
              >
                {tag}
              </AnimatedTag>
            ))}
          </div>
          <AnimatedReveal delay={0.4}>
            <Button
              label="Download Résumé"
              href="/files/karinfdez-resume.pdf"
              target="_blank"
              rel="noopener"
              borderColor="border-orange-500"
              textColor="text-orange-500"
              className="mt-4"
            />
          </AnimatedReveal>
         
        </div>
      </div>

      {/* long paragraph */}
      <div className="max-w-3xl mt-12 text-lg leading-relaxed text-gray-300 text-center md:text-left space-y-6">
        <AnimatedParagraph>
          Over the past few years I’ve had the chance to work on projects ranging from e-commerce
          sites serving millions of customers to tiny side-projects that taught me a ton about
          product thinking. When I’m not coding you’ll find me exploring coffee shops around the
          city or sketching new interface ideas.
        </AnimatedParagraph>
        <AnimatedParagraph delay={0.3}>What about you? What brings you here? <span className="" role="img" aria-label="smile">😊</span></AnimatedParagraph>
      </div>
    </main>
  );
}
