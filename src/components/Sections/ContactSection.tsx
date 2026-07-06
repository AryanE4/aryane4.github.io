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
