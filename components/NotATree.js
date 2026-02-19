'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './NotATree.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function NotATree() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const imageRef = useRef(null)
  const detailsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1.5
        },
        opacity: 0,
        x: -80
      })

      // Image container parallax
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        },
        y: -100
      })

      // Image reveal
      const imageInner = imageRef.current.querySelector(`.${styles.imageInner}`)
      gsap.from(imageInner, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 2
        },
        scale: 1.2,
        opacity: 0
      })

      // Details stagger
      detailsRef.current.forEach((detail, index) => {
        gsap.from(detail, {
          scrollTrigger: {
            trigger: detail,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1.5
          },
          opacity: 0,
          y: 40
        })
      })

      // Accent line animation
      const accentLine = document.querySelector(`.${styles.accentLine}`)
      gsap.from(accentLine, {
        scrollTrigger: {
          trigger: accentLine,
          start: 'top 85%',
          end: 'top 60%',
          scrub: 2
        },
        scaleX: 0,
        transformOrigin: 'left center'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.notATree}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.label}>INSTALLATION_01</div>
          <h2 ref={titleRef} className={styles.title}>
            NOT A
            <br />
            TREE
          </h2>
          <div className={styles.accentBar} />
        </div>

        <div className={styles.content}>
          <div ref={imageRef} className={styles.imageContainer}>
            <div className={styles.imageInner}>
              {/* Placeholder for actual image */}
              <div className={styles.imagePlaceholder}>
                <div className={styles.structureGrid}>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className={styles.structureLine} />
                  ))}
                </div>
                <div className={styles.imageLabel}>Installation Site</div>
              </div>
            </div>
          </div>

          <div className={styles.details}>
            <div
              ref={(el) => (detailsRef.current[0] = el)}
              className={styles.detailBlock}
            >
              <h3>PUBLIC INTERACTION</h3>
              <p>
                Installed in active urban circulation. No interpretation needed.
                <strong> The structure exists. The function is apparent.</strong>
              </p>
            </div>

            <div
              ref={(el) => (detailsRef.current[1] = el)}
              className={styles.detailBlock}
            >
              <h3>PRESENCE</h3>
              <p>
                Seven meters tall. Modular assembly. Weatherproof enclosures.
                <strong> Visible sensing. Visible power. Visible data.</strong>
              </p>
            </div>

            <div
              ref={(el) => (detailsRef.current[2] = el)}
              className={styles.detailBlock}
            >
              <h3>ART × ENGINEERING</h3>
              <p>
                Not ornament. Not sculpture. <strong>Operational technology as artistic expression.</strong>
                Form follows function. Aesthetic emerges from engineering constraint.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.specs}>
          <div className={styles.specItem}>
            <span className={styles.specValue}>URBAN CORE</span>
            <span className={styles.specLabel}>Location</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specValue}>OPERATIONAL</span>
            <span className={styles.specLabel}>Status</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specValue}>12 ACTIVE</span>
            <span className={styles.specLabel}>Sensors</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specValue}>99.4%</span>
            <span className={styles.specLabel}>Uptime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
