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
      screenshots: ["/images/projects-images/email-service.png"],
      technologies: ["Next.js", "Cloudflare AI Agents", "Tailwind CSS", "Resend", "OpenAI API", "Supabase"],
    },
    {
      title: "Chatbot",
      slug: "chatbot",
      cardDescription: "An AI-powered assistant built with Langchain that answers questions using internal company data.",
      project_description_1: "An AI-powered assistant built with Langchain that answers questions using internal company data.",
      image: "/images/projects-images/langchain-chatbot.png",
      cardLink: "/projects/chatbot",
      githubLink: "https://github.com/karinfdez/langchain-chatbot-showcase/blob/main/README.md",
      video: "",
      screenshots: ["/images/projects-images/langchain-chatbot.png"],
      technologies: ["Next.js", "LangChain", "Tailwind CSS"],
    },
    {
      title: "Pagas",
      slug: "pagas",
      cardDescription: "An online platform that facilitates the sale of products by creators directly to consumers using Stellar",
      project_description_1: "An online platform that facilitates the sale of products by creators directly to consumers using Stellar",
      image: "/images/projects-images/pagas.png",
      cardLink: "https://langchain-chatbot-pi.vercel.app/",
      githubLink: "https://github.com/karinfdez/pagas-showcase/blob/main/README.md",
      video: "",
      screenshots: ["/images/projects-images/pagas.png"],
      technologies: ["Next.js", "Stellar", "Tailwind CSS"],
    }
  ]