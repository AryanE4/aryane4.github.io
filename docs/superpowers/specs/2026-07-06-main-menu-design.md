# MainMenu Component — GTA Vice City Portfolio Homepage

## Architecture

| Layer | Choice |
|-------|--------|
| Framework | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | CSS Modules |
| Deployment | GitHub Actions → gh-pages branch |
| Hosting | GitHub Pages (user site: aryane4.github.io) |

## Component: MainMenu

A single self-contained component rendering a full-viewport GTA Vice City–style menu screen.

### Props

```ts
interface MainMenuProps {
  onSelect: (section: string) => void;
}
```

### Layout

- **Background:** `#0a0a0a`, full viewport (`100vw x 100vh`)
- **Top-left:** User's name in Pacifico (Google Font), `#ff2e93`, `text-shadow` white outline
- **Top-right:** "MENU" in Bungee (Google Font), `#ff2e93`, drop-shadow offset
- **Center:** Trapezoid panel via `clip-path: polygon(5% 0, 95% 0, 100% 100%, 0 100%)` with SVG `feTurbulence` noise filter as a CSS `background` data URI, animated via `@keyframes` shifting the background position
- **Menu items:** PROJECTS, NOW, HACKATHONS, CONTACT — vertically centered on trapezoid, Bungee font, `#ff2e93`
- **Hover:** `#00c853` box slides behind item via `::before` pseudo-element with `transform: scaleX(0)` → `scaleX(1)`, `transition: transform 150ms ease`
- **Click:** calls `onSelect(section)`

### Responsive

- `@media (max-width: 768px)`: trapezoid panel flattens (reduced skew), menu items stack larger and centered

## Project Structure

```
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
├── public/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── components/
│   │   └── MainMenu/
│   │       ├── MainMenu.tsx
│   │       └── MainMenu.module.css
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md
```

## Deployment

- **vite.config.ts:** `base: '/'` (user page at root)
- **Action:** `peaceiris/actions-gh-pages@v4` — builds on push to `main`, deploys `dist/` to `gh-pages` branch
- **README note:** User must go to Settings > Pages > set source to `gh-pages` branch
