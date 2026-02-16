import { Link } from 'react-router-dom'
import { getFeaturedProjects } from '../data/projects'
import { getFeaturedPosts } from '../data/posts'
import styles from './Home.module.css'

const featuredProjects = getFeaturedProjects(2)
const featuredPosts = getFeaturedPosts(2)

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.ambientOrb} />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.lineReveal} />
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLetter}>R</span>
            <span className={styles.titleLetter}>a</span>
            <span className={styles.titleLetter}>y</span>
          </h1>
          <p className={styles.heroTagline}>
            Building products, writing in the open, and thinking in systems.
          </p>
          <div className={styles.heroCta}>
            <Link to="/projects" className={styles.btnPrimary}>View work</Link>
            <Link to="/contact" className={styles.btnSecondary}>Get in touch</Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured projects</h2>
          <div className={styles.projectGrid}>
            {featuredProjects.map((project, i) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className={styles.projectCard}
                style={{ '--card-i': i }}
              >
                <div className={styles.projectImageWrap}>
                  <img src={project.image} alt="" className={styles.projectImage} />
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectTagline}>{project.tagline}</p>
              </Link>
            ))}
          </div>
          <div className={styles.sectionFooter}>
            <Link to="/projects" className={styles.linkArrow}>All projects &rarr;</Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Latest from the blog</h2>
          <div className={styles.postList}>
            {featuredPosts.map((post, i) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={styles.postCard}
                style={{ '--card-i': i }}
              >
                <div className={styles.postImageWrap}>
                  <img src={post.image} alt="" className={styles.postImage} />
                </div>
                <div className={styles.postMeta}>
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.sectionFooter}>
            <Link to="/blog" className={styles.linkArrow}>All posts &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
