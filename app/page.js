"use client";
import FlipImage from "./components/FlipImage";
import Button from "./components/Button";
import { useRouter } from "next/navigation";
import AnimatedReveal from "./components/AnimatedReveal";
const gallery = ["/images/flip-images/tulips.png"];
const sequence = ["/images/flip-images/tulips.png"];

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center relative">
      <AnimatedReveal delay={0.2}>
        <div className="flex flex-col items-center justify-center gap-4 mb-6 md:flex-row">
          <FlipImage
            src="/images/karin.png"
            backImages={gallery}
            autoSequence={sequence}
            size={190}
            sizeMd={210}
            alt="Profile photo"
            className="flex-shrink-0"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none mt-4 md:mt-0 md:-ml-16 z-10">
            <span className="k-highlight">K</span>arin Fernandez
          </h1>
        </div>
      </AnimatedReveal>
      <AnimatedReveal delay={0.3}>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-2xl">
          {`Hi! I'm Karin Fernandez, a Software Engineer building fast, scalable web apps powered by automation and AI.`}
          </p>
        </AnimatedReveal>
      <AnimatedReveal delay={0.4}>
        <Button
          label="View Projects"
          onClick={() => router.push("/projects")}
          borderColor="border-orange-500"
          textColor="text-orange-500"
          className="mt-6"
        />
      </AnimatedReveal>
      </div>
    </main>
  );
}
