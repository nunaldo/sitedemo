'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Team.module.css'

gsap.registerPlugin(ScrollTrigger)

const teamMembers = [
  {
    name: 'Nuno',
    role: 'Founder & CEO',
    initials: 'N'
  },
  {
    name: 'Cristiano',
    role: 'Co-founder & CTO',
    initials: 'C'
  },
  {
    name: 'Duarte G',
    role: 'IT',
    initials: 'DG'
  },
  {
    name: 'Catarina Gential',
    role: 'Chief of Arts',
    initials: 'CG'
  },
  {
    name: 'Maria',
    role: 'COO',
    initials: 'M'
  },
  {
    name: 'Duarte T',
    role: 'Mechanical Engineer',
    initials: 'DT'
  }
]

export default function Team() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const memberRefs = useRef([])

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

      // Team member cards stagger animation
      memberRefs.current.forEach((member, index) => {
        if (!member) return
        
        gsap.from(member, {
          y: 80,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: member,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.team}>
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.title}>
          MEET THE TEAM
        </h2>

        <div className={styles.grid}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={el => memberRefs.current[index] = el}
              className={styles.memberCard}
            >
              <div className={styles.avatar}>
                {member.initials}
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
