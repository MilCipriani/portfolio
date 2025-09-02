
import MonicaGiglioBackgroundL from "../assets/ProjectCardBG/MonicaGiglioBackgroundL.webp"
import MonicaGiglioBackgroundD from "../assets/ProjectCardBG/MonicaGiglioBackgroundD.webp"
import TLDGradientL from "../assets/ProjectCardBG/TLDGradientL.webp"
import TLDGradientD from "../assets/ProjectCardBG/TLDGradientD.webp"
import ContainerizedAppBGD from "../assets/ProjectCardBG/GradientContainerAppD.webp"
import ContainerizedAppBGL from "../assets/ProjectCardBG/GradientContainerAppL.webp"
import PortfolioL from "../assets/ProjectCardBG/PortfolioL.webp"
import PortfolioD from "../assets/ProjectCardBG/PortfolioD.webp"

export interface CardData {
  id: string;
  projectName: string;
  description: string;
  logoPathLight: string;
  logoPathDark: string;
  backgroundLight: string,
  backgroundDark: string,
  WIP?: boolean;
  demoUrl?: string;
  demoText: string;
  codeUrl?: string;
}

export const cardsData: CardData[] = [
  {
    id: "1",
    projectName: "Creation of a portfolio website for a client",
    description: "Complete client portfolio solution from concept to deployment. Collaborated closely with the client to design UI/UX in Figma that authentically represented their brand identity, then built a scalable single-page application using Vue.js, PrimeVue, and TypeScript. Implemented automated CI/CD pipelines with GitHub Actions and optimized for SEO, performance, and accessibility standards.",
    logoPathLight: "MonicaGiglioLogo.svg",
    logoPathDark: "MonicaGiglioLogo.svg",
    backgroundLight: MonicaGiglioBackgroundL,
    backgroundDark: MonicaGiglioBackgroundD,
    demoUrl: "https://monicagiglio.es",
    demoText: "Live",
    codeUrl: "https://github.com/MilCipriani/MonicaGiglioPortfolio"
  },
  {
    id: "2", 
    projectName: "The Left Drawer",
    description: "Currently in development - A comprehensive NAS solution, using a Raspberry Pi 4 and Alpine Linux. Ionic React mobile app for remote file management. Implementing Docker orchestration, monitoring stack (Grafana/Prometheus), automated backups, and security measures including VPN access. If this sounds interesting, check the README in the source code for the complete roadmap and progress updates!",
    logoPathLight: "TLDIconL.svg",
    logoPathDark: "TLDIconL.svg",
    backgroundLight: TLDGradientL,
    backgroundDark: TLDGradientD,
    demoText: "",
    WIP: true,
    codeUrl: ""
  },
  {
    id: "3", 
    projectName: "Containerization App",
    description: "Full-stack web application to explore containerized architecture. React frontend, Node.js/Express REST API and PostgreSQL database. Multi-container services orchestrated using Docker Compose, implementing best practices for development and production environment management.",
    logoPathLight: "ContainerizationLogoL.svg",
    logoPathDark: "ContainerizationLogoD.svg",
    backgroundLight: ContainerizedAppBGL,
    backgroundDark: ContainerizedAppBGD,
    demoText: "",
    codeUrl: "https://github.com/MilCipriani/ContainerizedWebApp/tree/main"
  },
  {
    id: "4", 
    projectName: "My Personal Portfolio",
    description: "The website you're using right now! Crafted with React, TypeScript, and Tailwind CSS. Responsive design, accessibility compliance, and dynamic theming (light/dark modes). Kept dependencies minimal, using only Keen Sliders for carousels. Deployed with automated CI/CD through GitHub Actions to my custom domain.",
    logoPathLight: "MilenaL.svg",
    logoPathDark: "MilenaD.svg",
    backgroundLight: PortfolioL,
    backgroundDark: PortfolioD,
    demoText: "",
    WIP: true,
    codeUrl: "https://github.com/MilCipriani/portfolio"
  },
  
];