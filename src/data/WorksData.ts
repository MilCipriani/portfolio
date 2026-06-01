import type { TranslationKey } from '../translation/translationTyping';

import TLD from '../assets/Works/LeftDrawer.webp'
import Portfolio from '../assets/Works/Portfolio.webp'
import TrainingCenter from '../assets/Works/TrainingCenter.webp'
import ClientPortfolio from '../assets/Works/ClientPortfolio.webp'

export interface WorksData {
  id: string
  highlighted: boolean
  imageURL: string | undefined
  alt: TranslationKey
  tags: Array<string>
  name: TranslationKey
  description: TranslationKey
  feature1: TranslationKey
  feature2: TranslationKey
  code: string
  live?: string
  liveType?: 'Live' | 'Demo'
}


export const worksData: WorksData[] = [
  { //The Left Drawer
    id: "0",
    highlighted: true,
    imageURL: TLD,
    alt: "routes.work.section1.works.0.alt",
    tags: ['Docker', 'NGINX', 'Expressjs', 'PostgreSQL', 'Typescript', 'React', 'Figma'],
    name: "routes.work.section1.works.0.name",
    description: "routes.work.section1.works.0.description",
    feature1: "routes.work.section1.works.0.feature1",
    feature2: "routes.work.section1.works.0.feature2",
    code: "https://github.com/MilCipriani/TheLeftDrawer-Demo",
    live: 'https://leftdrawer-demo.milena.work/',
    liveType: 'Demo'
  },
  { //Personal Portfolio
    id: "1",
    highlighted: false,
    imageURL: Portfolio,
    alt: "routes.work.section1.works.1.alt",
    tags: ['Typescript', 'React', 'Tailwind CSS', 'GitHub Actions', 'Figma'],
    name: "routes.work.section1.works.1.name",
    description: "routes.work.section1.works.1.description",
    feature1: "routes.work.section1.works.1.feature1",
    feature2: "routes.work.section1.works.1.feature2",
    code: "https://github.com/MilCipriani/portfolio",
  },
  {//Training Center Website
    id: "2",
    highlighted: false,
    imageURL: TrainingCenter,
    alt: "routes.work.section1.works.2.alt",
    tags: ['Typescript', 'React', 'Tailwind CSS', 'GitHub Actions', 'Figma'],
    name: "routes.work.section1.works.2.name",
    description: "routes.work.section1.works.2.description",
    feature1: "routes.work.section1.works.2.feature1",
    feature2: "routes.work.section1.works.2.feature2",
    code: "https://github.com/MilCipriani/inlumine",
    live: 'https://inlumine.es/',
    liveType: 'Live'
  },
  {//Client's Portfolio
    id: "3",
    highlighted: false,
    imageURL: ClientPortfolio,
    alt: "routes.work.section1.works.3.alt",
    tags: ['Docker', 'NGINX', 'Expressjs', 'PostgreSQL', 'Typescript', 'React', 'Figma'],
    name: "routes.work.section1.works.3.name",
    description: "routes.work.section1.works.3.description",
    feature1: "routes.work.section1.works.3.feature1",
    feature2: "routes.work.section1.works.3.feature2",
    code: "https://github.com/MilCipriani/MonicaGiglioPortfolio",
    live: 'https://monicagiglio.es/',
    liveType: 'Live'
  },
  
];