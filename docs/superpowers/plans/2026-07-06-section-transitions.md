# Section Transitions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Framer Motion–powered page transitions between MainMenu and 4 portfolio sections.

**Architecture:** `AnimatePresence mode="wait"` in App.tsx swaps between MainMenu and section components with fade+scale animation (~400ms total). Each section wraps in a shared `SectionWrapper` that provides consistent black background and "MENU" return label.

**Tech Stack:** Framer Motion, React, CSS Modules

## Global Constraints

- Transition: exit 250ms (`opacity 0`, `scale 0.95`), enter 150ms (`opacity 1`, `scale 1`)
- Section "MENU" label: top-right, Bungee font, hot pink `#ff2e93`, clickable → back to MainMenu
- Section backgrounds: `#0a0a0a`
- Section body text: system sans-serif font stack, readable size
- Placeholder content only for sections

---

### Task 1: Install framer-motion + Create Section Components

**Files:**
- Install: `framer-motion`
- Create: `src/components/Sections/SectionWrapper.tsx`
- Create: `src/components/Sections/SectionWrapper.module.css`
- Create: `src/components/Sections/ProjectsSection.tsx`
- Create: `src/components/Sections/NowSection.tsx`
- Create: `src/components/Sections/HackathonsSection.tsx`
- Create: `src/components/Sections/ContactSection.tsx`

**Interfaces:**
- Produces: `SectionWrapper` (wraps children with black bg + "MENU" label), 4 section components (skeleton placeholders)

- [ ] **Step 1: Install framer-motion**

Run: `npm install framer-motion`

- [ ] **Step 2: Create SectionWrapper.module.css**

`src/components/Sections/SectionWrapper.module.css`:
```css
.wrapper {
  width: 100vw;
  min-height: 100vh;
  background: #0a0a0a;
  padding: 80px 48px 48px;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #e0e0e0;
  line-height: 1.6;
  overflow-y: auto;
}

.menuLabel {
  position: fixed;
  top: 32px;
  right: 32px;
  font-family: 'Bungee', sans-serif;
  font-size: 1.5rem;
  color: #ff2e93;
  text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.7);
  cursor: pointer;
  z-index: 20;
  transition: opacity 150ms ease;
  user-select: none;
}

.menuLabel:hover {
  opacity: 0.7;
}

.title {
  font-family: 'Bungee', sans-serif;
  font-size: 2.5rem;
  color: #ff2e93;
  margin-bottom: 24px;
}

.body {
  font-size: 1.125rem;
  max-width: 640px;
}

@media (max-width: 768px) {
  .wrapper {
    padding: 72px 20px 32px;
  }

  .menuLabel {
    top: 20px;
    right: 20px;
    font-size: 1.2rem;
  }

  .title {
    font-size: 1.8rem;
  }

  .body {
    font-size: 1rem;
  }
}
```

- [ ] **Step 3: Create SectionWrapper.tsx**

`src/components/Sections/SectionWrapper.tsx`:
```tsx
import { type ReactNode } from 'react'
import styles from './SectionWrapper.module.css'

interface SectionWrapperProps {
  title: string
  children: ReactNode
  onBack: () => void
}

function SectionWrapper({ title, children, onBack }: SectionWrapperProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.menuLabel} onClick={onBack}>
        MENU
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.body}>{children}</div>
    </div>
  )
}

export default SectionWrapper
```

- [ ] **Step 4: Create ProjectsSection.tsx**

`src/components/Sections/ProjectsSection.tsx`:
```tsx
import SectionWrapper from './SectionWrapper'

interface ProjectsSectionProps {
  onBack: () => void
}

function ProjectsSection({ onBack }: ProjectsSectionProps) {
  return (
    <SectionWrapper title="PROJECTS" onBack={onBack}>
      <p>Projects placeholder — details coming soon.</p>
    </SectionWrapper>
  )
}

export default ProjectsSection
```

- [ ] **Step 5: Create NowSection.tsx**

`src/components/Sections/NowSection.tsx`:
```tsx
import SectionWrapper from './SectionWrapper'

interface NowSectionProps {
  onBack: () => void
}

function NowSection({ onBack }: NowSectionProps) {
  return (
    <SectionWrapper title="NOW" onBack={onBack}>
      <p>Now placeholder — what I'm currently working on.</p>
    </SectionWrapper>
  )
}

export default NowSection
```

- [ ] **Step 6: Create HackathonsSection.tsx**

`src/components/Sections/HackathonsSection.tsx`:
```tsx
import SectionWrapper from './SectionWrapper'

interface HackathonsSectionProps {
  onBack: () => void
}

function HackathonsSection({ onBack }: HackathonsSectionProps) {
  return (
    <SectionWrapper title="HACKATHONS" onBack={onBack}>
      <p>Hackathons placeholder — past and upcoming events.</p>
    </SectionWrapper>
  )
}

export default HackathonsSection
```

- [ ] **Step 7: Create ContactSection.tsx**

`src/components/Sections/ContactSection.tsx`:
```tsx
import SectionWrapper from './SectionWrapper'

interface ContactSectionProps {
  onBack: () => void
}

function ContactSection({ onBack }: ContactSectionProps) {
  return (
    <SectionWrapper title="CONTACT" onBack={onBack}>
      <p>Contact placeholder — ways to reach me.</p>
    </SectionWrapper>
  )
}

export default ContactSection
```

- [ ] **Step 8: Verify build**

Run: `npm run build`
Expected: exits 0

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: add SectionWrapper and placeholder section components"
```

---

### Task 2: Update App.tsx with AnimatePresence Transitions

**Files:**
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `MainMenu` (with `onSelect`), section components (each with `onBack`), `AnimatePresence` + `motion` from framer-motion

- [ ] **Step 1: Update App.tsx**

```tsx
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import MainMenu from './components/MainMenu/MainMenu'
import ProjectsSection from './components/Sections/ProjectsSection'
import NowSection from './components/Sections/NowSection'
import HackathonsSection from './components/Sections/HackathonsSection'
import ContactSection from './components/Sections/ContactSection'

const variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.25 } },
}

function App() {
  const [section, setSection] = useState<string | null>(null)

  return (
    <AnimatePresence mode="wait">
      {section === null ? (
        <motion.div
          key="menu"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ width: '100%', height: '100%' }}
        >
          <MainMenu onSelect={setSection} />
        </motion.div>
      ) : (
        <motion.div
          key={section}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ width: '100%', height: '100%' }}
        >
          {section === 'PROJECTS' && <ProjectsSection onBack={() => setSection(null)} />}
          {section === 'NOW' && <NowSection onBack={() => setSection(null)} />}
          {section === 'HACKATHONS' && <HackathonsSection onBack={() => setSection(null)} />}
          {section === 'CONTACT' && <ContactSection onBack={() => setSection(null)} />}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: exits 0

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add AnimatePresence section transitions to App"
```
