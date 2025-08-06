// export const metadata = {
//   title: 'Contact – My Portfolio',
// };

// import SocialIcons from "../components/Socialicons";
// import AnimatedDots from "../components/AnimatedDots";
// import AnimatedReveal from "../components/AnimatedReveal";

// export default function ContactPage() {
//   return (
//     <AnimatedReveal delay={0.1} className="h-screen overflow-hidden">
//       <main className="flex flex-col items-center justify-center h-full px-4 text-center overflow-hidden">
//         <div className="relative mb-8 flex items-start justify-center">
//           <div className="text-center space-y-4">
//             <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold">Get in Touch</h1>
//             <p className="max-w-xl text-lg xl:text-xl text-gray-400">
//               {`I'm always happy to chat about new opportunities, collaborations, or cool projects. Feel free to reach out!`}
//             </p>
//           </div>
//           <AnimatedDots className="absolute -right-12 top-0 scale-90 mt-2" colorClass="bg-orange-500" />
//         </div>
//         {/* divider */}
//         <div className="h-0.5 w-full max-w-sm bg-orange-500 mb-6" />
//         <SocialIcons isMobile />
//       </main>
//     </AnimatedReveal>
//   );
// }

"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import SocialIcons from "../components/Socialicons";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
const [copied, setCopied] = useState(false);
const email = 'youremail@example.com';

const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-center px-4">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h1>

      <p className="text-gray-400 mb-6 text-center max-w-md">
        I'm always open to new ideas, opportunities, or a good tech chat.
        Drop me a message or connect with me below.
      </p>

      <ContactForm />

      {/* Replace this with your own animated SocialIcons component */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <SocialIcons onEmailClick={handleCopy} />
      </motion.div>

      {copied && <p className="text-green-400 mb-6">Email copied to clipboard!</p>}

    </main>
  )
} 