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
