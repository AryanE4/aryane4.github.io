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
