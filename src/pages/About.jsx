import { Link } from 'react-router-dom'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>About</h1>
          <p className={styles.lead}>
            Builder, writer, and systems thinker. I focus on products that are fast, clear, and built to last.
          </p>
        </header>
        <div className={styles.content}>
          <div className={styles.imageWrap}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
              alt=""
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <h2>Background</h2>
            <p>
              I’ve spent years at the intersection of product, design, and engineering. My work centers on reducing complexity—whether that’s in design systems, documentation, or the code that ships to users.
            </p>
            <h2>Philosophy</h2>
            <p>
              I believe in <strong>constraints as a feature</strong>. Fewer options often lead to better outcomes. I also believe in building in public: sharing progress, mistakes, and learnings makes the work better and connects you with people who care about the same problems.
            </p>
            <h2>Focus areas</h2>
            <ul>
              <li>Design systems and tokens</li>
              <li>Performance and Core Web Vitals</li>
              <li>Technical writing and documentation</li>
              <li>Product strategy and prioritization</li>
            </ul>
            <p>
              If any of this resonates, <Link to="/contact">get in touch</Link>. I’m always open to conversations about building, writing, or collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
