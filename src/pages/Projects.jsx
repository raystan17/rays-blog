import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>
            Selected work—products, design systems, and tools built for clarity and performance.
          </p>
        </header>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.card}>
              <Link to={`/projects/${project.id}`} className={styles.cardLink}>
                <div className={styles.imageWrap}>
                  <img src={project.image} alt="" className={styles.image} />
                  <div className={styles.overlay} />
                </div>
                <div className={styles.content}>
                  <span className={styles.year}>{project.year}</span>
                  <h2 className={styles.cardTitle}>{project.title}</h2>
                  <p className={styles.tagline}>{project.tagline}</p>
                  <div className={styles.tech}>
                    {project.tech.map((t) => (
                      <span key={t} className={styles.techTag}>{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
