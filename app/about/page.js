export const metadata = {
  title: 'About – My Portfolio',
};

import Image from "next/image";
import Button from "../../components/Button";
import profileImg from "../images/flip-images/karin.png";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <Image
            src={profileImg}
            alt="Karin profile photo"
            width={260}
            height={260}
            priority
            className="rounded-2xl object-cover"
          />
        </div>
        {/* Bio */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Karin Fernandez</h1>
          <p className="text-gray-400">Miami, FL</p>

          <p className="text-lg leading-relaxed text-gray-300">
            Hey I’m Karin, a software engineer focused on crafting clean, functional & fast web apps. I currently build delightful digital experiences at <span className="font-semibold text-orange-400">[Your Company]</span> and love everything around front-end, performance and great UX.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              "Web Dev",
              "React / Next.js",
              "UI / UX",
              "Performance",
              "Open Source",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-gray-700/40 text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* long paragraph */}
      <div className="max-w-3xl mt-12 text-lg leading-relaxed text-gray-300 text-center md:text-left">
        <p>
          Over the past few years I’ve had the chance to work on projects ranging from e-commerce
          sites serving millions of customers to tiny side-projects that taught me a ton about
          product thinking. When I’m not coding you’ll find me exploring coffee shops around the
          city or sketching new interface ideas.
        </p>
        <p className="mt-6">What about you? What brings you here? <span className="" role="img" aria-label="smile">😊</span></p>
      </div>

      {/* actions */}
      <div className="mt-10">
        <Button
          label="Download Résumé"
          href="/files/karinfdez-resume.pdf"
          target="_blank"
          rel="noopener"
          borderColor="border-orange-500"
          textColor="text-orange-500"
        />
      </div>
      
          </main>
  );
}
