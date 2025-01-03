'use client'
import { useState, useEffect } from 'react'

import AboutUsSection from '../_components/mobile/aboutUsSection'
import Footer from '../_components/mobile/footer'
import MainSection from '../_components/mobile/mainSection'
import MiddleSection from '../_components/mobile/middleSection'
import MainSectionDesktop from '../_components/desktop/mainSectionDesktop'
import MiddleSectionDesktop from '../_components/desktop/middleSectionDesktop'

export default function Version1() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 765)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 765)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isMobile) {
    return (
      <div>
        <MainSection />
        <MiddleSection />
        <section>
          <AboutUsSection />
          <Footer />
        </section>
      </div>
    )
  }

  return (
    <div>
      <MainSectionDesktop />
      <MiddleSectionDesktop />
      <section>
        <div>
          
        </div>
      </section>
    </div>
  )
}
