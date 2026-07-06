import styles from './MainMenu.module.css'

interface MainMenuProps {
  onSelect: (section: string) => void
}

const ITEMS = ['PROJECTS', 'NOW', 'HACKATHONS', 'CONTACT']

function MainMenu({ onSelect }: MainMenuProps) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>Aryan E4</div>
      <div className={styles.menuLabel}>MENU</div>
      <div className={styles.trapezoid}>
        {ITEMS.map((item) => (
          <div
            key={item}
            className={styles.menuItem}
            onClick={() => onSelect(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainMenu
