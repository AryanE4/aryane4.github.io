import SectionWrapper from './SectionWrapper'
import styles from './HackathonsSection.module.css'

interface HackathonsSectionProps {
  onBack: () => void
}

function HackathonsSection({ onBack }: HackathonsSectionProps) {
  return (
    <SectionWrapper title="HACKATHONS" onBack={onBack}>
      <p className={styles.intro}>
        7 hackathons, builds ranging from real-time multiplayer games to
        hospital management systems.
      </p>
      <ul className={styles.list}>
        <li>Hackverse 4.0</li>
        <li>Google APL-Style Competition</li>
        <li>Buildathon — LLM Routing Agent</li>
        <li>36-Hour Hospital Management Hackathon</li>
      </ul>
    </SectionWrapper>
  )
}

export default HackathonsSection
