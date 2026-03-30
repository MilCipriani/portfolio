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
      h1: "Milena Cipriani",
      h2: "Fullstack developer",
      h3: "Da un mockup in Figma all'infrastruttura in produzione",
      p1: "Sviluppo applicazioni web end to end: dall'interfaccia utente all'infrastruttura sottostante, che progetto con un approccio security-first. Mi importa scrivere codice manutenibile, costruire sistemi affidabili e realizzare prodotti pensati per chi li usa.",
      p2: "Disponibile per ruoli fullstack da remoto o ibridi.",
      button: "Vedi i miei progetti",
      aria: {
        button: "Traduci in Inglese - Switch to English"
      }
    },
    work: {
      section1: {
        h1: "Ecco a cosa\n sto lavorando",
        selectedProject: {
          projectName: 'The Left Drawer',
          description: "Cloud privato, senza subscriptions, nessun accesso di terze parti, progettato per girare su Raspberry Pi. L'obbiettivo: renderlo piacevole da usare per chi non ha competenze tecniche.<br/>Demo live su VPS, mentre l'applicazione reale su rete ZeroTier privata.<br/><br/>⦁ <strong>Auth stratificata</strong> ➜ cookie di refresh httpOnly contro XSS, token con hash SHA-256 per evitare che una violazione del DB esponga sessioni valide, algoritmo HS256 fissato per prevenire confusion attack, cookie con path-scope su /api/auth per ridurre la superficie di trasmissione<br/>⦁ <strong>Lazy loading autenticato</strong> ➜ &lt;img src&gt; non ha header di autenticazione, quindi le anteprime vengono recuperate come blob tramite IntersectionObserver, convertite in object URL e revocate all'unmount per prevenire leak di memoria<br/>⦁ <strong>Operazioni sui file in caso di errore parziale</strong> ➜ upload, spostamenti ed eliminazioni vengono eseguiti in transazioni PostgreSQL con staging in una cartella cestino; dove la vera atomicità con il filesystem non è possibile, i fallimenti vengono loggati esplicitamente"
        },
        carousel: {
          card0: {
            projectName: "Il mio portfolio",
            description: "Costruito per dimostrare il mio attuale approccio al frontend: architettura a componenti pulita, markup accessibile, tema chiaro/scuro e localizzazione completa italiano/inglese. Dipendenze volutamente ridotte al minimo. Il design è passato per Figma prima di scrivere una sola riga di codice.",
          },
          card1: {
            projectName: "Centro di formazione wellness",
            description: "Rifatto da zero il sito di un centro di formazione per professionisti nel settore wellness: nuova identità visiva progettata in Figma, localizzazione completa italiano/spagnolo con cambio lingua istantaneo, e punteggio Lighthouse portato da 60 a 100 tramite ottimizzazione dei bundle, lazy loading e compressione degli asset.",
          },
          card2: {
            projectName: "Portfolio di un cliente",
            description: "Consegna end-to-end per un primo cliente indipendente: UI/UX progettata in Figma per rispecchiare il suo brand, sviluppata come single-page application in Vue.js e TypeScript, distribuita con CI/CD automatizzato.\nPunteggi Lighthouse: 97 Performance • 95 Accessibilità • 100 Best Practices • 100 SEO.",
          },
          card3: {
            projectName: "App di containerizzazione",
            description: "Uno dei primi progetti full-stack: React, Node/Express, PostgreSQL, orchestrato con Docker Compose tra ambienti di sviluppo e produzione. Incluso per mostrare il punto di partenza. The Left Drawer è ciò che è venuto dopo.",
          },
        },
      },
      section2: {
        h1: "E con cosa lavoro",
        button: "Iniziamo a collaborare",
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
      availability: 'Disponibile per ruoli fullstack da remoto o ibridi',
      submitForm: 'Invia',
      aria: {
        whatsapp: "Scrivimi un messaggio su Whatsapp",
        linkedin: "Visita il mio profilo Linkedin",
        github: "Visita il mio profilo GitHub",
      },
      formAnswer: "Messaggio inviato!",
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