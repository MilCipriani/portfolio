export default {
  nav: {
    work: "Lavori",
    blog: "Blog",
    contacts: "Contatti",
    aria: {
      home: "Vai alla Home Page",
      toggleMenu: "Apri Menu"
    }
  },
  routes: {
    home: {
      hello: "Ciao,",
      IamMilena: " sono Milena",
      h2: "Sono una software developer che ama creare applicazioni che uniscono un design pulito a funzionalità solide.",
      p: "Lavorando con clienti e startup, ho capito che costruire un software efficace non significa limitarsi a scrivere codice di qualità — significa impostare sistemi affidabili, che funzionano bene e semplificano davvero la vita a utenti e sviluppatori. Mi interesso sempre di più al disegno completo, dall'interfaccia utente all'infrastruttura.",
      button: "Guarda i miei lavori",
      aria: {
        button: "Traduci in Inglese - Switch to English"
      }
    },
    work: {
      section1: {
        h1: "Ecco a cosa\n sto lavorando",
        carousel: {
          card0: {
            projectName: "Portfolio per cliente",
            description: "Soluzione portfolio completa per cliente, dal concept al deployment. Ho lavorato a stretto contatto con il cliente per progettare UI/UX in Figma che rappresentasse autenticamente la sua brand identity, ho poi sviluppato un'applicazione single-page modulare usando Vue.js, PrimeVue e TypeScript. Ho implementato pipeline CI/CD automatizzate con GitHub Actions e ottimizzato per SEO, performance e standard di accessibilità.",
          },
          card1: {
            projectName: "The Left Drawer",
            description: "Una soluzione NAS production-ready, costruita su Raspberry Pi 4. Include un’app React Native, CLI tool e una web app React per la gestione remota dei file, orchestrazione dei servizi con Docker, stack di monitoraggio (Prometheus, Grafana), backup automatici e accesso remoto sicuro via VPN. Pensata come progetto di apprendimento DevOps. Se ti sembra interessante, dai un’occhiata al README nel source code per la roadmap completa e aggiornamenti sullo sviluppo!",
          },
          card2: {
            projectName: "App containerizzata",
            description: "Applicazione web full-stack per esplorare architetture containerizzate. Frontend React, REST API Node.js/Express e database PostgreSQL. Servizi multi-container orchestrati usando Docker Compose, implementando best practices per la gestione degli ambienti di sviluppo e produzione.",
          },
          card3: {
            projectName: "Portfolio personale",
            description: "Il sito web che stai usando proprio ora! Realizzato con React, TypeScript e Tailwind CSS. Design responsivo, conformità all'accessibilità e tema dinamico (dark/light modes). Ho mantenuto le dipendenze al minimo, usando solo Keen Sliders per i caroselli. Hosting con CI/CD automatizzati tramite GitHub Actions su dominio personale.",
          },
        },
      },
      section2: {
        h1: "E con cosa lavoro",
        button: "Iniziamo a collaborare!",
      },
      aria: {
        section1: {
          carousel: "Tutti i miei progetti",
          dots: "Punti di navigazione per la visualizzazione del carosello dei progetti",
          cards: {
            demoButton: "Visualizza progetto Live"
          }
        },
        section2: {
          toolkit: "Che tools, frameworks e linguaggi uso",
          button: "Visita la pagina dei contatti"
        }
      }
    },
    blog: {
      h1: "Prossimamente...",
    },
    contacts:{
      h1: "Mi trovi qui!",
      p: "Fuso Orario CEST (UTC+2)",
      toast: {
        h2: "Ops!",
        p0: "Questo sito web è ancora in fase di sviluppo.",
        p1: "Aggiungerò presto un form di contatto, ma nel frattempo ecco la mia mail!"
      },
      aria: {
        whatsapp: "Scrivimi un messaggio su Whatsapp",
        mail: "Form di contatto in sviluppo - apri notifica",
        linkedin: "Visita il mio profilo Linkedin",
        github: "Visita il mio profilo GitHub",
        closeNotification: "Chiudi notifica"
      }
    },
    phoneMenu: {
      work: "Lavori",
      blog: "Blog",
      contacts: "Contatti",
      aria: {
        x: "Chiudi notifica",
        home: "Vai alla Home Page"
      }
    }
  }
}