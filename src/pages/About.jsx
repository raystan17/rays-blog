import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>I am Raymond</h1>
          <p className={styles.lead}>
            About Me
          </p>
        </header>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I build things that matter — and I build them intentionally.
            </p>
            <p>
              I’m drawn to the edge where ideas meet execution: where concepts
              become real, where strategy becomes action. That’s my focus —
              creating products, systems, and experiences that actually move
              people.
            </p>
            <p>
              I care about clarity, speed, and impact. I don’t overcomplicate.
              I don’t wait for permission. I experiment, learn fast, and
              iterate even faster.
            </p>
            <p>
              Beyond the work itself, I’m fascinated by how people think,
              decide, and grow. That curiosity shapes everything I create —
              from the products I build to the teams I work with.
            </p>
            <p>
              I don’t have all the answers. I do have a relentless drive to
              build, explore, and refine. That’s what defines my work — and what
              drives me every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
