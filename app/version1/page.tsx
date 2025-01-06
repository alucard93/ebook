'use client'

import { useState, useEffect } from 'react'

import Image from 'next/image'

import AboutUsSection from '../_components/mobile/aboutUsSection'
import Footer from '../_components/mobile/footer'
import MainSection from '../_components/mobile/mainSection'
import MiddleSection from '../_components/mobile/middleSection'
import MainSectionDesktop from '../_components/desktop/mainSectionDesktop'
import MiddleSectionDesktop from '../_components/desktop/middleSectionDesktop'
import LearnSectionDesktop from '../_components/desktop/learnSectionDesktop'

import EmailForm from '../_components/desktop/EmailForm'
import AboutUsSectionDesktop from '../_components/desktop/aboutUsSectionDesktop'
import FooterDesktop from '../_components/desktop/footerDesktop'

import ebookIaForm from '../../public/ebook-ia-form.png'

export default function Version1() {
  // Inicializa como `false` no servidor
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Executa somente no cliente
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 765)
    }

    // Define o estado inicial
    handleResize()

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
        <div className="w-full flex">
          <div className="w-1/2 px-10">
            <LearnSectionDesktop />
            <AboutUsSectionDesktop />
            <FooterDesktop />
          </div>
          <div className="w-1/2 bg-[#F44] pt-6">
            <h2 className="text-white text-2xl text-center font-bold max-w-sm mx-auto pb-6">
              Baixe agora nosso ebook gratuito e descubra como a IA pode ser o
              diferencial competitivo que você precisa!
            </h2>

            <Image
              width={259}
              height={359}
              src={ebookIaForm}
              alt="Imagem do Ebook potencial da Inteligencia artificial nos supermercados"
              className="mx-auto h-auto object-contain"
            />

            <EmailForm />
          </div>
        </div>
      </section>
    </div>
  )
}
