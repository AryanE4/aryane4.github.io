# Section Transitions — Portfolio Section System

## Architecture

| Layer | Choice |
|-------|--------|
| Animation | Framer Motion `AnimatePresence mode="wait"` |
| State | Single `section` string in App (`null` = menu) |
| Styling | CSS Modules per component |

## Component Tree

```
App
  section: null | "PROJECTS" | "NOW" | "HACKATHONS" | "CONTACT"
  └── AnimatePresence mode="wait"
       ├── MainMenu  (when section === null)
       │     onSelect → set section
       └── motion.div (key=section, variants=fadeScale)
            └── SectionWrapper
                  ├── "MENU" label (top-right, Bungee, hot pink, onClick → set null)
                  └── <Section> (ProjectsSection | NowSection | ...)
```

## Data Flow

1. App starts with `section = null` → renders `<MainMenu />`
2. User clicks menu item → `onSelect("PROJECTS")` → `section = "PROJECTS"`
3. `AnimatePresence` exits `<MainMenu />` (250ms), enters section (150ms)
4. Section shows `SectionWrapper` with the relevant section component
5. User clicks "MENU" label → `section = null`, transition back

## Transition Variants

```ts
const variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.25 } },
}
```

- Total: ~400ms (exit 250ms + enter 150ms)

## SectionWrapper

- Full viewport black (`#0a0a0a`) background, scrollable
- "MENU" label: `position: fixed`, top-right, Bungee font, hot pink `#ff2e93`, clickable
- Section title: Bungee, hot pink
- Body text: system sans-serif, white/light gray
- Accents/links: hot pink or green `#00c853`

## Section Components

Each is a simple placeholder:

```
ProjectsSection   — "PROJECTS" title, placeholder description
NowSection        — "NOW" title, placeholder description
HackathonsSection — "HACKATHONS" title, placeholder description
ContactSection    — "CONTACT" title, placeholder description
```

All render inside `SectionWrapper` children slot.

## Files

| Action | File |
|--------|------|
| Install | `framer-motion` |
| Modify | `src/App.tsx` |
| Create | `src/components/Sections/SectionWrapper.tsx` |
| Create | `src/components/Sections/SectionWrapper.module.css` |
| Create | `src/components/Sections/ProjectsSection.tsx` |
| Create | `src/components/Sections/NowSection.tsx` |
| Create | `src/components/Sections/HackathonsSection.tsx` |
| Create | `src/components/Sections/ContactSection.tsx` |
