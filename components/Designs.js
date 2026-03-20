'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Designs.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function Designs() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1
        }
      })

      // CTA animation
      gsap.from(ctaRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
          end: 'top 60%',
          scrub: 1
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.designs}>
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.title}>
          OUR DESIGNS
        </h2>

        <div ref={ctaRef} className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>MAKE IT YOUR OWN</h3>
          <div className={styles.ctaText}>
            <p className={styles.ctaLine}>Every installation is unique.</p>
            <p className={styles.ctaLine}>Every context is different.</p>
            <p className={styles.ctaLineStrong}>We adapt our technology to your space, your needs, your vision.</p>
          </div>
          <div className={styles.ctaSubtext}>
            <p className={styles.ctaSubLine}>Urban infrastructure doesn't have to be invisible.</p>
            <p className={styles.ctaSubLine}>It doesn't have to be ugly.</p>
            <p className={styles.ctaSubLine}>It can be honest, functional, and beautiful.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
