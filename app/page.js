'use client'

import Hero from '@/components/Hero'
import System from '@/components/System'
import NotATree from '@/components/NotATree'
import Designs from '@/components/Designs'
import Methodology from '@/components/Methodology'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <div id="system">
          <System />
        </div>
        <div id="installations">
          <NotATree />
        </div>
        <div id="designs">
          <Designs />
        </div>
        <div id="methodology">
          <Methodology />
        </div>
        <div id="team">
          <Team />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </SmoothScroll>
  )
}
