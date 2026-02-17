import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSent(true)
    }, 800)
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Get in touch</h1>
          <p className={styles.subtitle}>
            Building something ambitious? Have a question about something I wrote? Or just want to say what's up? I'd like to hear from you.
          </p>
        </header>
        <div className={styles.layout}>
          <div className={styles.info}>
            <h2 className={styles.infoTitle}>Other ways to connect</h2>
            <ul className={styles.infoList}>
              <li>
                <span className={styles.label}>Email</span>
                <a href="mailto:ray@example.com">ray@example.com</a>
              </li>
              <li>
                <span className={styles.label}>Twitter / X</span>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">@ray</a>
              </li>
            </ul>
            <p className={styles.infoNote}>
              I read everything. If your message resonates, I'll reply — usually within a couple days.
            </p>
          </div>
          <div className={styles.formWrap}>
            {sent ? (
              <div className={styles.success}>
                <p>Message received. I'll get back to you soon.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.input}
                  required
                  placeholder="Your name"
                />
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  required
                  placeholder="you@example.com"
                />
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                />
                <button type="submit" className={styles.submit} disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
