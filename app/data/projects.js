export const projects = [
    {
      title: "Class Action",
      slug: "class-action",
      cardDescription: "A dashboard to identify and manage potential class action members.",
      project_description_1: `Class Action is a multi-tenant web platform designed to identify, contact, and recruit potential clients for employment class action lawsuits. The system enables law firms to search and fetch profiles of individuals based on their past job experience with a specific company, order and filter these profiles by relevant class action periods, and reach out to them directly via email.`,
      project_description_2: `This platform connects individuals affected by workplace violations with law firms handling relevant class action litigation, streamlining the process of finding and engaging qualified participants.`,
      image: "/images/projects-images/class-action.png",
      cardLink: "/projects/class-action",
      githubLink: "https://github.com/karinfdez/class-action-showcase/blob/main/README.md",
      video: "https://www.youtube.com/watch?v=nSMyOyMHcmA",
      screenshots: ["/images/screenshots/class-action/class-action-1.png", "/images/screenshots/class-action/class-action-2.png", "/images/screenshots/class-action/class-action-3.png"],
      technologies: ["Next.js", "React", "Typescript", "Tailwind CSS", "Radix UI", "Supabase", "PostgreSQL", "Cloudflare Workers"],
    },
    {
      title: "Email Service",
      slug: "email-service",
      cardDescription: "An AI-powered email assistant built with Cloudflare AI Agents.",
      project_description_1: `This project is an AI-driven email service built with Cloudflare Workers 
      and the Cloudflare AI Agents SDK, designed to streamline legal outreach campaigns. 
      It automatically generates and sends personalized emails using GPT-4, 
      based on user profile data stored in Supabase. The system is fully serverless, scalable, 
      and structured around specialized agents—each responsible for fetching data, processing email content, or dispatching messages`,
      project_description_2: `Behind the scenes, it uses Cloudflare Queues and Durable Objects to batch 
      and manage parallel workloads efficiently while enforcing rate and token limits. 
      The architecture is optimized for reliability and speed, allowing legal teams to automate 
      outreach at scale without compromising personalization.`,
      image: "/images/projects-images/email-service.png",
      cardLink: "/projects/email-service",
      githubLink: "https://github.com/karinfdez/email-service-showcase/blob/main/README.md",
      video: "https://www.youtube.com/watch?v=062hPy_t3XI",
      screenshots: ["/images/screenshots/email-service/email-service-1.png", "/images/screenshots/email-service/email-service-2.png"],
      technologies: ["Next.js", "Cloudflare AI Agents", "Tailwind CSS", "Resend", "OpenAI API", "Supabase"],
    },
    {
      title: "Next.js Portfolio",
      slug: "nextjs-portfolio",
      cardDescription: "A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion animations.",
      project_description_1: `This portfolio website showcases my web development projects with a modern design and smooth animations. 
        The site features a responsive layout that adapts perfectly to any device, with interactive elements that enhance the user experience.`,
      project_description_2: `The architecture includes custom components like animated reveals, interactive project carousels, and dynamic project detail pages. 
        Framer Motion powers the smooth transitions and animations throughout the site, while Tailwind CSS provides a utility-first approach to styling. 
        The portfolio is deployed on Vercel for reliable hosting and seamless updates through continuous deployment.`,
      image: "/images/projects-images/my-portfolio.png",
      cardLink: "/projects/nextjs-portfolio",
      githubLink: "https://github.com/karinfdez/nextjs-portfolio",
      video: "",
      screenshots: ["/images/screenshots/my-portfolio/my-portfolio-1.png"],
      technologies: ["Next.js 14", "Tailwind CSS", "Framer Motion", "Responsive Design", "Vercel"],
    },
    {
      title: "Chatbot",
      slug: "chatbot",
      cardDescription: "An AI-powered assistant built with Langchain JS that answers questions using internal company data.",
      project_description_1: `The LumaTech Knowledge Chatbot is an AI-powered web app that helps users ask questions about a fictional company and get accurate answers based on real documents. 
        On one side, it shows the company’s info, and on the other, you can chat with the bot. It uses LangChain.js, OpenAI, and Supabase to find the most relevant details and 
        generate responses.`,
      project_description_2: `Under the hood, it turns your questions into vectors, compares them to stored data using Supabase’s vector search, and sends everything to OpenAI 
      to generate a clear answer. The app also includes smart rate limiting with Upstash Redis and secure API endpoints to keep things safe and reliable.`,
      image: "/images/projects-images/langchain-chatbot.png",
      cardLink: "/projects/chatbot",
      githubLink: "https://github.com/karinfdez/langchain-chatbot-showcase/blob/main/README.md",
      video: "",
      screenshots: ["/images/screenshots/langchain/langchain-1.png", "/images/screenshots/langchain/langchain-2.png", "/images/screenshots/langchain/langchain-3.png"],
      technologies: ["Next.js", "LangChain JS", "Tailwind CSS", "Supabase"],
    }
  ]