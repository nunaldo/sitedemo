'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Methodology.module.css'

gsap.registerPlugin(ScrollTrigger)

const principles = [
  {
    id: 'technical-core',
    title: 'Shared Technical Core',
    description: 'All installations are built on a shared sensor platform with unified data protocols, so each deployment can adapt to a different place without losing consistency in performance. This common technical base creates room for artistic variation while keeping engineering decisions coherent and reliable across contexts.'
  },
  {
    id: 'measurement',
    title: 'Measurement as Medium',
    description: 'Measurement is treated as both infrastructure and creative language: calibration is standardized, nodes are continuously cross-validated, and collected data is interpreted as material for design. In practice, this means artistic expression and technical rigor are developed in the same workflow instead of in separate stages.'
  },
  {
    id: 'operational',
    title: 'Operational Learning',
    description: 'Each installation keeps learning after deployment through field performance and public interaction, and those observations feed the next design iteration. Placement strategies, engineering adjustments, and aesthetic decisions are refined together, making the methodology cumulative over time.'
  }
]

export default function Methodology() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const blockRefs = useRef([])
  const canvasRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
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

      // Block animations with 3D transform
      blockRefs.current.forEach((block, index) => {
        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: 'top 80%',
            end: 'top 45%',
            scrub: 1.5
          },
          opacity: 0,
          y: 80,
          rotationY: -15,
          transformPerspective: 1000
        })
      })

      // SVG line animations
      const lines = document.querySelectorAll(`.${styles.connectionPath}`)
      lines.forEach((line) => {
        const length = line.getTotalLength()
        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length
        })

        gsap.to(line, {
          scrollTrigger: {
            trigger: line,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 2
          },
          strokeDashoffset: 0
        })
      })

      // Node pulse animation
      const nodes = document.querySelectorAll(`.${styles.node}`)
      nodes.forEach((node, i) => {
        gsap.from(node, {
          scrollTrigger: {
            trigger: node,
            start: 'top 75%'
          },
          scale: 0,
          opacity: 0,
          duration: 0.6,
          ease: 'back.out(2)',
          delay: i * 0.2
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.methodology}>
      <div className="container">
        <h2 ref={titleRef} className={styles.title}>
          Convergence Methodology
        </h2>

        <div className={styles.diagram}>
          <svg className={styles.connections} ref={canvasRef} viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Connection lines between blocks */}
            <path
              className={styles.connectionPath}
              d="M 50 20 L 50 50"
              stroke="var(--color-accent)"
              strokeWidth="0.5"
              fill="none"
              opacity="0.4"
            />
            <path
              className={styles.connectionPath}
              d="M 50 50 L 50 80"
              stroke="var(--color-accent)"
              strokeWidth="0.5"
              fill="none"
              opacity="0.4"
            />
          </svg>

          <div className={styles.blocks}>
            {principles.map((principle, index) => (
              <div
                key={principle.id}
                ref={(el) => (blockRefs.current[index] = el)}
                className={styles.block}
                style={{ '--block-index': index }}
              >
                <div className={styles.node} />
                <div className={styles.blockContent}>
                  <div className={styles.blockNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className={styles.blockTitle}>{principle.title}</h3>
                  <p className={styles.blockDescription}>
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.statement}>
          <p>
            Art and engineering converge. Each installation strengthens collective intelligence.
            Form and function as one continuous practice.
          </p>
        </div>
      </div>
    </section>
  )
}
