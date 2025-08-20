import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import type { KeenSliderInstance, KeenSliderOptions } from 'keen-slider/react'
import { useTheme } from '../hooks/useTheme'
import { Link } from 'react-router-dom'

import Card from '../components/Card'
import ThemeToggle from '../components/ThemeToggle';

import PySvg from '../assets/python.svg?react'
import TsSvg from '../assets/typescript.svg?react'
import TsSvgDark from '../assets/typescriptDark.svg?react'
import NodeSvg from '../assets/nodejs.svg?react'
import VueSvg from '../assets/vuejs.svg?react'
import VueSvgDark from '../assets/vuejsDark.svg?react'
import ReactSvg from '../assets/react.svg?react'
import TailwindSvg from '../assets/tailwind.svg?react'
import FigmaSvg from '../assets/figma.svg?react'
import FigmaSvgDark from '../assets/figmaDark.svg?react'
import BashSvg from '../assets/bash.svg?react'
import BashSvgDark from '../assets/bashDark.svg?react'
import GitSvg from '../assets/git.svg?react'
import DockerSvg from '../assets/docker.svg?react'
import PostgresSvg from '../assets/postgresql.svg?react'
import PostgresSvgDark from '../assets/postgresqlDark.svg?react'

const worksTitle = "Here's what I've\n been up to"
const toolkitTitle = "What's in\n my toolkit"
const animation = { duration: 5000, easing: (t: number) => t }

const sliderConfig: KeenSliderOptions = {
  loop: true,
  mode: "snap",
  breakpoints: {
    "(min-width: 400px)": {
      slides: { perView: 1, spacing: 10 },
    },
    "(min-width: 720px)": {
      slides: { perView: 2, spacing: 10 },
    },
    "(min-width: 1000px)": {
      slides: { perView: 3, spacing: 10 },
    },
    "(min-width: 1280px)": {
      slides: { perView: 4, spacing: 20 },
    },
  },
}

const autoPlayPlugin = [
  (slider: KeenSliderInstance) => {
    let timeout: ReturnType<typeof setTimeout>
    let mouseOver = false

    function clearNextTimeout() {
      clearTimeout(timeout)
    }

    function nextTimeout() {
      clearTimeout(timeout)
      if (mouseOver) return
      timeout = setTimeout(() => {
        slider.next()
      }, 2000)
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true
        clearNextTimeout()
      })
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false
        nextTimeout()
      })
      nextTimeout()
    })

    slider.on("dragStarted", clearNextTimeout)
    slider.on("animationEnded", nextTimeout)
    slider.on("updated", nextTimeout)
  },
]

const secondSliderConfig: KeenSliderOptions = {
  loop: true,
  mode: "snap",
  breakpoints: {
    "(min-width: 200px)": {
      slides: { perView: 4, spacing: 10 },
    },
    "(min-width: 400px)": {
      slides: { perView: 5, spacing: 15 },
    },
    "(min-width: 720px)": {
      slides: { perView: 5, spacing: 30 },
    },
  },
  created(s: KeenSliderInstance) {
    s.moveToIdx(5, true, animation)
  },
  updated(s: KeenSliderInstance) {
    s.moveToIdx(s.track.details.abs + 5, true, animation)
  },
  animationEnded(s: KeenSliderInstance) {
    s.moveToIdx(s.track.details.abs + 5, true, animation)
  },
}

export default function Work() {
const { theme } = useTheme()
const isDarkMode = theme === 'dark'

const [sliderRef] = useKeenSlider( sliderConfig, autoPlayPlugin)
const [secondSliderRef] = useKeenSlider( secondSliderConfig )



  return (
    <div className="flex flex-col gap-16 xxs:py-16 pt-8 pb-16 bg-white dark:bg-blue">
      <h1 className="uppercase font-serif whitespace-pre-line text-4xl md:text-5xl lg:text-7xl">{worksTitle}</h1>

      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide"><Card /></div>
        <div className="keen-slider__slide"><Card /></div>
        <div className="keen-slider__slide"><Card /></div>
        <div className="keen-slider__slide"><Card /></div>
        <div className="keen-slider__slide"><Card /></div>
        <div className="keen-slider__slide"><Card /></div>
      </div>

      <h1 className="uppercase font-serif whitespace-pre-line text-4xl md:text-5xl lg:text-7xl">{toolkitTitle}</h1>

      {/*Toolkit content on lg screens and up (static)*/}
      <div className='w-full hidden lg:flex flex-col'>
        <div className='w-full flex items-center justify-center gap-18'>
          <PySvg className='text-black dark:text-white max-w-28'/>
          <TsSvg className='dark:hidden max-w-28'/>
          <TsSvgDark className='hidden dark:block max-w-28'/>
          <NodeSvg className='text-black dark:text-white max-w-28'/>
          <VueSvg className='dark:hidden max-w-28'/>
          <VueSvgDark className='hidden dark:block max-w-28'/>
          <ReactSvg className='text-black dark:text-white max-w-28'/>
          <TailwindSvg className='text-black dark:text-white max-w-28'/>
        </div>
        <div className='w-full flex items-center justify-center gap-18'>
          <FigmaSvg className='dark:hidden max-h-28'/>
          <FigmaSvgDark className='hidden dark:block max-h-28'/>
          <BashSvg className='dark:hidden max-w-28'/>
          <BashSvgDark className='hidden dark:block max-w-28'/>
          <GitSvg className='text-black dark:text-white max-w-28'/>
          <DockerSvg className='text-black dark:text-white max-w-28'/>
          <PostgresSvg className='dark:hidden max-w-28'/>
          <PostgresSvgDark className='hidden dark:block max-w-28'/>
        </div>
      </div>

      {/*Toolkit content on phones and tablets (second carousel)*/}
      <div ref={secondSliderRef} className="keen-slider lg:!hidden">
        <div className="keen-slider__slide flex items-center justify-center">
          <PySvg className='text-black dark:text-white'/>
        </div>
        <div className="keen-slider__slide flex items-center justify-center">
          {isDarkMode ? <TsSvgDark className="" /> : <TsSvg className="" />}
        </div>
        <div className="keen-slider__slide flex items-center justify-center"><NodeSvg className='text-black dark:text-white '/></div>
        <div className="keen-slider__slide flex items-center justify-center">
          {isDarkMode ? <VueSvgDark className="" /> : <VueSvg className="" />}
        </div>
        <div className="keen-slider__slide flex items-center justify-center"><ReactSvg className='text-black dark:text-white'/></div>
        <div className="keen-slider__slide flex items-center justify-center"><TailwindSvg className='text-black dark:text-white'/></div>
        <div className="keen-slider__slide flex items-center justify-center">
          {isDarkMode ? <FigmaSvgDark className="px-[15%] md:px-0" /> : <FigmaSvg className="px-[15%] md:px-[5%]" />}
        </div>
        <div className="keen-slider__slide flex items-center justify-center">
          {isDarkMode ? <BashSvgDark className="" /> : <BashSvg className="" />}
        </div>
        <div className="keen-slider__slide flex items-center justify-center"><GitSvg className='text-black dark:text-white'/></div>
        <div className="keen-slider__slide flex items-center justify-center"><DockerSvg className='text-black dark:text-white'/></div>
        <div className="keen-slider__slide flex items-center justify-center">
          {isDarkMode ? <PostgresSvgDark className="" /> : <PostgresSvg className="" />}
        </div>
      </div>

      <Link to="/contacts" className="button-primary uppercase self-center">Let's build something together!</Link>

      <footer className='hidden md:flex justify-end items-center gap-4'>
        <a href='' role='button'>EN</a>
        <ThemeToggle /> 
      </footer> 

    </div>
  );
}