import FlipImage from "../components/FlipImage";
import tulips from "./images/tulips.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="max-w-2xl mx-auto">
        <FlipImage
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
          backSrc={tulips}
          width={200}
          height={200}
          alt="Profile photo"
          className="mx-auto mb-6"
        />
        <h1 className="text-5xl md:text-6xl font-bold mb-4">John Doe</h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Software Engineer passionate about building exceptional digital
          experiences.
        </p>
        <Link
          href="/projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
        >
          View Projects
        </Link>
      </div>
    </main>
  );
}
