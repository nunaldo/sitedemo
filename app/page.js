'use client'

import Hero from '@/components/Hero'
import System from '@/components/System'
import NotATree from '@/components/NotATree'
import Methodology from '@/components/Methodology'
import Roadmap from '@/components/Roadmap'
import Contact from '@/components/Contact'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <main>
        <Hero />
        <System />
        <NotATree />
        <Methodology />
        <Roadmap />
        <Contact />
      </main>
    </SmoothScroll>
  )
}
