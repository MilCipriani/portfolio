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
      hello: string
      IamMilena: string
      h2: string
      p: string
      button: string
      aria: {
        button: string
      }
    }
    work: {
      section1: {
        h1: string
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
      toast: {
        h2: string
        p0: string
        p1: string
      }
      aria: {
        whatsapp: string
        mail: string
        linkedin: string
        github: string
        closeNotification: string
      }
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

  | 'routes.home.hello'
  | 'routes.home.IamMilena'
  | 'routes.home.h2'
  | 'routes.home.p'
  | 'routes.home.button'
  | 'routes.home.aria.button'

  | 'routes.work.section1.h1'
  | 'routes.work.section1.carousel.card0.projectName'
  | 'routes.work.section1.carousel.card0.description'
  | 'routes.work.section1.carousel.card1.projectName'
  | 'routes.work.section1.carousel.card1.description'
  | 'routes.work.section1.carousel.card2.projectName'
  | 'routes.work.section1.carousel.card2.description'
  | 'routes.work.section1.carousel.card3.projectName'
  | 'routes.work.section1.carousel.card3.description'

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
  | 'routes.contacts.toast.h2'
  | 'routes.contacts.toast.p0'
  | 'routes.contacts.toast.p1'
  | 'routes.contacts.toast.p2'
  | 'routes.contacts.aria.whatsapp'
  | 'routes.contacts.aria.mail'
  | 'routes.contacts.aria.linkedin'
  | 'routes.contacts.aria.github'
  | 'routes.contacts.aria.closeNotification'

  | 'routes.phoneMenu.work'
  | 'routes.phoneMenu.blog'
  | 'routes.phoneMenu.contacts'
  | 'routes.phoneMenu.aria.x'
  | 'routes.phoneMenu.aria.home'