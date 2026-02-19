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
    const ctx = gsap.context(() => {
      const panels = panelsRef.current
      
      // Horizontal scroll animation
      const totalScroll = horizontalRef.current.scrollWidth - window.innerWidth
      
      gsap.to(horizontalRef.current, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalScroll * 1.5}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      })

      // Individual panel animations
      panels.forEach((panel, index) => {
        const heading = panel.querySelector('h3')
        const content = panel.querySelector('.panel-content')
        
        if (heading) {
          gsap.from(heading, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: () => `top+=${index * 200} top`,
              end: () => `top+=${index * 200 + 400} top`,
              scrub: 1
            },
            opacity: 0,
            y: 50
          })
        }
        
        if (content) {
          gsap.from(content, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: () => `top+=${index * 200 + 100} top`,
              end: () => `top+=${index * 200 + 500} top`,
              scrub: 1
            },
            opacity: 0,
            y: 30
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
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
            <div className="panel-content">
              <div className={styles.visualBox}>
                <img 
                  src="/images/mat1.jpeg" 
                  alt="Initial Concept Sketch"
                  className={styles.panelImage}
                />
                <div className={styles.sketchLines}>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className={styles.sketchLine} style={{ 
                      width: `${Math.random() * 60 + 20}%`,
                      left: `${Math.random() * 40}%`,
                      top: `${i * 5}%`
                    }} />
                  ))}
                </div>
                <div className={styles.visualLabel}>Initial Concept</div>
              </div>
              <p className={styles.panelText}>
                It started with a question: <strong>What if urban infrastructure was honest?</strong> 
                Raw sketches. Napkin drawings. The idea that technology doesn't need to hide.
              </p>
            </div>
          </div>
        </div>

        {/* Panel 2: Second Iteration */}
        <div ref={el => panelsRef.current[1] = el} className={styles.panel}>
          <div className={styles.panelInner}>
            <div className={styles.panelLabel}>STAGE_02</div>
            <h3>REFINEMENT</h3>
            <div className="panel-content">
              <div className={styles.visualBox}>
                <img 
                  src="/images/mod1.jpeg" 
                  alt="3D Modulation"
                  className={styles.panelImage}
                />
                <div className={styles.blueprintGrid}>
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className={styles.blueprintCell} />
                  ))}
                </div>
                <div className={styles.visualLabel}>Technical Drawing</div>
              </div>
              <p className={styles.panelText}>
                Engineering constraints became design features. 
                <strong> Modular assembly. Weatherproof enclosures. Visible power routing.</strong>
                Form follows function. Beauty emerges from necessity.
              </p>
            </div>
          </div>
        </div>

        {/* Panel 3: End Product / Built */}
        <div ref={el => panelsRef.current[2] = el} className={styles.panel}>
          <div className={styles.panelInner}>
            <div className={styles.panelLabel}>STAGE_03</div>
            <h3>NOT A TREE</h3>
            <div className="panel-content">
              <div className={styles.visualBox}>
                <img 
                  src="/images/im1.jpeg" 
                  alt="Not A Tree Installation"
                  className={styles.panelImage}
                />
                <div className={styles.installationView}>
                  <div className={styles.structureOutline}>
                    <div className={styles.sensor} style={{ top: '20%', left: '30%' }} />
                    <div className={styles.sensor} style={{ top: '40%', left: '50%' }} />
                    <div className={styles.sensor} style={{ top: '60%', left: '35%' }} />
                    <div className={styles.sensor} style={{ top: '80%', left: '55%' }} />
                  </div>
                </div>
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

        {/* Panel 4: What We Want */}
        <div ref={el => panelsRef.current[3] = el} className={styles.panel}>
          <div className={styles.panelInner}>
            <div className={styles.panelLabel}>VISION</div>
            <h3>WHAT WE WANT</h3>
            <div className="panel-content">
              <div className={styles.visionGrid}>
                <div className={styles.visionItem}>
                  <span className={styles.visionIcon}>◆</span>
                  <span>Public technology that doesn't apologize</span>
                </div>
                <div className={styles.visionItem}>
                  <span className={styles.visionIcon}>◆</span>
                  <span>Infrastructure as artistic expression</span>
                </div>
                <div className={styles.visionItem}>
                  <span className={styles.visionIcon}>◆</span>
                  <span>Operational beauty in urban space</span>
                </div>
                <div className={styles.visionItem}>
                  <span className={styles.visionIcon}>◆</span>
                  <span>Data collection that citizens can see</span>
                </div>
              </div>
              <p className={styles.panelText}>
                <strong>Art × Engineering × Public Space.</strong> Not decoration. Not surveillance. 
                Visible systems serving visible functions.
              </p>
            </div>
          </div>
        </div>

        {/* Panel 5: What We Expect */}
        <div ref={el => panelsRef.current[4] = el} className={styles.panel}>
          <div className={styles.panelInner}>
            <div className={styles.panelLabel}>IMPACT</div>
            <h3>WHAT WE EXPECT</h3>
            <div className="panel-content">
              <div className={styles.expectGrid}>
                <div className={styles.expectItem}>
                  <span className={styles.expectValue}>99.4%</span>
                  <span className={styles.expectLabel}>Uptime</span>
                </div>
                <div className={styles.expectItem}>
                  <span className={styles.expectValue}>12</span>
                  <span className={styles.expectLabel}>Active Sensors</span>
                </div>
                <div className={styles.expectItem}>
                  <span className={styles.expectValue}>24/7</span>
                  <span className={styles.expectLabel}>Data Stream</span>
                </div>
                <div className={styles.expectItem}>
                  <span className={styles.expectValue}>∞</span>
                  <span className={styles.expectLabel}>Public Access</span>
                </div>
              </div>
              <p className={styles.panelText}>
                Continuous operation. Transparent data. Public accountability.
                <strong> Technology that works. Infrastructure that doesn't fail.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Panel 6: Live Data CTA */}
        <div ref={el => panelsRef.current[5] = el} className={styles.panel}>
          <div className={styles.panelInner}>
            <div className={styles.panelLabel}>LIVE_NOW</div>
            <h3>SEE IT IN ACTION</h3>
            <div className="panel-content">
              <div className={styles.dataPreview}>
                <img 
                  src="/images/im2.jpeg" 
                  alt="Live Data Visualization"
                  className={styles.panelImage}
                />
                <div className={styles.dataStream}>
                  <div className={styles.dataLine} style={{ animationDelay: '0s' }} />
                  <div className={styles.dataLine} style={{ animationDelay: '0.3s' }} />
                  <div className={styles.dataLine} style={{ animationDelay: '0.6s' }} />
                  <div className={styles.dataLine} style={{ animationDelay: '0.9s' }} />
                </div>
                <div className={styles.visualLabel}>Real-time Data</div>
              </div>
              <p className={styles.panelText}>
                Watch the sensors work. See the data flow. 
                <strong> Live environmental readings from the urban core.</strong>
              </p>
              <a href="https://notatree.site/" target="_blank" rel="noopener noreferrer" className={styles.liveDataButton}>
                <img 
                  src="/images/button.png" 
                  alt="View Live Data"
                />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
