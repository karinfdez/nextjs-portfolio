import FlipImage from "../components/FlipImage";
import karin from "./images/flip-images/karin.png";
import tulips from "./images/flip-images/tulips.png";

// Add more images here as you drop them into flip-images folder
const gallery = [tulips];
const sequence = [tulips];
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <FlipImage
          src={karin}
          backImages={gallery}
          autoSequence={sequence}
          size={200} sizeMd={225}
          alt="Profile photo"
          shiftY="-8%" 
          className="flex-shrink-0"
        />
                  <h1 className="text-5xl md:text-6xl font-bold mb-4 -ml-16 z-10"><span className="text-orange-500">K</span>arin Fernandez</h1>
        </div>
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
