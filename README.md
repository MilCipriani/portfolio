# Personal Portfolio

My portfolio as both a professional showcase and a learning space.

## Tech Stack

`React` `TypeScript` `TailwindCSS` `GitHub Actions` `Figma`

## Why I built this

I wanted a space that reflects how I currently approach frontend work, and a window for my projects.
The design went through Figma. Blog articles are all .md files I can take directly from my Obsidian vault.

## Features

### Accessibility
Full keyboard navigation, screen reader support via semantic HTML and ARIA, and zoom support.
Lighthouse accessibility score is between 95 and 100 across all routes.
Contrast on de-emphasized secondary text is intentionally lower than WCAG minimums, to preserve visual hierarchy against primary content.

### Performance
Preloading of key resources, and an optimized build with minimal runtime
overhead. Lighthouse audits guided improvements across key routes, focusing on image optimization,
resource loading, and layout stability.

### Theme system
Light/dark mode toggle that respects the system preference, persists the choice in localStorage,
and transitions smoothly between states. This is a React Context, the re-renders are hidden by animations to make it look smooth.
LocalStorage because Cookies are sent with every request by default. A theme preference is pure client-side
state the server never needs, and unlike auth it has no security surface to worry about.

### Localization
Full Italian/English support. Custom i18n hook with nested translation keys type-checked against a TranslationKey type, so a typo fails at compile time rather than at render. Language state lives in module scope with a manual set of listeners.

### Blog section
I write about things that interest me, that I find particularly useful, or to document technical challenges and decisions to keep track of my own progress.
Notes start in my Obsidian vault, get connected and expanded, then written up as .md files using a custom template I built for consistent structure. `react-markdown` renders them directly as components in the site.

## Development
```bash
npm run dev      #Start dev server
npm run build    #Create prod build
npx serve dist   #Preview prod build
npm run prod     #Check prod build locally (including GitHub workflow's operations)

```

## Roadmap

- [x] Blog section for writing about projects and challenges
- [ ] Adding an overlay so users can easily open and zoom into blog images