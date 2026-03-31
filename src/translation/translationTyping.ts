export interface TranslationStructure {
  nav: {
    work: string
    blog: string
    contacts: string
    aria: {
      home: string
      toggleMenu: string
    }
  }
  routes: {
    home: {
      h1: string
      h2: string
      h3: string
      p1: string
      p2: string
      button: string
      aria: {
        button: string
      }
    }
    work: {
      section1: {
        h1: string
        selectedProject: {
          projectName: string
          description: string
        }
        carousel: {
          card0: {
            projectName: string
            description: string
          }
          card1: {
            projectName: string
            description: string
          }
          card2: {
            projectName: string
            description: string
          }
          card3: {
            projectName: string
            description: string
          }
        }
      }
      section2: {
        h1: string
        button: string
      }
      aria: {
        section1: {
          carousel: string
          dots: string
          cards: {
            demoButton: string
          }
        }
        section2: {
          toolkit: string
          button: string
        }
      }
    }
    blog: {
      h1: string
    }
    contacts:{
      h1: string
      p: string
      availability: string
      name: string
      object: string
      message: string
      submitForm: string
      aria: {
        whatsapp: string
        linkedin: string
        github: string
      }
      formAnswer: string
    },
    phoneMenu: {
      work: string
      blog: string
      contacts: string
      aria: {
        x: string
        home: string
      }
    }
  }
}

export type SupportedLanguages = 'en' | 'it';

export type TranslationKey =
  | 'nav.work'
  | 'nav.blog'
  | 'nav.contacts'
  | 'nav.aria.home'
  | 'nav.aria.toggleMenu'

  | 'routes.home.h1'
  | 'routes.home.h2'
  | 'routes.home.h3'
  | 'routes.home.p1'
  | 'routes.home.p2'
  | 'routes.home.button'
  | 'routes.home.aria.button'

  | 'routes.work.section1.h1'
  | 'routes.work.section1.selectedProject.projectName'
  | 'routes.work.section1.selectedProject.description'
  | 'routes.work.section1.carousel.card0.projectName'
  | 'routes.work.section1.carousel.card0.description'
  | 'routes.work.section1.carousel.card1.projectName'
  | 'routes.work.section1.carousel.card1.description'
  | 'routes.work.section1.carousel.card2.projectName'
  | 'routes.work.section1.carousel.card2.description'
  | 'routes.work.section1.carousel.card3.projectName'
  | 'routes.work.section1.carousel.card3.description'
  | 'routes.work.section1.carousel.card4.projectName'
  | 'routes.work.section1.carousel.card4.description'

  | 'routes.work.section2.h1'
  | 'routes.work.section2.button'

  | 'routes.work.aria.section1.carousel'
  | 'routes.work.aria.section1.dots'
  | 'routes.work.aria.section1.cards.demoButton'
  | 'routes.work.aria.section2.toolkit'
  | 'routes.work.aria.section2.button'

  | 'routes.blog.h1'

  | 'routes.contacts.h1'
  | 'routes.contacts.p'
  | 'routes.contacts.availability'
  | 'routes.contacts.name'
  | 'routes.contacts.object'
  | 'routes.contacts.message'
  | 'routes.contacts.submitForm'
  | 'routes.contacts.aria.whatsapp'
  | 'routes.contacts.aria.linkedin'
  | 'routes.contacts.aria.github'
  | 'routes.contacts.formAnswer'

  | 'routes.phoneMenu.work'
  | 'routes.phoneMenu.blog'
  | 'routes.phoneMenu.contacts'
  | 'routes.phoneMenu.aria.x'
  | 'routes.phoneMenu.aria.home'