# Next.js Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🚀 Built with Next.js 14
- 🎨 Styled with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🖼️ Project showcases with carousels
- 📝 Markdown support for project descriptions
- 🔄 Dynamic routing for project pages

## Pages

- **Home**: Introduction and featured projects
- **About**: Personal information and skills
- **Projects**: Gallery of all projects with interactive carousel
- **Project Detail**: Detailed view of individual projects with media carousel
- **Contact**: Contact information and social links

## Components

- **Navigation**: Responsive navigation with animated underlines
- **ProjectsCarousel**: Interactive carousel for browsing projects
- **ProjectMediaCarousel**: Media carousel for project screenshots and videos
- **AnimatedReveal**: Reusable animation component for revealing content
- **AnimatedParagraph**: Text animation component
- **AnimatedTag**: Animated tag component for skills and technologies
- **SocialIcons**: Social media links with hover animations

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/karinfdez/nextjs-portfolio.git
```

2. Navigate to the project directory:
```bash
cd nextjs-portfolio
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
nextjs-portfolio/
├── app/                    # Next.js app directory
│   ├── components/         # Reusable UI components
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── projects/           # Projects listing page
│   │   └── [slug]/         # Dynamic project detail pages
│   ├── data/               # Data files for projects
│   ├── layout.js           # Root layout component
│   └── page.js             # Home page
├── public/                 # Static assets
│   └── images/             # Image files
├── styles/                 # Global styles
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json            # Project dependencies
```

## Customization

### Adding New Projects

1. Add your project data to `app/data/projects.js`
2. Include any media assets in the public directory
3. The project will automatically appear in the projects list and have its own detail page

### Modifying Animations

Animation settings can be adjusted in the respective components:
- Navigation underline animations in `app/components/NavLink.jsx`
- Social icon hover effects in `app/components/Socialicons.jsx`
- Content reveal animations in `app/components/AnimatedReveal.jsx`

## Deployment

This project can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/karinfdez/nextjs-portfolio)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Embla Carousel](https://www.embla-carousel.com/)
