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
            Where imagination becomes product. Where belief becomes business.
          </p>
          <div className={styles.heroCta}>
            <Link to="/projects" className={styles.btnPrimary}>View work</Link>
            <Link to="/contact" className={styles.btnSecondary}>Get in touch</Link>
          </div>
        </div>
      </section>

      <section className={styles.manifesto}>
        <div className={`container ${styles.manifestoInner}`}>
          <p className={styles.manifestoLead}>
            This blog is where I document the process — product launches, flashes of insight, experiments, failures, and wins.
          </p>

          <p className={styles.manifestoSub}>Beneath the tactics is something deeper.</p>

          <h2 className={styles.manifestoStatement}>
            I build from the center of what is yet unseen.
          </h2>

          <p className={styles.manifestoInfluences}>
            I&apos;m drawn to the edge where imagination collides with leverage, where intuition meets execution, and where identity shapes reality.
          </p>

          <div className={styles.manifestoReframes}>
            <div className={styles.reframe}>
              <p className={styles.reframeOld}>Startups aren't just businesses —</p>
              <p className={styles.reframeNew}>they're expressions of belief.</p>
            </div>
            <div className={styles.reframe}>
              <p className={styles.reframeOld}>Marketing isn't manipulation —</p>
              <p className={styles.reframeNew}>it's clarity of vision.</p>
            </div>
            <div className={styles.reframe}>
              <p className={styles.reframeOld}>Failure isn't defeat —</p>
              <p className={styles.reframeNew}>it's feedback, a mirror refining the self you bring to the work.</p>
            </div>
          </div>

          <div className={styles.manifestoPoetic}>
            <p>This is where philosophy meets action.</p>
            <p>Where assumption ignites momentum.</p>
            <p>Where inner state becomes outer result.</p>
          </div>

          <div className={styles.manifestoPosts}>
            <p>Some posts break down product strategy.</p>
            <p>Some unpack mindset shifts.</p>
            <p>Some explore intuition, synchronicity, and the subtle forces that move ambition forward.</p>
          </div>

          <div className={styles.manifestoClosing}>
            <p className={styles.closingBold}>All of it is lived.<br/>All of it is becoming.</p>
            <p className={styles.closingInvite}>
              If you're building something ambitious — not just in the world, but inside yourself — you'll feel at home here.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What I'm building</h2>
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
          <h2 className={styles.sectionTitle}>Latest writing</h2>
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
