
import { Project } from '../components/UI/ProjectCard';

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/johndoe/ecommerce",
    demo: "https://ecommerce-demo.com"
  },
  {
    id: "task-management",
    title: "Task Management App", 
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
    github: "https://github.com/johndoe/taskmanager"
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
    demo: "https://weather-dashboard.com"
  },
  {
    id: "social-media-app",
    title: "Social Media App",
    description: "A modern social media application with real-time messaging and content sharing.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"]
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with modern design.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description: "A content management system for bloggers with markdown support and SEO optimization.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"]
  }
];
