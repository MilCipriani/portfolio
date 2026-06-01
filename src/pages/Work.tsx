import { useLanguage } from '../translation/index'

import { Link } from "react-router-dom"

import WorkCard from '../components/WorkCard'
import { worksData } from '../data/WorksData';
import Footer from "../components/Footer"

import Py from '../assets/ToolsSVG/python.svg?react'
import Ts from '../assets/ToolsSVG/typescript.svg?react'
import Node from '../assets/ToolsSVG/nodejs.svg?react'
import Nginx from '../assets/ToolsSVG/nginx.svg?react'
import Vue from '../assets/ToolsSVG/vuejs.svg?react'
import ReactSvg from '../assets/ToolsSVG/react.svg?react'
import Tailwind from '../assets/ToolsSVG/tailwind.svg?react'
import Figma from '../assets/ToolsSVG/figma.svg?react'
import Bash from '../assets/ToolsSVG/Bash.svg?react'
import Git from '../assets/ToolsSVG/git.svg?react'
import Docker from '../assets/ToolsSVG/docker.svg?react'
import Postgres from '../assets/ToolsSVG/postgresql.svg?react'


export default function Work() {
  const { t } = useLanguage()

  return (
    <main className="w-full h-fit flex flex-col gap-32 max-w-[1000px] mx-auto">
      <section className="flex flex-col gap-20">
        <h1 id="projects-title" className="uppercase font-serif whitespace-pre-line text-4xl md:text-5xl lg:text-7xl">{t('routes.work.section1.h1')}</h1>

        

        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 items-stretch justify-center gap-28">
          {worksData.map((card) => (
            <div key={card.id} className="h-full">
              <WorkCard  card={card}/>
            </div>))
          }        
        </div>

      </section>

      <section className="flex flex-col items-center justify-center gap-20">

        <h1 id="tools-title" className="w-full text-start uppercase font-serif whitespace-pre-line text-4xl md:text-5xl lg:text-7xl">{t('routes.work.section2.h1')}</h1>
        
        <div className="flex flex-col items-center justify-center gap-9">
          <div className="flex gap-2.5 md:gap-4">
            <Py className="w-10 md:w-16"/>
            <Ts className="w-10 md:w-16" />
            <Node className="w-10 md:w-16" />
            <Nginx className="w-10 md:w-16" />
            <Vue className="w-10 md:w-16" />
            <ReactSvg className="w-10 md:w-16" />
            <Tailwind className="w-10 md:w-16" />
          </div>

          <div className="flex gap-2.5 md:gap-4">
            <Figma className="w-10 md:w-16" />
            <Bash className="w-10 md:w-16" />
            <Git className="w-10 md:w-16" />
            <Docker className="w-10 md:w-16" />
            <Postgres className="w-10 md:w-16" />
          </div>
        </div>

        <Link to="/contacts" className="button-primary shadow-primary-button dark:shadow-primary-button-dark">{t('routes.work.section2.button')}</Link>
        

      </section>


			<Footer />

    </main>
  );
}