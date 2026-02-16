import { useParams, Link } from 'react-router-dom'
import { getPostById } from '../data/posts'
import styles from './BlogPost.module.css'

export default function BlogPost() {
  const { id } = useParams()
  const post = getPostById(id)

  if (!post) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h1>Post not found</h1>
        <Link to="/blog">Back to blog</Link>
      </div>
    )
  }

  return (
    <article className={styles.article}>
      <div className="container">
        <Link to="/blog" className={styles.back}>← Blog</Link>
        <header className={styles.header}>
          <time dateTime={post.date} className={styles.date}>
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </time>
          <h1 className={styles.title}>{post.title}</h1>
        </header>
        <div className={styles.featuredImage}>
          <img src={post.image} alt="" />
        </div>
        <div className={`prose ${styles.body}`} dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    </article>
  )
}
