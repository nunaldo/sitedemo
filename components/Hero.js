'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './Hero.module.css'

export default function Hero() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Grid glitch animation
      gsap.from('.grid-line', {
        opacity: 0,
        scaleY: 0,
        duration: 0.8,
        stagger: {
          amount: 0.6,
          from: 'random',
          grid: 'auto'
        },
        ease: 'power4.out'
      })

      // Title - split and glitch reveal
      const titleChars = titleRef.current.innerText.split('')
      titleRef.current.innerHTML = titleChars.map(char => 
        `<span style="display: inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('')

      gsap.from(titleRef.current.querySelectorAll('span'), {
        opacity: 0,
        y: () => gsap.utils.random(-100, 100),
        x: () => gsap.utils.random(-50, 50),
        rotation: () => gsap.utils.random(-45, 45),
        duration: 1.2,
        stagger: 0.015,
        ease: 'expo.out',
        delay: 0.2
      })

      // Subtle pulse effect on title
      gsap.to(titleRef.current, {
        textShadow: '5px 5px 0 rgba(123, 237, 159, 0.6), 9px 9px 0 rgba(255, 159, 243, 0.4)',
        duration: 0.2,
        repeat: 2,
        yoyo: true,
        delay: 1.5
      })

      // Subtitle chaos
      gsap.from('.subtitle-line', {
        opacity: 0,
        scale: 0,
        rotation: () => gsap.utils.random(-180, 180),
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(3)',
        delay: 1
      })

      // Grid random pulse
      gsap.to('.grid-line', {
        opacity: () => gsap.utils.random(0.1, 0.6),
        duration: () => gsap.utils.random(2, 4),
        stagger: {
          amount: 3,
          repeat: -1,
          yoyo: true,
          from: 'random'
        },
        ease: 'sine.inOut'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.gridBackground} ref={gridRef}>
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className={`${styles.gridLine} grid-line`} />
        ))}
      </div>
      
      <div className={styles.content}>
        <h1 ref={titleRef} className={styles.title}>
          UM NOME FIXE E INOVADOR
        </h1>
        
        <div className={styles.subtitle}>
          <span className="subtitle-line">ART</span>
          <span className="subtitle-line">×</span>
          <span className="subtitle-line">ENGINEERING</span>
          <span className="subtitle-line">×</span>
          <span className="subtitle-line">ENERGY</span>
          <span className="subtitle-line">×</span>
          <span className="subtitle-line">DATA</span>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
