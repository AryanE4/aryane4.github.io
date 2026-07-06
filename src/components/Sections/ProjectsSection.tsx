import SectionWrapper from './SectionWrapper'
import styles from './ProjectsSection.module.css'

interface Project {
  title: string
  problem: string
  built: string
  challenge: string
}

interface ProjectsSectionProps {
  onBack: () => void
}

const projects: Project[] = [
  {
    title: 'wordconnect',
    problem: 'How do you keep multiple players in a web-based word game synchronized without visible lag or state corruption?',
    built: 'Multiplayer word game built with React, Vite, and Supabase featuring campaign, race, and co-op modes with real-time game state management.',
    challenge: 'Real-time sync and stale-closure bugs in multiplayer state — ensuring all players see the same board state and resolving race conditions when multiple moves arrive simultaneously.',
  },
  {
    title: 'MedFlow',
    problem: 'A hospital\'s patient intake process is paper-based and slow — how do you digitize it in 36 hours?',
    built: 'Hospital management system built during a 36-hour hackathon using Node.js, Express, and MongoDB Atlas with QR-based patient registration and JWT-authenticated staff access. Owned the full backend and system integration.',
    challenge: 'Designing and building a complete auth pipeline (JWT issuance, refresh tokens, role-based access) and integrating QR code generation/scanner flow under extreme time pressure.',
  },
  {
    title: 'ArenaIQ',
    problem: 'Venue owners have no data-driven way to optimize pricing, scheduling, or resource allocation.',
    built: 'Venue intelligence platform built for a Google APL-style competition using Node.js, React, MongoDB, and JWT authentication.',
    challenge: 'Building a recommendation engine that factors occupancy trends, seasonal demand, and event type — all within a competitive time constraint.',
  },
  {
    title: 'Mock Interview Platform',
    problem: 'Practicing for technical interviews is fragmented — you need coding, system design, and feedback in one place.',
    built: 'Full-stack MERN platform focused on DSA and system design interview prep, integrating the Monaco Editor for coding, React Flow for architecture diagrams, Judge0 for code execution, and the Gemini API for AI-powered feedback.',
    challenge: 'Orchestrating four independent services (Monaco, React Flow, Judge0, Gemini) into a seamless user flow where code editing, diagramming, execution, and feedback all feel like one coherent experience.',
  },
]

function ProjectsSection({ onBack }: ProjectsSectionProps) {
  return (
    <SectionWrapper title="PROJECTS" onBack={onBack}>
      {projects.map((p) => (
        <div key={p.title} className={styles.project}>
          <div className={styles.projectTitle}>{p.title}</div>
          <div className={styles.field}>
            <span className={styles.fieldLabel}>Problem</span>
            <p className={styles.fieldText}>{p.problem}</p>
          </div>
          <div className={styles.field}>
            <span className={styles.fieldLabel}>Built</span>
            <p className={styles.fieldText}>{p.built}</p>
          </div>
          <div className={styles.field}>
            <span className={styles.fieldLabel}>Challenge</span>
            <p className={styles.fieldText}>{p.challenge}</p>
          </div>
        </div>
      ))}
    </SectionWrapper>
  )
}

export default ProjectsSection
