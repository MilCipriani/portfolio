# Personal Portfolio

My portfolio as both a professional showcase and a learning space — somewhere to experiment 
with techniques I care about while keeping the code production-quality.

## Tech Stack

`React` `TypeScript` `TailwindCSS` `Keen Slider` `GitHub Actions` `GitHub Pages` `Figma`

## Why I built this

Wanted a space that reflects how I actually approach frontend work, and a window for my projects.
The design went through Figma. Dependencies are intentionally minimal —
Keen Slider is the only non-trivial addition, chosen for its lightweight footprint and no-dependency policy.

## Features

### Accessibility
Full keyboard navigation, screen reader support via semantic HTML and ARIA, WCAG-compliant color
contrast, and zoom support.

### Performance
Preloading of key resources, and an optimized build with minimal runtime
overhead. Lighthouse audits guided improvements across key routes, focusing on image optimization,
resource loading, and layout stability.

### Theme system
Light/dark mode toggle that respects the system preference, persists the choice in localStorage,
and transitions smoothly between states.

### Localization
Full Italian/English support.

## Development
```bash
npm start        # Start development server
npm run build    # Create production build
npm run preview  # Preview production build
```

## Roadmap

- [ ] Blog section for writing about projects and challenges