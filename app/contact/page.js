export const metadata = {
  title: 'Contact – My Portfolio',
};

import SocialIcons from "../../components/SocialIcons";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
      <p className="max-w-xl text-lg text-gray-400 mb-6">
        {`I’d love to connect — you can find me on the links below.`}
      </p>
      {/* divider */}
      <div className="h-0.5 w-full max-w-sm bg-orange-500 mb-6" />
      <SocialIcons isMobile />
    </main>
  );
}
