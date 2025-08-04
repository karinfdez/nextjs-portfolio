"use client";
import FlipImage from "../components/FlipImage";
import karin from "./images/karin.png";
import tulips from "./images/flip-images/tulips.png";
import Button from "../components/Button";
// Add more images here as you drop them into flip-images folder
const gallery = [tulips];
const sequence = [tulips];
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center relative">
        <div className="flex flex-col items-center justify-center gap-4 mb-6 md:flex-row">
        <FlipImage
          src={karin}
          backImages={gallery}
          autoSequence={sequence}
          size={190}
          sizeMd={210}
          alt="Profile photo"
          className="flex-shrink-0"
        />
        <h1 className="text-4xl md:text-6xl font-bold leading-none mt-4 md:mt-0 md:-ml-16 z-10">
          <span className="k-highlight">K</span>arin Fernandez
        </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl">
          Hi! I'm Karin Fernandez, a Software Engineer passionate about building clean, functional, and fast web apps.
        </p>
        {/* <Link
          href="/projects"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
        >
          View Projects
        </Link> */}
        <Button
          label="View Projects"
          onClick={() => router.push("/projects")}
          borderColor="border-orange-500"
          textColor="text-orange-500"
          className="mt-6"
        />
      </div>
    </main>
  );
}
