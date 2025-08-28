"use client";

import Image from "next/image";
import AnimatedParagraph from "../components/AnimatedParagraph";
import AnimatedTag from "../components/AnimatedTag";
import AnimatedReveal from "../components/AnimatedReveal";
import { motion } from "framer-motion";
import ProfilePicture from "../components/ProfilePicture";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center lg:justify-start h-screen px-4 pt-40 md:pt-0 lg:pt-32">
      <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Avatar */}
        <AnimatedReveal delay={0.1} className="hidden md:block">
        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="overflow-hidden rounded-xl border-1 border-orange-500"
        >
          <ProfilePicture  w={600} h={600}/>
        </motion.div>
      
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
          <motion.div
            className="inline-block"
            whileHover="hover"
          >
            <motion.a
              href="/files/karinfdez-resume.pdf"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 text-lg font-medium text-orange-500 justify-center md:justify-start hover:text-orange-400"
              variants={{
                hover: { scale: 1.02 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
                variants={{
                  hover: { y: 2 }
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-7 2v2h14v-2H5z" />
              </motion.svg>
              Download&nbsp;Resume
            </motion.a>
          </motion.div>
        </div>
        </AnimatedReveal>

          <AnimatedParagraph className="text-lg leading-relaxed text-gray-300 text-left">
          {`I’m Karin, a full-stack Software Engineer with 8+ years of experience building fast, scalable, and user-focused web applications. My background spans both frontend and backend, with a focus on developer productivity, performance, and scalable infrastructure.`}
          </AnimatedParagraph>
          <AnimatedParagraph className="text-lg leading-relaxed text-gray-300 text-left">
            {`Recently, I’ve been prototyping AI and automation tools, including retrieval-augmented generation (RAG) pipelines, multi-agent systems, and serverless workflows. I’m excited about how these technologies can make engineering processes and digital products more transparent, reliable, and efficient.`}
          </AnimatedParagraph>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
            {[
              "Next.js",
              "React",
              "Tailwind CSS",
              "OpenAI API",
              "Cloudflare AI Agents",
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
      <div className="max-w-4xl mt-12 text-lg leading-relaxed text-gray-300 text-left space-y-6 pb-8 xl:pb-0">
        {/* <AnimatedParagraph className="text-lg leading-relaxed text-gray-300">
        </AnimatedParagraph> */}
        <AnimatedParagraph delay={0.2}>
        {`Beyond code, I’m passionate about reading, trading, and dancing. Always curious, always learning.`}
        </AnimatedParagraph>
      </div>
    </main>
  );
}
