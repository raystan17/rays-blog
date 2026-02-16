import { useParams, Link } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import styles from './ProjectDetail.module.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h1>Project not found</h1>
        <Link to="/projects">Back to projects</Link>
      </div>
    )
  }

  return (
    <article className={styles.article}>
      <div className="container">
        <Link to="/projects" className={styles.back}>← Projects</Link>
        <header className={styles.header}>
          <span className={styles.year}>{project.year}</span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.tagline}>{project.tagline}</p>
        </header>
        <div className={styles.heroImage}>
          <img src={project.image} alt="" />
        </div>
        <div className={styles.body}>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.tech}>
            {project.tech.map((t) => (
              <span key={t} className={styles.techTag}>{t}</span>
            ))}
          </div>
          {project.link && project.link !== '#' && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
              View project →
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
