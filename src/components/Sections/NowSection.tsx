import SectionWrapper from './SectionWrapper'

interface NowSectionProps {
  onBack: () => void
}

function NowSection({ onBack }: NowSectionProps) {
  return (
    <SectionWrapper title="NOW" onBack={onBack}>
      <p>
        Building a token-efficient LLM routing agent that intelligently routes
        coding tasks between local and remote models — built during a buildathon
        and designed to minimize API costs without sacrificing quality.
      </p>
      <p style={{ marginTop: 16 }}>
        Also evaluating a freelance project to build an internal financial ledger
        and operations platform for an ad agency, handling invoice tracking,
        expense reporting, and client billing workflows.
      </p>
    </SectionWrapper>
  )
}

export default NowSection
