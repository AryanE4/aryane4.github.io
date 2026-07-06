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
