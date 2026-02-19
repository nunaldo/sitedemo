'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Roadmap.module.css'

gsap.registerPlugin(ScrollTrigger)

const phases = [
  {
    year: '2023',
    title: 'Prototype Deployment',
    description: 'First installation commissioned. Initial sensor validation. Public space integration testing.',
    status: 'completed'
  },
  {
    year: '2024',
    title: 'Network Expansion',
    description: 'Three additional nodes deployed. Cross-validation protocols established. Data pipeline operational.',
    status: 'completed'
  },
  {
    year: '2025',
    title: 'System Maturation',
    description: 'Hardware iteration based on field performance. API access for research partners. Extended operational monitoring.',
    status: 'active'
  },
  {
    year: '2026',
    title: 'Scale Infrastructure',
    description: 'Expanded deployment across multiple districts. Enhanced sensing capabilities. Integrate energy storage systems.',
    status: 'planned'
  },
  {
    year: '2027',
    title: 'Platform Convergence',
    description: 'Unified control systems. Distributed intelligence. Open framework for third-party integration.',
    status: 'planned'
  }
]

export default function Roadmap() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const timelineRef = useRef(null)
  const phaseRefs = useRef([])

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
        y: 50
      })

      // Timeline line progressive reveal
      const timelineLine = timelineRef.current.querySelector(`.${styles.timelineLine}`)
      gsap.from(timelineLine, {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1
        },
        scaleY: 0,
        transformOrigin: 'top center'
      })

      // Phase animations
      phaseRefs.current.forEach((phase, index) => {
        // Phase container
        gsap.from(phase, {
          scrollTrigger: {
            trigger: phase,
            start: 'top 75%',
            end: 'top 45%',
            scrub: 1.5
          },
          opacity: 0,
          x: index % 2 === 0 ? -60 : 60
        })

        // Phase marker
        const marker = phase.querySelector(`.${styles.phaseMarker}`)
        gsap.from(marker, {
          scrollTrigger: {
            trigger: phase,
            start: 'top 70%'
          },
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'back.out(2)'
        })

        // Phase content
        const content = phase.querySelector(`.${styles.phaseContent}`)
        gsap.from(content, {
          scrollTrigger: {
            trigger: phase,
            start: 'top 75%',
            end: 'top 50%',
            scrub: 1.5
          },
          opacity: 0,
          y: 30
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.roadmap}>
      <div className="container">
        <h2 ref={titleRef} className={styles.title}>
          Evolution
        </h2>

        <div ref={timelineRef} className={styles.timeline}>
          <div className={styles.timelineLine} />
          
          {phases.map((phase, index) => (
            <div
              key={phase.year}
              ref={(el) => (phaseRefs.current[index] = el)}
              className={`${styles.phase} ${styles[phase.status]}`}
              style={{ '--phase-index': index }}
            >
              <div className={styles.phaseMarker}>
                <div className={styles.markerDot} />
              </div>

              <div className={styles.phaseContent}>
                <div className={styles.phaseYear}>{phase.year}</div>
                <h3 className={styles.phaseTitle}>{phase.title}</h3>
                <p className={styles.phaseDescription}>{phase.description}</p>
                <div className={styles.phaseStatus}>
                  {phase.status === 'completed' && 'Completed'}
                  {phase.status === 'active' && 'In Progress'}
                  {phase.status === 'planned' && 'Planned'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
