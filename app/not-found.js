"use client";

import AnimatedReveal from "./components/AnimatedReveal";
import AnimatedSlideDown from "./components/AnimatedSlideDown";
import FlipImage from "./components/FlipImage";
import Button from "./components/Button";
import { useRouter } from "next/navigation";

const gallery = ["/images/flip-images/tulips.png"];
const sequence = ["/images/flip-images/tulips.png"];

export default function NotFound() {
  const router = useRouter();
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4 md:px-12 overflow-hidden">
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
            <h1 className="text-8xl font-bold leading-none mt-4 md:mt-0 md:-ml-16 z-10">
                <span className="k-highlight">4</span>04
            </h1>
            </div>
        </AnimatedReveal>
      <AnimatedReveal delay={0.2}>
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-center">Page Not Found</h2>
        
        <p className="text-gray-300 text-lg leading-relaxed text-center max-w-xl mx-auto mb-8">
            Oops! Looks like you’ve wandered off the main branch.
        </p>
        <AnimatedReveal delay={0.4}>
        <div className="flex justify-center">
            <Button
          label="Back to Home"
          onClick={() => router.push("/about")}
          borderColor="border-orange-500"
          textColor="text-orange-500"
          className="mt-6"
        />
        </div>
        </AnimatedReveal>
      </AnimatedReveal>
    </main>
  );
}




// import AnimatedReveal from "../components/AnimatedReveal";
// import ProjectsCarousel from "../components/ProjectsCarousel";
// import { projects } from "../data/projects";

// export default function ProjectsPage() {
//   return (
//     <main className="w-full max-w-6xl mx-auto px-4 md:px-12 flex flex-col items-center justify-center flex-1 overflow-hidden space-y-8">
//       <AnimatedReveal delay={0.1}>
//         <h1 className="w-full text-center text-4xl md:text-6xl font-bold mb-4">Projects</h1>
        
//         <p className="text-gray-300 text-lg leading-relaxed text-center max-w-xl mx-auto mt-2">
//           {`A few highlights of the personal projects I’ve built, combining automation, AI, and clean frontend architecture.`}
//         </p>
//       </AnimatedReveal>
//       <ProjectsCarousel
//         projects={projects}
//       />
//     </main>
//   );
// }