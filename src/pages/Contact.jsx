import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate form submit; replace with real endpoint
    setTimeout(() => {
      setSubmitting(false)
      setSent(true)
    }, 800)
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Contact</h1>
          <p className={styles.subtitle}>
            Have a project in mind or just want to say hi? Send a message and I’ll get back to you.
          </p>
        </header>
        <div className={styles.layout}>
          <div className={styles.info}>
            <h2 className={styles.infoTitle}>Other ways to reach me</h2>
            <ul className={styles.infoList}>
              <li>
                <span className={styles.label}>Email</span>
                <a href="mailto:hello@example.com">hello@example.com</a>
              </li>
              <li>
                <span className={styles.label}>Twitter / X</span>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">@ray</a>
              </li>
              <li>
                <span className={styles.label}>LinkedIn</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/ray</a>
              </li>
            </ul>
          </div>
          <div className={styles.formWrap}>
            {sent ? (
              <div className={styles.success}>
                <p>Thanks for your message. I’ll reply as soon as I can.</p>
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
