import type { TranslationKey } from '../translation/translationTyping';

import MonicaGiglioBackgroundL from "../assets/ProjectCardBG/MonicaGiglioBackgroundL.webp"
import MonicaGiglioBackgroundD from "../assets/ProjectCardBG/MonicaGiglioBackgroundD.webp"
import TLDGradientL from "../assets/ProjectCardBG/TLDGradientL.webp"
import TLDGradientD from "../assets/ProjectCardBG/TLDGradientD.webp"
import ContainerizedAppBGD from "../assets/ProjectCardBG/GradientContainerAppD.webp"
import ContainerizedAppBGL from "../assets/ProjectCardBG/GradientContainerAppL.webp"
import PortfolioL from "../assets/ProjectCardBG/PortfolioL.webp"
import PortfolioD from "../assets/ProjectCardBG/PortfolioD.webp"
import InlumineL from "../assets/ProjectCardBG/InlumineL.webp"
import InlumineD from "../assets/ProjectCardBG/InlumineD.webp"

export interface CardData {
  id: string;
  projectName: TranslationKey;
  description: TranslationKey;
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
    id: "0",
    projectName: "routes.work.section1.carousel.card4.projectName",
    description: "routes.work.section1.carousel.card4.description",
    logoPathLight: "/InlumineLogo.svg",
    logoPathDark: "/InlumineLogo.svg",
    backgroundLight: InlumineL,
    backgroundDark: InlumineD,
    demoUrl: "https://inlumine.es",
    demoText: "Live",
    codeUrl: "https://github.com/MilCipriani/inlumine"
  },
  {
    id: "1",
    projectName: "routes.work.section1.carousel.card0.projectName",
    description: "routes.work.section1.carousel.card0.description",
    logoPathLight: "/MonicaGiglioLogo.svg",
    logoPathDark: "/MonicaGiglioLogo.svg",
    backgroundLight: MonicaGiglioBackgroundL,
    backgroundDark: MonicaGiglioBackgroundD,
    demoUrl: "https://monicagiglio.es",
    demoText: "Live",
    codeUrl: "https://github.com/MilCipriani/MonicaGiglioPortfolio"
  },
  {
    id: "2", 
    projectName: "routes.work.section1.carousel.card1.projectName",
    description: "routes.work.section1.carousel.card1.description",
    logoPathLight: "/TLDIconL.svg",
    logoPathDark: "/TLDIconL.svg",
    backgroundLight: TLDGradientL,
    backgroundDark: TLDGradientD,
    demoText: "",
    WIP: true,
    codeUrl: "https://github.com/MilCipriani/TheLeftDrawer"
  },
  {
    id: "3", 
    projectName: "routes.work.section1.carousel.card2.projectName",
    description: "routes.work.section1.carousel.card2.description",
    logoPathLight: "/ContainerizationLogoL.svg",
    logoPathDark: "/ContainerizationLogoD.svg",
    backgroundLight: ContainerizedAppBGL,
    backgroundDark: ContainerizedAppBGD,
    demoText: "",
    codeUrl: "https://github.com/MilCipriani/ContainerizedWebApp/tree/main"
  },
  {
    id: "4", 
    projectName: "routes.work.section1.carousel.card3.projectName",
    description: "routes.work.section1.carousel.card3.description",
    logoPathLight: "/MilenaL.svg",
    logoPathDark: "/MilenaD.svg",
    backgroundLight: PortfolioL,
    backgroundDark: PortfolioD,
    demoText: "",
    WIP: true,
    codeUrl: "https://github.com/MilCipriani/portfolio"
  },
  
];