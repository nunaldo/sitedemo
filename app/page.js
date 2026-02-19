'use client'

import Hero from '@/components/Hero'
import System from '@/components/System'
import NotATree from '@/components/NotATree'
import Methodology from '@/components/Methodology'
import Roadmap from '@/components/Roadmap'
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
        <div id="methodology">
          <Methodology />
        </div>
        <div id="roadmap">
          <Roadmap />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </SmoothScroll>
  )
}
