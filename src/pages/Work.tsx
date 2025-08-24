import { useState, useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Link } from "react-router-dom"

import Card from '../components/Card'
import ThemeToggle from '../components/ThemeToggle';

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

const worksTitle = "Here's what I've\n been up to"
const toolsTitle = "What's in\n my toolkit"

const animation = { duration: 10000, easing: (t:number) => t }

//Hook to check if screen is <1024px (lg tailwind breakpoint)
function useIsMobile() {
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
const isMobile = useIsMobile()

const [currentSlide, setCurrentSlide] = useState(0)
const [loaded, setLoaded] = useState(false)
const [sliderRef, instanceRef] = useKeenSlider({
  initial: 0,
  mode: "free-snap",
  loop: true,
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
      "(min-width: 1480px)": {
      slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1780px)": {
      slides: { perView: 4, spacing: 20 },
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
    <div className="flex flex-col gap-16 xs:gap-24 md:gap-32 xxs:py-16 pt-8 pb-16">
      <h1 className="uppercase font-serif whitespace-pre-line text-4xl md:text-5xl lg:text-7xl">{worksTitle}</h1>

      <div className="flex flex-col justify-center items-center">
        <div  ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide"><Card /></div>
        <div className="keen-slider__slide"><Card /></div>
        <div className="keen-slider__slide"><Card /></div>
        <div className="keen-slider__slide"><Card /></div>
        <div className="keen-slider__slide"><Card /></div>
        <div className="keen-slider__slide"><Card /></div>
      </div>

      {loaded && instanceRef.current && (
					<div className="dots">
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
      

			<h1 className="uppercase font-serif whitespace-pre-line text-4xl md:text-5xl lg:text-7xl">{toolsTitle}</h1>

      {/*Toolkit carousel for phones and tables*/ }
      {isMobile && (
        <div  ref={secondSliderRef} className="keen-slider my-8">
          <div className="keen-slider__slide flex justify-center items-center"><Py className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"/></div>
          <div className="keen-slider__slide flex justify-center items-center"><Ts className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
          <div className="keen-slider__slide flex justify-center items-center"><Node className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
          <div className="keen-slider__slide flex justify-center items-center"><Vue className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
          <div className="keen-slider__slide flex justify-center items-center"><ReactSvg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
          <div className="keen-slider__slide flex justify-center items-center"><Tailwind className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
          <div className="keen-slider__slide flex justify-center items-center"><Figma className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
          <div className="keen-slider__slide flex justify-center items-center"><Bash className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
          <div className="keen-slider__slide flex justify-center items-center"><Git className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
          <div className="keen-slider__slide flex justify-center items-center"><Docker className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
          <div className="keen-slider__slide flex justify-center items-center"><Postgres className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" /></div>
        </div>
      )}

      {/*Toolkit static display for desktops and bigger screens*/ }
      {!isMobile && (
        <div className="flex flex-col justify-center items-center w-full gap-16 px-16 my-8">
          <div className="flex justify-between items-center gap-16">
            <Py className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" />
            <Ts className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" />
            <Node className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" />
            <Vue className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" />
            <ReactSvg className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" />
            <Tailwind className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" />
          </div>
          <div className="flex justify-around items-center gap-16">
            <Figma className="w-24 h-24 xl:w-32 xl:h-32 col-start-2 col-span-2" />
            <Bash className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" />
            <Git className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" />
            <Docker className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" />
            <Postgres className="w-24 h-24 xl:w-32 xl:h-32 col-span-2" />
          </div>
        </div>
        
      )}
			

			<Link to="/contacts" className="button-primary uppercase self-center">Let's build something together!</Link>

			<footer className='hidden md:flex justify-end items-center gap-4'>
				<a href='' role='button'>EN</a>
				<ThemeToggle/> 
			</footer> 

    </div>
  );
}