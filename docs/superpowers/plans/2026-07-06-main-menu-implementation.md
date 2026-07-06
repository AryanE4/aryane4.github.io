# MainMenu Component Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold a Vite + React + TypeScript project with a GTA Vice City–style MainMenu component and deploy to GitHub Pages.

**Architecture:** Single-page React app with CSS Modules, deployed via GitHub Actions to the `gh-pages` branch.

**Tech Stack:** Vite 6, React 19, TypeScript, CSS Modules, peaceiris/actions-gh-pages

## Global Constraints

- `vite.config.ts` must set `base: '/'` (user page at root)
- Deploy target: `gh-pages` branch via GitHub Actions
- Google Fonts: Pacifico (cursive), Bungee (stencil)
- No extra dependencies beyond React + TypeScript

---

### Task 1: Scaffold Vite + React + TypeScript Project

**Files:**
- Modify: `index.html`
- Create: `package.json`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `vite.config.ts`, `src/main.tsx`, `src/App.tsx`, `src/App.css`, `src/vite-env.d.ts`

**Interfaces:**
- Produces: A working Vite dev server with React + TypeScript

- [ ] **Step 1: Initialize project**

Run: `npm create vite@latest . -- --template react-ts` in the repo root.

Since the directory already has files, use `--force` or manually scaffold. Create `package.json`:

```json
{
  "name": "aryane4.github.io",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.4.0",
    "typescript": "~5.7.0",
    "vite": "^6.0.0"
  }
}
```

- [ ] **Step 2: Create vite.config.ts**

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
})
```

- [ ] **Step 3: Create tsconfig files**

`tsconfig.json`:
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

`tsconfig.app.json`:
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```

`tsconfig.node.json`:
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
```

- [ ] **Step 4: Create index.html**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Pacifico&display=swap" rel="stylesheet" />
    <title>Aryan E4</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Create src/vite-env.d.ts**

```ts
/// <reference types="vite/client" />
```

- [ ] **Step 6: Create src/main.tsx**

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 7: Create src/App.css**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
```

- [ ] **Step 8: Create src/App.tsx**

```tsx
function App() {
  return <div>Loading...</div>
}

export default App
```

- [ ] **Step 9: Install dependencies**

Run: `npm install`

- [ ] **Step 10: Verify build works**

Run: `npm run build`
Expected: exits 0, `dist/` folder produced

---

### Task 2: Create MainMenu Component

**Files:**
- Create: `src/components/MainMenu/MainMenu.tsx`
- Create: `src/components/MainMenu/MainMenu.module.css`

**Interfaces:**
- Consumes: `MainMenuProps { onSelect: (section: string) => void }`
- Produces: `MainMenu` component

- [ ] **Step 1: Create MainMenu.module.css**

```css
.container {
  width: 100vw;
  height: 100vh;
  background: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-family: 'Bungee', sans-serif;
}

.name {
  position: absolute;
  top: 32px;
  left: 32px;
  font-family: 'Pacifico', cursive;
  font-size: 2rem;
  color: #ff2e93;
  text-shadow:
    -1px -1px 0 #fff,
     1px -1px 0 #fff,
    -1px  1px 0 #fff,
     1px  1px 0 #fff;
  z-index: 10;
}

.menuLabel {
  position: absolute;
  top: 32px;
  right: 32px;
  font-size: 1.5rem;
  color: #ff2e93;
  text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.7);
  z-index: 10;
}

.trapezoid {
  width: 80%;
  max-width: 700px;
  height: 70vh;
  max-height: 500px;
  clip-path: polygon(5% 0, 95% 0, 100% 100%, 0 100%);
  background: #141414;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  overflow: hidden;
}

.trapezoid::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  pointer-events: none;
  animation: noiseShift 8s linear infinite;
}

@keyframes noiseShift {
  0% { background-position: 0 0; }
  100% { background-position: 200px 200px; }
}

.menuItem {
  position: relative;
  font-size: 2.5rem;
  color: #ff2e93;
  padding: 12px 48px;
  cursor: pointer;
  z-index: 1;
  transition: color 150ms ease;
  user-select: none;
}

.menuItem::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #00c853;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 150ms ease;
  z-index: -1;
}

.menuItem:hover {
  color: #fff;
}

.menuItem:hover::before {
  transform: scaleX(1);
}

@media (max-width: 768px) {
  .name {
    top: 20px;
    left: 20px;
    font-size: 1.5rem;
  }

  .menuLabel {
    top: 20px;
    right: 20px;
    font-size: 1.2rem;
  }

  .trapezoid {
    width: 90%;
    height: 60vh;
    clip-path: polygon(2% 0, 98% 0, 100% 100%, 0 100%);
  }

  .menuItem {
    font-size: 1.8rem;
    padding: 10px 32px;
  }
}
```

- [ ] **Step 2: Create MainMenu.tsx**

```tsx
interface MainMenuProps {
  onSelect: (section: string) => void
}

const ITEMS = ['PROJECTS', 'NOW', 'HACKATHONS', 'CONTACT']

function MainMenu({ onSelect }: MainMenuProps) {
  return (
    <div className="container">
      <div className="name">Aryan E4</div>
      <div className="menuLabel">MENU</div>
      <div className="trapezoid">
        {ITEMS.map((item) => (
          <div
            key={item}
            className="menuItem"
            onClick={() => onSelect(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainMenu
```

Wait, this uses plain class names, not CSS Modules. Let me fix to use CSS Modules properly:

```tsx
import styles from './MainMenu.module.css'

interface MainMenuProps {
  onSelect: (section: string) => void
}

const ITEMS = ['PROJECTS', 'NOW', 'HACKATHONS', 'CONTACT']

function MainMenu({ onSelect }: MainMenuProps) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>Aryan E4</div>
      <div className={styles.menuLabel}>MENU</div>
      <div className={styles.trapezoid}>
        {ITEMS.map((item) => (
          <div
            key={item}
            className={styles.menuItem}
            onClick={() => onSelect(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainMenu
```

- [ ] **Step 3: Update src/App.tsx to use MainMenu**

```tsx
import MainMenu from './components/MainMenu/MainMenu'

function App() {
  const handleSelect = (section: string) => {
    console.log('Selected section:', section)
  }

  return <MainMenu onSelect={handleSelect} />
}

export default App
```

- [ ] **Step 4: Verify build works**

Run: `npm run build`
Expected: exits 0

---

### Task 3: GitHub Actions Deploy Workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create deploy.yml**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

- [ ] **Step 2: Update README.md**

Write instructions for enabling Pages.

- [ ] **Step 3: Verify workflow is valid**

Run: `npm run build` — confirm still works.
