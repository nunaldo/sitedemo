'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './System.module.css'

gsap.registerPlugin(ScrollTrigger)

const modules = [
  {
    title: 'ARTISTIC INSTALLATIONS',
    description: 'Sculptural infrastructure in public space. Art meets engineering. Form and function converge in permanent urban presence.',
    accent: 'var(--color-accent)'
  },
  {
    title: 'ENVIRONMENTAL SENSING',
    description: 'Continuous measurement systems. Air quality, temperature, humidity. Data as creative material. Technology as medium.',
    accent: 'var(--color-accent-2)'
  },
  {
    title: 'ENERGY SYSTEMS',
    description: 'Grid-connected power generation. Storage. Real-time management. Engineering infrastructure expressed artistically.',
    accent: 'var(--color-accent-3)'
  },
  {
    title: 'DATA NETWORKS',
    description: 'Distributed sensor architecture. Open protocols for urban research. Art x engineering x public information.',
    accent: 'var(--color-accent)'
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

      // Module assembly animation - more chaotic
      moduleRefs.current.forEach((module, index) => {
        gsap.from(module, {
          scrollTrigger: {
            trigger: module,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1
          },
          opacity: 0,
          y: gsap.utils.random(80, 150),
          x: index % 2 === 0 ? -50 : 50,
          rotation: gsap.utils.random(-8, 8),
          scale: 0.8
        })

        // Glitch on scroll
        gsap.to(module, {
          scrollTrigger: {
            trigger: module,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          },
          boxShadow: `0 0 30px ${modules[index].accent}`,
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      // Grid connector lines
      const connectors = document.querySelectorAll(`.${styles.connector}`)
      connectors.forEach((connector, i) => {
        gsap.from(connector, {
          scrollTrigger: {
            trigger: connector,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1.5
          },
          scaleY: 0,
          transformOrigin: 'top center'
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
          <p>
            Where <strong>ART MEETS ENGINEERING.</strong> Each installation operates independently. 
            Together they form collective urban intelligence.
          </p>
        </div>
      </div>
    </section>
  )
}
