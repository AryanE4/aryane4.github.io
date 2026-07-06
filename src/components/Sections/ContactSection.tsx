import SectionWrapper from './SectionWrapper'
import styles from './ContactSection.module.css'

interface ContactSectionProps {
  onBack: () => void
}

function ContactSection({ onBack }: ContactSectionProps) {
  return (
    <SectionWrapper title="CONTACT" onBack={onBack}>
      <a className={styles.link} href="https://github.com/AryanE4" target="_blank" rel="noreferrer">
        GitHub
      </a>
      <a className={styles.link} href="mailto:aryane4@example.com">
        aryane4@example.com
      </a>
      <a className={styles.link} href="https://linkedin.com/in/aryane4" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
    </SectionWrapper>
  )
}

export default ContactSection
