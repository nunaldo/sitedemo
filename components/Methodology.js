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
    description: 'Common sensor platform. Unified data protocols. Artistic expression through engineering constraint. Modular hardware enabling rapid deployment.'
  },
  {
    id: 'measurement',
    title: 'Measurement as Medium',
    description: 'Standardized calibration procedures. Cross-validation between nodes. Data collection as creative practice. Art x engineering methodology.'
  },
  {
    id: 'operational',
    title: 'Operational Learning',
    description: 'Field performance shapes design iteration. Public interaction patterns inform placement. Engineering and artistic decisions evolve together.'
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
          <svg className={styles.connections} ref={canvasRef}>
            {/* Connection lines between blocks */}
            <path
              className={styles.connectionPath}
              d="M 50% 20%, L 50% 50%"
              stroke="var(--color-accent)"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
            <path
              className={styles.connectionPath}
              d="M 50% 50%, L 50% 80%"
              stroke="var(--color-accent)"
              strokeWidth="1"
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
