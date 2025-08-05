export const metadata = {
  title: 'Contact – My Portfolio',
};

import SocialIcons from "../components/Socialicons";
import AnimatedDots from "../components/AnimatedDots";
import AnimatedReveal from "../components/AnimatedReveal";

export default function ContactPage() {
  return (
    <AnimatedReveal delay={0.1} className="h-screen overflow-hidden">
      <main className="flex flex-col items-center justify-center h-full px-4 text-center overflow-hidden">
        <div className="relative mb-8 flex items-start justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold">Get in Touch</h1>
            <p className="max-w-xl text-lg xl:text-xl text-gray-400">
              I’d love to connect — you can find me on the links below
            </p>
          </div>
          <AnimatedDots className="absolute -right-12 top-0 scale-90 mt-2" colorClass="bg-orange-500" />
        </div>
        {/* divider */}
        <div className="h-0.5 w-full max-w-sm bg-orange-500 mb-6" />
        <SocialIcons isMobile />
      </main>
    </AnimatedReveal>
  );
}
