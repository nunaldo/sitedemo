'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './NotATree.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function NotATree() {
  const sectionRef = useRef(null)
  const horizontalRef = useRef(null)
  const panelsRef = useRef([])

  useEffect(() => {    
    const initScrollTrigger = () => {
      const ctx = gsap.context(() => {
        const panels = panelsRef.current.filter(p => p !== null)
        
        if (!horizontalRef.current || panels.length === 0) return
        
        // Force recalculate dimensions
        ScrollTrigger.refresh()
        
        const totalWidth = horizontalRef.current.scrollWidth
        const windowWidth = window.innerWidth
        const scrollDistance = totalWidth - windowWidth
        
        // Horizontal scroll animation - minimal scroll distance
        gsap.to(horizontalRef.current, {
          x: -scrollDistance,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: () => `+=${scrollDistance * 0.3}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          }
        })
      }, sectionRef)
      
      return ctx
    }

    // Wait a bit for images to start loading
    const timer = setTimeout(() => {
      const ctx = initScrollTrigger()
      
      // Refresh after another delay
      setTimeout(() => ScrollTrigger.refresh(), 500)
      
      return () => ctx?.revert()
    }, 200)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={sectionRef} className={styles.notATree}>
      {/* Fixed Title - only visible during this section */}
      <div className={styles.fixedTitle}>
        <h2>NOT A TREE</h2>
      </div>
      
      <div ref={horizontalRef} className={styles.horizontalWrapper}>
        
        {/* Panel 1: First Drawing / Concept */}
        <div ref={el => panelsRef.current[0] = el} className={styles.panel}>
          <div className={styles.panelInner}>
            <div className={styles.panelLabel}>STAGE_01</div>
            <h3>THE FIRST SKETCH</h3>
            <div className={styles.panelContent}>
              <div className={styles.visualBox}>
                <img 
                  src="/images/rascunho.jpeg" 
                  alt="Initial Concept Sketch"
                  className={styles.panelImage}
                  width="800"
                  height="600"
                  loading="eager"
                />
                <div className={styles.visualLabel}>Initial Concept</div>
              </div>
              <p className={styles.panelText}>
                It started with a question: <strong>What if urban infrastructure was honest?</strong> 
                Raw sketches. Napkin drawings. The idea that technology doesn't need to hide.
              </p>
            </div>
          </div>
        </div>

        {/* Panel 2: Design Adaptation */}
        <div ref={el => panelsRef.current[1] = el} className={styles.panel}>
          <div className={styles.panelInner}>
            <div className={styles.panelLabel}>STAGE_02</div>
            <h3>DESIGN ADAPTATION</h3>
            <div className={styles.panelContent}>
              <div className={styles.visualBox}>
                <img 
                  src="/images/mod1.jpeg" 
                  alt="Design Adaptation"
                  className={styles.panelImage}
                  width="800"
                  height="600"
                  loading="eager"
                />
                <div className={styles.visualLabel}>3D Model</div>
              </div>
              <p className={styles.panelText}>
                Adapting the concept to reality.
                <strong> Engineering constraints. Material limitations. Urban regulations.</strong>
                The design evolves. The vision remains.
              </p>
            </div>
          </div>
        </div>

        {/* Panel 3: Material Pickup */}
        <div ref={el => panelsRef.current[2] = el} className={styles.panel}>
          <div className={styles.panelInner}>
            <div className={styles.panelLabel}>STAGE_03</div>
            <h3>MATERIAL ARRIVED</h3>
            <div className={styles.panelContent}>
              <div className={styles.visualBox}>
                <img 
                  src="/images/mat1.jpeg" 
                  alt="Materials Pickup"
                  className={styles.panelImage}
                  width="800"
                  height="600"
                  loading="eager"
                />
                <div className={styles.visualLabel}>Production Complete</div>
              </div>
              <p className={styles.panelText}>
                After production, materials arrive.
                <strong> Precision fabricated. Quality checked. Ready for assembly.</strong>
                From factory to field.
              </p>
            </div>
          </div>
        </div>

        {/* Panel 4: Installed */}
        <div ref={el => panelsRef.current[3] = el} className={styles.panel}>
          <div className={styles.panelInner}>
            <div className={styles.panelLabel}>STAGE_04</div>
            <h3>NOT A TREE</h3>
            <div className={styles.panelContent}>
              <div className={styles.visualBox}>
                <img 
                  src="/images/im1.jpeg" 
                  alt="Not A Tree Installation"
                  className={styles.panelImage}
                  width="800"
                  height="600"
                  loading="eager"
                />
                <div className={styles.visualLabel}>Installed Structure</div>
              </div>
              <p className={styles.panelText}>
                Seven meters tall. Twelve active sensors. 
                <strong> Air quality. Temperature. Noise. Movement. Weather.</strong>
                Standing in active urban space. No interpretation needed.
              </p>
            </div>
          </div>
        </div>

        {/* Panel 5: Live Data */}
        <div ref={el => panelsRef.current[4] = el} className={styles.panel}>
          <div className={styles.panelInner}>
            <div className={styles.panelLabel}>LIVE_DATA</div>
            <h3>SEE IT IN ACTION</h3>
            <div className={styles.panelContent}>
              <div className={styles.dataPreview}>
                <img 
                  src="/images/im2.jpeg" 
                  alt="Live Data Visualization"
                  className={styles.panelImage}
                  width="1600"
                  height="900"
                  loading="eager"
                />
                <div className={styles.visualLabel}>Real-time Data</div>
              </div>
              <p className={styles.panelText}>
                Watch the sensors work. See the data flow. 
                <strong> Live environmental readings from the urban core.</strong>
              </p>
              <a href="https://notatree.site/" target="_blank" rel="noopener noreferrer" className={styles.liveDataButton}>
                CLICK FOR LIVE DATA
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
