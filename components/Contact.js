'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Contact.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1.5
        },
        opacity: 0,
        y: 60
      })

      // Grid lines animation
      const gridLines = document.querySelectorAll(`.${styles.gridLine}`)
      gridLines.forEach((line, i) => {
        gsap.from(line, {
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 2
          },
          scaleY: 0,
          transformOrigin: 'top center',
          delay: i * 0.05
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.contact}>
      <div className={styles.gridBackground}>
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className={styles.gridLine} />
        ))}
      </div>

      <div className="container">
        <div ref={contentRef} className={styles.content}>
          <div className={styles.label}>// ART × ENGINEERING</div>
          <h2 className={styles.title}>
            FOR PARTNERSHIPS
            <br />
            AND EXPLORATION
          </h2>

          <div className={styles.contactInfo}>
            <a href="mailto:contact@infrastructure.system" className={styles.email}>
              CONTACT@INFRASTRUCTURE.SYSTEM
            </a>
          </div>

          <div className={styles.footer}>
            <div className={styles.footerGrid}>
              <div className={styles.footerItem}>
                <div className={styles.value}>URBAN CORE</div>
                <div className={styles.label}>Location</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.value}>PUBLIC INFRASTRUCTURE</div>
                <div className={styles.label}>Focus</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.value}>OPERATIONAL</div>
                <div className={styles.label}>Status</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
