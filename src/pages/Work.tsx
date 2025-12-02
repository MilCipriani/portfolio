import { useState, useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useLanguage } from '../translation/index'

import { Link } from "react-router-dom"

import Card from '../components/Card'
import { cardsData } from '../data/CardsData';
import ThemeToggle from '../components/ThemeToggle';
import LanguageToggle from "../components/LanguageToggle"

import Py from '../assets/ToolsSVG/python.svg?react'
import Ts from '../assets/ToolsSVG/typescript.svg?react'
import Node from '../assets/ToolsSVG/nodejs.svg?react'
import Vue from '../assets/ToolsSVG/vuejs.svg?react'
import ReactSvg from '../assets/ToolsSVG/react.svg?react'
import Tailwind from '../assets/ToolsSVG/tailwind.svg?react'
import Figma from '../assets/ToolsSVG/figma.svg?react'
import Bash from '../assets/ToolsSVG/Bash.svg?react'
import Git from '../assets/ToolsSVG/git.svg?react'
import Docker from '../assets/ToolsSVG/docker.svg?react'
import Postgres from '../assets/ToolsSVG/postgresql.svg?react'

interface AnimationConfig {
  duration: number;
  easing: (t: number) => number;
}

const animation: AnimationConfig = { duration: 10000, easing: (t) => t }

//Hook to check if screen is <1024px (lg tailwind breakpoint)
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)') // lg starts at 1024px
    
    //Set initial value
    setIsMobile(mediaQuery.matches)
    
    //Listen for changes
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return isMobile
}

export default function Work() {
  const { t } = useLanguage()
  const isMobile = useIsMobile()

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    mode: "free-snap",
    loop: true,
    breakpoints: {
        "(min-width: 100px)": {
        slides: { perView: 1, spacing: 15 },
        },
        "(min-width: 720px)": {
        slides: { perView: 2, spacing: 15 },
        },
        "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 15 },
        },
        "(min-width: 1280px)": {
        slides: { perView: 3, spacing: 15 },
        },
        "(min-width: 1480px)": {
        slides: { perView: 4, spacing: 15 },
        },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const [secondSliderRef] = useKeenSlider({
      loop: true,
      renderMode: "performance",
      drag: true,
      breakpoints: {
        "(min-width: 200px)": {
          slides: { perView: 3, spacing: 10 },
        },
        "(min-width: 400px)": {
          slides: { perView: 4, spacing: 15 },
        },
        "(min-width: 720px)": {
          slides: { perView: 6, spacing: 15 },
        },
      },
      created(s) {
        s.moveToIdx(5, true, animation)
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
    }
  )

  return (
    <div className="flex flex-col gap-16 xs:gap-24 xxs:py-16 pt-8 pb-16">
      <section className="flex flex-col gap-16 xs:gap-24" aria-labelledby="projects-title">
        <h1 id="projects-title" className="uppercase font-serif whitespace-pre-line text-4xl md:text-5xl lg:text-7xl">{t('routes.work.section1.h1')}</h1>

        <div className="flex flex-col justify-center items-center">
          {/*Projects' carousel*/}
          <div  ref={sliderRef} className="keen-slider" aria-label={t('routes.work.aria.section1.carousel')} role="group">
            {cardsData.map((card) => (<div key={card.id} className="keen-slider__slide">
                                        <Card  card={card}/>
                                      </div> ))}        
          </div>
          {/*Navigation dots*/}
          {loaded && instanceRef.current && (
              <div className="dots" aria-label={t('routes.work.aria.section1.dots')}>
              {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                  return (
                  <button
                    key={idx}
                    onClick={() => {instanceRef.current?.moveToIdx(idx)}}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                  )
                })
              }
              </div>
            )
          }
        </div>
      </section>
      
      <section className="flex flex-col gap-16 xs:gap-24" aria-labelledby="tools-title">
        <h1 id="tools-title" className="uppercase font-serif whitespace-pre-line text-4xl md:text-5xl lg:text-7xl">{t('routes.work.section2.h1')}</h1>

        {/*Toolkit carousel for phones and tables*/ }
        {isMobile && (
          <div  ref={secondSliderRef} className="keen-slider my-8" aria-label={t('routes.work.aria.section2.toolkit')} role="group">
            <div className="keen-slider__slide flex justify-center items-center" aria-label="Python" role="img"><Py className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"/></div>
            <div className="keen-slider__slide flex justify-center items-center" aria-label="Typescript" role="img"><Ts className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
            <div className="keen-slider__slide flex justify-center items-center" aria-label="Nodejs" role="img"><Node className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
            <div className="keen-slider__slide flex justify-center items-center" aria-label="Vuejs" role="img"><Vue className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
            <div className="keen-slider__slide flex justify-center items-center" aria-label="React" role="img"><ReactSvg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
            <div className="keen-slider__slide flex justify-center items-center" aria-label="TailwindCSS" role="img"><Tailwind className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
            <div className="keen-slider__slide flex justify-center items-center" aria-label="Figma" role="img"><Figma className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
            <div className="keen-slider__slide flex justify-center items-center" aria-label="Bash" role="img"><Bash className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
            <div className="keen-slider__slide flex justify-center items-center" aria-label="Git" role="img"><Git className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
            <div className="keen-slider__slide flex justify-center items-center" aria-label="Docker" role="img"><Docker className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
            <div className="keen-slider__slide flex justify-center items-center" aria-label="Postgresql" role="img"><Postgres className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
          </div>
        )}

        {/*Toolkit static display for desktops and bigger screens*/ }
        {!isMobile && (
          <div className="flex flex-col justify-center items-center w-full gap-16 px-16 my-8" aria-label={t('routes.work.aria.section2.toolkit')} role="group">
            <div className="flex justify-between items-center gap-16">
              <figure role="group" aria-label="Python" className="relative group">
                <div tabIndex={0} className="focus:outline-none">
                  <Py className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" role="img" aria-hidden="true" />
                </div>
                <span className="tool-tooltip">
                  Python
                </span>
              </figure>
              <figure role="group" aria-label="Typescript" className="relative group">
                <div tabIndex={0} className="focus:outline-none">
                  <Ts className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" role="img" aria-hidden="true" />
                </div>
                <span className="tool-tooltip">
                  Typescript
                </span>
              </figure>
              <figure role="group" aria-label="Nodejs" className="relative group">
                <div tabIndex={0} className="focus:outline-none">
                  <Node className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" role="img" aria-hidden="true" />
                </div>
                <span className="tool-tooltip">
                  Nodejs
                </span>
              </figure>
              <figure role="group" aria-label="Vuejs" className="relative group">
                <div tabIndex={0} className="focus:outline-none">
                  <Vue className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" role="img" aria-hidden="true" />
                </div>
                <span className="tool-tooltip">
                  Vuejs
                </span>
              </figure>
              <figure role="group" aria-label="React" className="relative group">
                <div tabIndex={0} className="focus:outline-none">
                  <ReactSvg className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" role="img" aria-hidden="true" />
                </div>
                <span className="tool-tooltip">
                  React
                </span>
              </figure>
              <figure role="group" aria-label="TailwindCSS" className="relative group">
                <div tabIndex={0} className="focus:outline-none">
                  <Tailwind className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" role="img" aria-hidden="true" />
                </div>
                <span className="tool-tooltip">
                  TailwindCSS
                </span>
              </figure>
            </div>
            <div className="flex justify-around items-center gap-16">
              <figure role="group" aria-label="Figma" className="relative group">
                <div tabIndex={0} className="focus:outline-none">
                  <Figma className="w-24 h-24 xl:w-32 xl:h-32 col-span-2 col-start-2" role="img" aria-hidden="true" />
                </div>
                <span className="tool-tooltip">
                  Figma
                </span>
              </figure>
              <figure role="group" aria-label="Bash" className="relative group">
                <div tabIndex={0} className="focus:outline-none">
                  <Bash className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" role="img" aria-hidden="true" />
                </div>
                <span className="tool-tooltip">
                  Bash
                </span>
              </figure>
              <figure role="group" aria-label="Git" className="relative group">
                <div tabIndex={0} className="focus:outline-none">
                  <Git className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" role="img" aria-hidden="true" />
                </div>
                <span className="tool-tooltip">
                  Git
                </span>
              </figure>
              <figure role="group" aria-label="Docker" className="relative group">
                <div tabIndex={0} className="focus:outline-none">
                  <Docker className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" role="img" aria-hidden="true" />
                </div>
                <span className="tool-tooltip">
                  Docker
                </span>
              </figure>
              <figure role="group" aria-label="PostgreSQL" className="relative group">
                <div tabIndex={0} className="focus:outline-none">
                  <Postgres className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" role="img" aria-hidden="true" />
                </div>
                <span className="tool-tooltip">
                  PostgreSQL
                </span>
              </figure>
            </div>
          </div> 
        )}
        

        <Link to="/contacts" className="button-primary uppercase self-center" aria-label={t('routes.work.aria.section2.button')}>{t('routes.work.section2.button')}</Link>

      </section>


			<footer className='hidden md:flex justify-end items-center gap-4'>
				<LanguageToggle />
        <ThemeToggle/> 
			</footer> 

    </div>
  );
}