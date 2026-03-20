'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './System.module.css'

gsap.registerPlugin(ScrollTrigger)

const modules = [
  {
    title: 'ARTISTIC INSTALLATIONS',
    points: [
      'Permanent sculptural infrastructure for public space',
      'Artistic expression built through engineering logic',
      'Functional systems designed for daily urban use'
    ],
    accent: 'var(--system-accent-1)'
  },
  {
    title: 'ENVIRONMENTAL SENSING',
    points: [
      'Continuous measurement of air quality, temperature and humidity',
      'Reliable environmental baseline for urban analysis',
      'Data used as both technical and creative material'
    ],
    accent: 'var(--system-accent-2)'
  },
  {
    title: 'ENERGY SYSTEMS',
    points: [
      'Integrated generation, storage and grid connection',
      'Real-time energy management and control',
      'Resilient performance with visible infrastructure'
    ],
    accent: 'var(--system-accent-3)'
  },
  {
    title: 'DATA NETWORKS',
    points: [
      'Distributed communication between sensing nodes',
      'Open protocols for research and interoperability',
      'Shared layer across art, engineering and public information'
    ],
    accent: 'var(--system-accent-1)'
  }
]

export default function System() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const moduleRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation on scroll
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1
        },
        opacity: 0,
        y: 50
      })

      // Controlled reveal to match the cleaner visual direction.
      moduleRefs.current.forEach((module, index) => {
        gsap.from(module, {
          scrollTrigger: {
            trigger: module,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1
          },
          opacity: 0,
          y: 60 + index * 8,
          scale: 0.96
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.system}>
      <div className="container">
        <h2 ref={titleRef} className={styles.title}>
          SYSTEM<br/>ARCHITECTURE
        </h2>

        <div className={styles.grid}>
          {modules.map((module, index) => (
            <div
              key={index}
              ref={(el) => (moduleRefs.current[index] = el)}
              className={styles.module}
              style={{ '--accent-color': module.accent }}
            >
              <div className={styles.moduleNumber}>
                [{String(index + 1).padStart(2, '0')}]
              </div>
              <h3 className={styles.moduleTitle}>{module.title}</h3>
              <ul className={styles.modulePoints}>
                {module.points.map((point) => (
                  <li key={point} className={styles.modulePoint}>{point}</li>
                ))}
              </ul>
              <div className={styles.moduleAccent} />
            </div>
          ))}
        </div>

        <div className={styles.systemStatement}>
          <p className={styles.systemStatementLine}>
            Where <strong>ART MEETS ENGINEERING.</strong>
          </p>
          <p className={styles.systemStatementLine}>
            Each installation operates independently.
          </p>
          <p className={styles.systemStatementLine}>
            Together they form collective urban intelligence.
          </p>
        </div>
      </div>
    </section>
  )
}
