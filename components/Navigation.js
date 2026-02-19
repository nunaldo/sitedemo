'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './Navigation.module.css'

const menuItems = [
  { label: 'System Overview', href: '#system', section: 'system' },
  { label: 'Installations', href: '#installations', section: 'installations' },
  { label: 'Methodology', href: '#methodology', section: 'methodology' },
  { label: 'Roadmap', href: '#roadmap', section: 'roadmap' },
  { label: 'Partner With Us', href: '#contact', section: 'contact' }
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const overlayRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        // Open animation
        gsap.to(overlayRef.current, {
          x: 0,
          duration: 0.6,
          ease: 'power3.out'
        })

        // Stagger menu items
        gsap.from(itemRefs.current, {
          x: -50,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.2
        })
      } else {
        // Close animation
        gsap.to(overlayRef.current, {
          x: '-100%',
          duration: 0.5,
          ease: 'power3.in'
        })
      }
    }, menuRef)

    return () => ctx.revert()
  }, [isOpen])

  const handleNavigation = (href) => {
    setIsOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 500)
  }

  return (
    <>
      <nav ref={menuRef} className={styles.navigation}>
        {/* Hamburger Button */}
        <button 
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu Overlay */}
        <div 
          ref={overlayRef} 
          className={styles.menuOverlay}
          style={{ transform: 'translateX(-100%)' }}
        >
          <div className={styles.menuContent}>
            <div className={styles.menuHeader}>
              <h3>Navigation</h3>
              <p className={styles.tagline}>Art × Engineering</p>
            </div>

            <ul className={styles.menuList}>
              {menuItems.map((item, index) => (
                <li 
                  key={item.section}
                  ref={(el) => (itemRefs.current[index] = el)}
                >
                  <a 
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation(item.href)
                    }}
                    className={styles.menuItem}
                  >
                    <span className={styles.itemNumber}>
                      [{String(index + 1).padStart(2, '0')}]
                    </span>
                    <span className={styles.itemLabel}>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className={styles.menuFooter}>
              <p className={styles.footerText}>
                Experimental Urban Infrastructure
              </p>
              <p className={styles.footerSubtext}>
                B2B & B2G Partnerships
              </p>
            </div>
          </div>
        </div>

        {/* Backdrop */}
        {isOpen && (
          <div 
            className={styles.backdrop}
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </>
  )
}
