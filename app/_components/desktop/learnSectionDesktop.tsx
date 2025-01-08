import { abhaya } from '@/app/_lib/fonts'
export default function LearnSectionDesktop() {
  return (
    <section className="pt-12">
      <div className="">
        <h3
          className={`${abhaya.className} text-customGray font-extrabold text-4xl`}
        >
          O que você vai aprender?
        </h3>
        <ul className="flex flex-col gap-6 list-disc list-outside m-0 p-0 pt-2 pl-6 mt-8">
          <li className="text-[22px]/[22px] text-[#f44] font-bold ">
            A revolução do IA no Varejo
          </li>
          <li className="text-[22px]/[22px] text-[#f44] font-bold ">
            Como melhorar a experiência de
            <br /> compra com IA.
          </li>
          <li className="text-[22px]/[22px] text-[#f44] font-bold ">
            Recorrência e fidelização dos clientes
            <br /> ampliada com IA
          </li>
          <li className="text-[22px]/[22px] text-[#f44] font-bold ">
            Maximização de receita e lucros
            <br /> usando IA e personalização.
          </li>
        </ul>
      </div>
    </section>
  )
}
