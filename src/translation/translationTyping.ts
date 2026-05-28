export interface TranslationStructure {
  nav: {
    home: string
    work: string
    blog: string
    contacts: string
  }
  routes: {
    home: {
      h1: string
      h2: string
      p: string
      p1: string
      p2: string
      button: string
      contactMe: string
    }
    work: {
      section1: {
        h1: string
        works: {
          0: {
            name: string
            description: string
            feature1: string
            feature2: string
          }
          1: {
            name: string
            description: string
            feature1: string
            feature2: string
          }
          2: {
            name: string
            description: string
            feature1: string
            feature2: string
          }
          3: {
            name: string
            description: string
            feature1: string
            feature2: string
          }
        }
      }
      section2: {
        h1: string
        button: string
      }
    }
    blog: {
      h1: string
    }
    contacts:{
      section1: {
        h1: string
        gps: string
        availability: string
        form: {
          name: string
          object: string
          message: string
          formAnswer: string
          submitForm: string
        }
      }
      section2: {
        h1: string
      }
      aria: {
        whatsapp: string
        linkedin: string
        github: string
      }
    }
  }
}

export type SupportedLanguages = 'en' | 'it';

export type TranslationKey =
  | 'nav.home'
  | 'nav.work'
  | 'nav.blog'
  | 'nav.contacts'

  | 'routes.home.h1'
  | 'routes.home.h2'
  | 'routes.home.p'
  | 'routes.home.p1'
  | 'routes.home.p2'
  | 'routes.home.button'
  | 'routes.home.contactMe'

  | 'routes.work.section1.h1'
  | 'routes.work.section1.works.0.name'
  | 'routes.work.section1.works.0.description'
  | 'routes.work.section1.works.0.feature1'
  | 'routes.work.section1.works.0.feature2'
  | 'routes.work.section1.works.1.name'
  | 'routes.work.section1.works.1.description'
  | 'routes.work.section1.works.1.feature1'
  | 'routes.work.section1.works.1.feature2'
  | 'routes.work.section1.works.2.name'
  | 'routes.work.section1.works.2.description'
  | 'routes.work.section1.works.2.feature1'
  | 'routes.work.section1.works.2.feature2'
  | 'routes.work.section1.works.3.name'
  | 'routes.work.section1.works.3.description'
  | 'routes.work.section1.works.3.feature1'
  | 'routes.work.section1.works.3.feature2'

  | 'routes.work.section2.h1'
  | 'routes.work.section2.button'

  | 'routes.blog.h1'

  | 'routes.contacts.section1.h1'
  | 'routes.contacts.section1.gps'
  | 'routes.contacts.section1.availability'
  | 'routes.contacts.section1.form.name'
  | 'routes.contacts.section1.form.object'
  | 'routes.contacts.section1.form.message'
  | 'routes.contacts.section1.form.formAnswer'
  | 'routes.contacts.section1.form.submitForm'
  | 'routes.contacts.section2.h1'
  | 'routes.contacts.aria.whatsapp'
  | 'routes.contacts.aria.linkedin'
  | 'routes.contacts.aria.github'