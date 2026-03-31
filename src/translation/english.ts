export default {
  nav: {
    work: "Work",
    blog: "Blog",
    contacts: "Contacts",
    aria: {
      home: "Go to Home Page",
      toggleMenu: "Toggle Menu"
    }
  },
  routes: {
    home: {
      h1: "Milena Cipriani",
      h2: "Fullstack developer",
      h3: "From a Figma mockup to production infrastructure",
      p1: "I build web applications end to end: from UI to the infrastructure running underneath, which I design security-first. I care about code that's maintainable, systems that are reliable, and products that are tailored to their users. ",
      p2: "Open to remote and hybrid fullstack roles in Europe.",
      button: "See my work",
      aria: {
        button: "Switch to Italian - Traduci in Italiano"
      }
    },
    work: {
      section1: {
        h1: "Here's what I've\n been building",
        selectedProject: {
          projectName: "The Left Drawer",
          description: "Private cloud, no subscriptions, no third-party access, built to run on a Raspberry Pi. The focus: making it pleasant to use for non-technical users.<br/>Live demo on a VPS, while the real application runs behind a private ZeroTier network.<br/><br/>⦁ <strong>Layered auth</strong> ➜ httpOnly refresh cookies against XSS, SHA-256 hashed tokens so a DB breach doesn't expose valid sessions, HS256 algorithm pinned to prevent confusion attacks, cookie path-scoped to /api/auth to minimize transmission surface<br/>⦁ <strong>Authenticated lazy loading</strong> ➜ &lt;img src&gt; can't carry auth headers, so thumbnails are fetched as blobs via IntersectionObserver, converted to object URLs, and revoked on unmount to prevent memory leaks<br/>⦁ <strong>File operations under partial failure</strong> ➜ uploads, moves, and deletes run in PostgreSQL transactions with trash-folder staging; where true atomicity with the filesystem isn't possible, failures are logged explicitly",
        },
        carousel: {
          card0: {
            projectName: "My personal portfolio",
            description: "Built to reflect how I currently approach frontend work: clean component architecture, accessible markup, dark/light theming, and full Italian/English localization. Intentionally kept dependencies minimal. The design went through Figma before a single line of code.",
          },
          card1: {
            projectName: "Training Center Website",
            description: "Rebuilt a wellness training center's web presence from the ground up: new visual identity designed in Figma, full Italian/Spanish localization with instant language switching, and a Lighthouse performance score taken from 60 to 100 through bundle optimization, lazy loading, and asset compression.",
          },
          card2: {
            projectName: "Client's portfolio",
            description: "End-to-end delivery for a first independent client: UI/UX designed in Figma to match their brand, built as a single-page application in Vue.js and TypeScript, deployed with automated CI/CD.\nLighthouse scores: 97 Performance • 95 Accessibility • 100 Best Practices • 100 SEO.",
          },
          card3: {
            projectName: "Containerization App",
            description: "An early full-stack project: React, Node/Express, PostgreSQL, orchestrated with Docker Compose across dev and prod environments. Included mostly to show the baseline. The Left Drawer is what came after.",
          },
        },
      },
      section2: {
        h1: "What's in\n my toolkit",
        button: "Let's build something together",
      },
      aria: {
        section1: {
          carousel: "All my projects",
          dots: "Navigation dots for project's carousel display",
          cards: {
            demoButton: "View Live project"
          }
        },
        section2: {
          toolkit: "What tools, frameworks and languages I can use",
          button: "Go to the contact page to get in touch"
        }
      }
    },
    blog: {
      h1: "Coming soon ...",
    },
    contacts: {
      h1: "Get in touch",
      p: "Time Zone CEST (UTC+2)",
      availability: 'Open to fullstack remote and hybrid roles in Europe',
      name: 'Name',
      object: 'Object',
      message: 'Message',
      submitForm: 'Submit',
      aria: {
        whatsapp: "Text me on Whatsapp",
        linkedin: "Visit my Linkedin profile",
        github: "Visit my GitHub profile",
      },
      formAnswer: "Message sent!",
    },
    phoneMenu: {
      work: "Work",
      blog: "Blog",
      contacts: "Contacts",
      aria: {
        x: "Close notification",
        home: "Go to Home Page"
      }
    }
  }
}