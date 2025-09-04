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
      hello: "Hello,",
      IamMilena: " I'm Milena",
      h2: "I'm a software developer who enjoys creating applications that combine clean design with robust functionality.",
      p: "Through client work and startup collaborations, I've learned that effective software extends beyond writing good code — it's about building systems that are reliable, perform well, and genuinely make life easier for both users and developers. I find myself drawn to understanding the full picture, from user interface to infrastructure.",
      button: "Check my works",
      aria: {
        button: "Switch to Italian - Traduci in Italiano"
      }
    },
    work: {
      section1: {
        h1: "Here's what I've\n been up to",
        carousel: {
          card0: {
            projectName: "Client's portfolio",
            description: "Complete client portfolio solution from concept to deployment. Collaborated closely with the client to design UI/UX in Figma that authentically represented their brand identity, then built a scalable single-page application using Vue.js, PrimeVue, and TypeScript. Implemented automated CI/CD pipelines with GitHub Actions and optimized for SEO, performance, and accessibility standards.",
          },
          card1: {
            projectName: "The Left Drawer",
            description: "Currently in development - A comprehensive NAS solution, using a Raspberry Pi 4 and Alpine Linux. Ionic React mobile app for remote file management. Implementing Docker orchestration, monitoring stack (Grafana/Prometheus), automated backups, and security measures including VPN access. If this sounds interesting, check the README in the source code for the complete roadmap and progress updates!",
          },
          card2: {
            projectName: "Containerization App",
            description: "Full-stack web application to explore containerized architecture. React frontend, Node.js/Express REST API and PostgreSQL database. Multi-container services orchestrated using Docker Compose, implementing best practices for development and production environment management.",
          },
          card3: {
            projectName: "My personal portfolio",
            description: "The website you're using right now! Crafted with React, TypeScript, and Tailwind CSS. Responsive design, accessibility compliance, and dynamic theming (light/dark modes). Kept dependencies minimal, using only Keen Sliders for carousels. Deployed with automated CI/CD through GitHub Actions to my custom domain.",
          },
        },
      },
      section2: {
        h1: "What's in\n my toolkit",
        button: "Let's build something together!",
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
      h1: "Let's chat!",
      p: "Time Zone CEST (UTC+2)",
      toast: {
        h2: "Whoops!",
        p0: "This website is still in development.",
        p1: "I will add a contact form soon, but until then here's my mail!"
      },
      aria: {
        whatsapp: "Text me on Whatsapp",
        mail: "Mail form in development - open notification",
        linkedin: "Visit my Linkedin profile",
        github: "Visit my GitHub profile",
        closeNotification: "Close notification"
      }
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