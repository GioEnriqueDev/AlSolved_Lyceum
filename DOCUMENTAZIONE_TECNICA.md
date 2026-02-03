# Documentazione Tecnica - Lyceum Web Platform

## 1. Panoramica del Progetto
Questa piattaforma è stata sviluppata come **Dimostrazione Visuale ad Alto Impatto (MVP)** per il centro medico "Lyceum".
L'obiettivo attuale è mostrare al cliente l'esperienza utente finale (UX), il design premium e il flusso di prenotazione innovativo, senza ancora implementare la logica di backend complessa (database, autenticazione, ecc.).

Il design segue una filosofia **"Medical Premium"**, utilizzando toni scuri profondi (`Slate-950`), effetti vetro (Glassmorphism) e animazioni 3D/cinematiche per trasmettere eccellenza tecnologica e cura del dettaglio.

---

## 2. Stack Tecnologico Attuale

Il progetto è costruito su tecnologie moderne e performanti, ottimizzate per il SEO e la velocità di caricamento:

qul*   **Framework Core:** [Next.js 15](https://nextjs.org/) (React 19) con TypeScript.
*   **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) per il layout e sistema di design custom (colori medici, gradienti).
*   **Animazioni UI:** [Framer Motion](https://www.framer.com/motion/) per transizioni, entrate (FadeIn) e il Wizard di prenotazione.
*   **Grafica 3D:** [React Three Fiber](https://docs.pmndrs.assets/react-three-fiber) + [Drei](https://github.com/pmndrs/drei) per lo sfondo particellare (DNA/Stelle).
*   **Gestione Date:** `date-fns` e `react-day-picker` per il calendario interattivo.
*   **Icone:** `lucide-react`.
*   **Hosting Demo:** GitHub Pages (Modalità Static Export).

---

## 3. Architettura Frontend (Stato Attuale)

### Componenti Chiave
1.  **Cinematic Hero (`Hero.tsx`)**:
    *   Include un background 3D interattivo (`Scene3D.tsx`) ottimizzato per non pesare sulla CPU.
    *   Implementa un logo "Cinematic" (`CinematicLogo.tsx`) che usa tecniche di mascheramento o immagini trasparenti per fondersi col background.
2.  **Booking Wizard Visuale (`BookingWizard.tsx`)**:
    *   Sostituisce i classici form noiosi con un'esperienza a step (Gamification).
    *   **Step 1**: Selezione visiva del servizio.
    *   **Step 2**: Calendario reale interattivo + Griglia oraria (con logica mock per simulare slot occupati).
    *   **Step 3**: Conferma e reindirizzamento su WhatsApp pre-compilato.
3.  **Services Showcase (`ServicesShowcase.tsx`)**:
    *   Griglia Bento/Card con effetti "Spotlight" al passaggio del mouse per evidenziare i servizi.

### Design System
*   **Palette Colori**:
    *   Background: `#020617` (Slate 950 - "Deepest Space")
    *   Primary: `#7c3aed` (Violet - "Medical Tech")
    *   Secondary: `#14b8a6` (Teal - "Sanitary Clean")
*   **Typography**: Inter (Google Fonts) per massima leggibilità su schermi moderni.

---

## 4. Analisi GAP: Cosa manca per la Produzione (Post-Vendita)

Se il cliente decide di procedere con l'acquisto, il software dovrà evolvere da "Demo Visiva" a "Prodotto Funzionante".

### A. Backend & Database (Priorità Alta)
Attualmente i dati sono "mockati" (finti). Serve implementare:
*   **Database**: PostgreSQL o Supabase per salvare:
    *   Anagrafica Pazienti.
    *   Appuntamenti Reali.
    *   Servizi e Durate.
*   **API Layer**: Creazione di endpoint (Next.js API Routes) per leggere/scrivere sul DB in sicurezza.

### B. Dashboard Amministrativa (Admin Panel)
Manca l'interfaccia per lo staff medico/segreteria:
*   **Visualizzazione Calendario Completo**: Vista settimanale/mensile di tutti gli appuntamenti.
*   **Gestione Slot**: Possibilità di bloccare giorni (ferie, chiusure) o orari specifici.
*   **Accettazione/Rifiuto**: Quando arriva una richiesta (via app o whatsapp), l'admin deve confermarla per occupare lo slot definitivamente.

### C. Autenticazione (Auth)
*   Login sicuro per gli amministratori (Lyceum Staff).
*   (Opzionale) Area riservata pazienti per vedere lo storico visite.

### D. Integrazioni Avanzate
*   **WhatsApp Business API**: Invece di aprire l'app di WhatsApp dell'utente, il server potrebbe mandare messaggi automatici di conferma/reminder (richiede costi extra Meta).
*   **Email Transazionali**: Invio recap appuntamento via email (es. Resend o SendGrid).

---

## 5. Piano di Sviluppo Suggerito (Roadmap)

Se il progetto viene approvato, ecco come gestiremo lo sviluppo in 4 fasi (Sprint):

### Fase 1: Setup Backend (1-2 Settimane)
*   Configurazione Database (Supabase).
*   Creazione schemi dati (Utenti, Prenotazioni, Servizi).
*   Sostituzione dei dati "finti" nel calendario con chiamate API reali.

### Fase 2: Admin Dashboard (2 Settimane)
*   Sviluppo area riservata `/admin`.
*   Vista "Agenda del Dottore" (Drag & drop appuntamenti).
*   Pannello impostazioni orari lavorativi.

### Fase 3: Testing & Security (1 Settimana)
*   Test di carico (più utenti che prenotano insieme).
*   Protezione dati sensibili (GDPR Compliance base).

### Fase 4: Deploy Produzione
*   Spostamento da GitHub Pages a Vercel (o VPS dedicato) per supportare il Backend (Node.js).
*   Collegamento dominio finale `lyceumfisioterapia.it`.

---

**Autore Tec**: Giovanni Polimeni (GioEnriqueDev)
**Data**: Febbraio 2026
