import { useState } from 'react'
import { photos } from '../data/photos'
import Lightbox from '../components/Lightbox'
import styles from './Photos.module.css'

export default function Photos() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Photos</h1>
          <p className={styles.subtitle}>
            A minimal gallery inspired by Alan Watts and Neville Goddard:
            stillness, imagination, and presence.
          </p>
        </header>
        <div className={styles.grid}>
          {photos.map((photo) => (
            <button
              key={photo.id}
              type="button"
              className={styles.item}
              onClick={() => setLightbox(photo)}
            >
              <img src={photo.src} alt={photo.alt} className={styles.image} />
            </button>
          ))}
        </div>
      </div>
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}
