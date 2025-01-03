import Image from 'next/image'

import { abhaya } from '@/app/_lib/fonts'
export default function AboutUsSection() {
  return (
    <section>
      <div className="flex flex-col gap-8 pt-8 pb-12 px-8">
        <h2
          className={`${abhaya.className} text-4xl font-extrabold text-[#282830]`}
        >
          Quem Somos?
        </h2>
        <p className="text-lg text-black font-light">
          A Grocers é a plataforma tecnológica integrante do pool de startups da
          microsoft totalmente desenvolvida para supermercados que desejam
          transformar a experiência de compra dos clientes e maximizar
          resultados. <br />
          <br />
          Com mais de 20 anos de expertise no setor, utilizamos inteligência
          artificial e machine learning para criar uma jornada de compra
          personalizada e eficiente. Nosso ecossistema integrado engloba app ,
          ecommerce web, assistente virtual e experiências dentro da loja,
          conectando canais online e offline. O resultado? Aumento da
          satisfação, recorrência e fidelidade, além de maior receita para o seu
          negócio​​.
        </p>
      </div>
    </section>
  )
}
