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
