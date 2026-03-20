'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './System.module.css'

gsap.registerPlugin(ScrollTrigger)

const modules = [
  {
    title: 'ARTISTIC INSTALLATIONS',
    description: 'These installations are designed as permanent urban structures where form and utility coexist naturally. Instead of hiding the technical layer, the project makes engineering visible as part of the artistic language, creating pieces that are both expressive and operational in daily public space.',
    accent: 'var(--system-accent-1)'
  },
  {
    title: 'ENVIRONMENTAL SENSING',
    description: 'A continuous sensing system captures air quality, temperature and humidity across the site, producing a reliable environmental baseline. The collected data supports technical decisions while also acting as creative material for how the installation communicates with people in the city.',
    accent: 'var(--system-accent-2)'
  },
  {
    title: 'ENERGY SYSTEMS',
    description: 'Energy generation, storage and grid integration are managed as one coordinated system in real time. This allows the structure to remain efficient and resilient while presenting its infrastructure clearly, so performance and design intention evolve together instead of competing.',
    accent: 'var(--system-accent-3)'
  },
  {
    title: 'DATA NETWORKS',
    description: 'Distributed communication between sensors enables robust operation and scalable deployment across different contexts. Through open protocols, the network becomes a shared layer between art, engineering and public information, supporting research, transparency and long-term urban learning.',
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
              <p className={styles.moduleDescription}>{module.description}</p>
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
