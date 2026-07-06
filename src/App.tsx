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
