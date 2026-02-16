import { beltLevels } from '../data/belt'
import styles from './Belt.module.css'

export default function Belt() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Belt</h1>
          <p className={styles.subtitle}>
            A structured progression—principles and practices that compound over time.
          </p>
        </header>
        <div className={styles.progression}>
          {beltLevels.map((level, index) => (
            <div key={level.level} className={styles.level} style={{ animationDelay: `${index * 0.08}s` }}>
              <div className={styles.levelHeader}>
                <span className={styles.levelNumber}>{String(index + 1).padStart(2, '0')}</span>
                <h2 className={styles.levelTitle}>{level.level}</h2>
              </div>
              <ul className={styles.items}>
                {level.items.map((item) => (
                  <li key={item} className={styles.item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
