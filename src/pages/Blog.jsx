import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import styles from './Blog.module.css'

export default function Blog() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>
            Essays on startups, self-concept, marketing as philosophy, and what happens when assumption meets action.
          </p>
        </header>
        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.card}>
              <Link to={`/blog/${post.id}`} className={styles.cardLink}>
                <div className={styles.imageWrap}>
                  <img src={post.image} alt="" className={styles.image} />
                </div>
                <div className={styles.content}>
                  <time dateTime={post.date} className={styles.date}>
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </time>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <span className={styles.readMore}>Read more →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
