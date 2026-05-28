export default {
  nav: {
    home: "Home",
    work: "Lavori",
    blog: "Blog",
    contacts: "Contatti"
  },
  routes: {
    home: {
      h1: "Milena Cipriani",
      h2: "Fullstack developer",
      p: "Da un mockup in Figma all'infrastruttura in produzione",
      p1: "Sviluppo applicazioni web end to end: dall'interfaccia utente all'infrastruttura sottostante, che progetto con un approccio security-first. Mi importa scrivere codice manutenibile, costruire sistemi affidabili e realizzare prodotti pensati per chi li usa.",
      p2: "Disponibile per ruoli frontend o fullstack da remoto o ibridi.",
      button: "Vedi i miei lavori",
      contactMe: "o contattami"
    },
    work: {
      section1: {
        h1: "Ecco a cosa\n sto lavorando",
        works: {
          0: {
            name: 'Soluzione storage cloud self-hosted',
            description: 'Costruito per girare su Raspberry Pi per una userbase non tecnica, tenuto privato dietro ad una rete ZeroTier. Demo disponibile, hostata su VPS.',
            feature1: 'Auth stratificata, loading di immagini con autenticazione, rollback al fallimento delle operazioni su file.',
            feature2: 'Credenziali Demo:\n User: Demo | Password: DemoPw123'
          },
          1: {
            name: 'Portfolio Personale',
            description: 'Costruito per rispecchiare il mio attuale approccio al frontend.',
            feature1: 'Architettura componenti pulita, markup accessibile, tema chiaro/scuro, completa localizzazione Italiano/Inglese. Dipendenze intenzionalmente minime.',
            feature2: 'Design ideato in Figma prima di una singola linea di codice.'
          },
          2: {
            name: 'Sito per Centro di Formazione',
            description: 'Migrazione e ricostruzione del sito di un Centro di Formazione nel settore Wellness.',
            feature1: 'Nuova identità visiva (Figma), CI/CD via GitHub Actions.',
            feature2: 'Punteggio performance Lighthouse aumentato da 60 a 100 attraverso ottimizzazione bundle, lazy loading, e compressione assets.'
          },
          3: {
            name: "Portfolio per cliente",
            description: 'Consegna end-to-end per cliente indipendente.',
            feature1: 'Ciclo completo dal design al deployment.',
            feature2: 'Punteggi Lighthouse: 97 Performance • 95 Accessibility • 100 Best Practices • 100 SEO.'
          }
        }
      },
      section2: {
        h1: "E con cosa lavoro",
        button: "Iniziamo a collaborare",
      },
    },
    blog: {
      h1: "Prossimamente...",
    },
    contacts:{
      section1: {
        h1: "Mi trovi qui",
        gps: "Fuso Orario CEST (UTC+2)",
        availability: 'Disponibile per ruoli fullstack da remoto o ibridi',
        form: {
          name: 'Nome',
          object: 'Oggetto',
          message: 'Messaggio',
          formAnswer: "Messaggio inviato",
          submitForm: 'Invia messaggio',
        }
      },
      section2: {
        h1: 'Colleghiamoci'
      },
      aria: {
        whatsapp: "Scrivimi un messaggio su Whatsapp",
        linkedin: "Visita il mio profilo Linkedin",
        github: "Visita il mio profilo GitHub",
      },
    }
  }
}