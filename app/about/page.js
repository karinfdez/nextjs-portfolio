export const metadata = {
  title: 'About – My Portfolio',
};

import Image from "next/image";
import Button from "../../components/Button";
import AnimatedParagraph from "../../components/AnimatedParagraph";
import AnimatedTag from "../../components/AnimatedTag";
import AnimatedReveal from "../../components/AnimatedReveal";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-start h-screen px-4 pt-16 overflow-y-auto">
      <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Avatar */}
        <AnimatedReveal delay={0.1} className="hidden md:block">
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <Image
            src="/images/flip-images/karin-full.png"
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
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold">Karin Fernandez</h1>
            <p className="text-gray-400">Miami, FL</p>
          </div>
          </div>
          <div className="flex flex-col">
          <a
            href="/files/karinfdez-resume.pdf"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 text-md font-medium text-orange-400 hover:underline justify-center md:justify-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-7 2v2h14v-2H5z" />
            </svg>
            Download&nbsp;Resume
          </a>
        </div>
        </AnimatedReveal>

          <AnimatedParagraph className="text-lg leading-relaxed text-gray-300">
          {`Hey, I’m Karin, a full-stack Software Engineer with 8+ years of experience building fast, scalable, and user-focused web applications. I’ve worked with technologies like Next.js, React, Supabase, Cloudflare Workers, Hygraph, MongoDB, and AWS Lambda to deliver high-performance platforms for marketplaces, CMS integrations, and real-time applications. My recent work includes building APIs that handle millions of requests, connecting Cloudflare Workers to external databases like MongoDB, and designing clean, serverless architectures optimized for speed and reliability.`}
          </AnimatedParagraph>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
            {[
              "Next.js",
              "React",
              "Tailwind CSS",
              "OpenAI API",
              "Cloudflare AI Agents",
              "LangChain",
              "Supabase"
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

         
        </div>
      </div>

      {/* long paragraph */}
      <div className="max-w-4xl mt-12 text-lg leading-relaxed text-gray-300 text-center md:text-left space-y-6">
        <AnimatedParagraph className="text-lg leading-relaxed text-gray-300">
          {`Lately, I’ve been diving into AI-powered features and Cloudflare AI Agents, building tools that automate outreach and analyze data.`}
        </AnimatedParagraph>
        <AnimatedParagraph delay={0.2}>
        {`Beyond code, I’m passionate about reading, trading, and dancing. Always curious, always learning.`}
        </AnimatedParagraph>
        <AnimatedParagraph delay={0.3}>What about you? What brings you here? <span className="" role="img" aria-label="smile">😊</span></AnimatedParagraph>
      </div>
    </main>
  );
}
