export default {
  nav: {
    home: "Home",
    work: "Work",
    blog: "Blog",
    contacts: "Contacts"
  },
  routes: {
    home: {
      h1: "Milena Cipriani",
      h2: "Fullstack developer",
      p: "From a Figma mockup to production infrastructure",
      p1: "I build web applications end to end: from UI to the infrastructure running underneath, which I design security-first. I care about code that's maintainable, systems that are reliable, and products that are tailored to their users. ",
      p2: "Open to remote and hybrid frontend or fullstack roles in Europe.",
      button: "See my work",
      contactMe: "or contact me"
    },
    work: {
      section1: {
        h1: "Here's what I've\n been building",
        works: {
          0: {
            name: 'Self-hosted cloud storage solution',
            alt: 'Presentation of the App',
            description: 'Built to run on a Raspberry Pi for non-technical userbase, kept private behind a ZeroTier network. Demo available, hosted on a VPS.',
            feature1: 'Layered Auth, authenticated Image Loading, file operations with rollback on failure.',
            feature2: 'Demo credentials:\n User: Demo | Password: DemoPw123'
          },
          1: {
            name: 'My Personal Portfolio',
            alt: 'Screenshot of the website',
            description: 'Built to reflect how I currently approach frontend work.',
            feature1: 'Clean component architecture, accessible markup, dark/light theming, and full Italian/English localization. Intentionally kept dependencies minimal.',
            feature2: 'The design went through Figma before a single line of code.'
          },
          2: {
            name: 'Training Center Website',
            alt: 'Screenshot of the website',
            description: 'Migrated and rebuilt a wellness training center site.',
            feature1: 'New visual identity (Figma), CI/CD via GitHub Actions.',
            feature2: 'Lighthouse performance score taken from 60 to 100 through bundle optimization, lazy loading, and asset compression.'
          },
          3: {
            name: "Client's Portfolio",
            alt: 'Screenshot of the website',
            description: 'End-to-end delivery for an independent client.',
            feature1: 'Full lifecycle from design to deployment.',
            feature2: 'Lighthouse scores: 97 Performance • 95 Accessibility • 100 Best Practices • 100 SEO.'
          }
        }
      },
      section2: {
        h1: "What's in\n my toolkit",
        button: "Let's build something together",
      },
    },
    blog: {
      h1: "My thinking and learning",
    },
    contacts: {
      section1: {
        h1: "Get in touch",
        gps: "Time Zone CEST (UTC+2)",
        availability: 'Open to fullstack remote and hybrid roles in Europe',
        form: {
          name: 'Name',
          object: 'Object',
          message: 'Message',
          formAnswer: "Message sent!",
          submitForm: 'Send message',
        }
      },
      section2: {
        h1: 'Connect with me'
      },     
      aria: {
        whatsapp: "Text me on Whatsapp",
        linkedin: "Visit my Linkedin profile",
        github: "Visit my GitHub profile",
      },
    }
  }
}