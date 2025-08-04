export const metadata = {
  title: 'Contact – My Portfolio',
};

import SocialIcons from "../../components/SocialIcons";
import AnimatedDots from "../../components/AnimatedDots";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-4 text-center">
      <div className="relative mb-8 flex items-start justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="max-w-xl text-lg text-gray-400">
            I’d love to connect — you can find me on the links below
          </p>
        </div>
        <AnimatedDots className="absolute -right-12 top-0 scale-90 mt-2" colorClass="bg-orange-500" />
      </div>
      {/* divider */}
      <div className="h-0.5 w-full max-w-sm bg-orange-500 mb-6" />
      <SocialIcons isMobile />
    </main>
  );
}
