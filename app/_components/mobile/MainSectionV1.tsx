import Image from 'next/image'
import imgMain from '@/public/woman.png'
import ebookImg from '@/public/ebook-img.png'
import { abhaya } from '@/app/_lib/fonts'

export default function MainSectionV1() {
  return (
    <section>
      <Image
        width={414}
        height={239}
        src={imgMain}
        alt="Imagem principal"
        className="w-screen h-auto"
      />
      <div className="px-8 py-9 flex flex-col gap-4">
        <h1
          className={`${abhaya.className} font-extrabold text-40px max-w-xs text-customGray`}
        >
          Descubra o Impacto da IA na experiência, lucro e recorrência em
          Supermercados
        </h1>
        <p className="text-18px">
          Baixe agora nosso ebook <br /> exclusivo e veja como a <br />{' '}
          Inteligência Artificial pode revolucionar a experiência de compra,
          aumentar a fidelização e maximizar os lucros do seu supermercado
        </p>

        <div className="flex justify-between items-start gap-8">
          <Image
            className="object-cover min-h-[165px] h-auto w-auto"
            width={113}
            height={159}
            src={ebookImg}
            alt="Imagem do ebook para download"
          />
          <ul className="flex flex-col gap-3 list-disc list-outside m-0 p-0 pt-2">
            <li className="text-[16px] text-[#f44] font-bold max-w-[191px]">
              Como melhorar a experiência de compra com IA.
            </li>
            <li className="text-[16px] text-[#f44] font-bold max-w-[180px]">
              Recorrência e fidelização dos clientes ampliada com IA.
            </li>
            <li className="text-[16px] text-[#f44] font-bold max-w-[191px]">
              Maximização de receita e lucros usando IA e personalização.
            </li>
          </ul>
        </div>

        <a
          href="/Ebook_Potencial_AI_Supermercados.pdf"
          download
          className="bg-[#F44] h-[56px] mt-5 text-white text-18px font-bold flex items-center justify-center"
        >
          Baixar e-book
        </a>
      </div>
    </section>
  )
}
