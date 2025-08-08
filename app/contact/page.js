"use client";

import { useState } from 'react';
import SocialIcons from "../components/Socialicons";
import ContactForm from "../components/ContactForm";
import AnimatedSlideUp from "../components/AnimatedSlideDown";
import AnimatedSlideDown from "../components/AnimatedSlideDown";

export default function ContactPage() {
const [copied, setCopied] = useState(false);
const email = 'youremail@example.com';

const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="h-screen w-full text-white flex flex-col items-center justify-center px-4 overflow-x-hidden">
      <AnimatedSlideDown delay={0.2} className="text-4xl md:text-5xl font-bold mb-4">
        Get in Touch
      </AnimatedSlideDown>

      <AnimatedSlideDown delay={0.3} className="text-gray-300 mb-6 text-center max-w-md">
        I'm always open to new ideas, opportunities, or a good tech chat.
        Drop me a message or connect with me below.
      </AnimatedSlideDown>

    

      {/* Replace this with your own animated SocialIcons component */}
      <AnimatedSlideUp delay={0.4} className="mb-10 w-full max-w-lg">
        <ContactForm />
      </AnimatedSlideUp>

      <AnimatedSlideUp delay={0.5} className="mb-10">
        <SocialIcons onEmailClick={handleCopy} />
      </AnimatedSlideUp>

      {copied && <p className="text-green-400 mb-6">Email copied to clipboard!</p>}

    </main>

  )
} 