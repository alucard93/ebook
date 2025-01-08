import { abhaya } from '@/app/_lib/fonts'
export default function MiddleSection() {
  return (
    <section>
      <div className="flex flex-col items-center bg-[#282830] pt-8 pb-12 px-5 ">
        <p
          className={`${abhaya.className} text-[178px] text-[#F44] font-extrabold leading-85 max-h-16`}
        >
          “
        </p>
        <p className="text-3xl text-[#FFFEFE] font-extrabold text-center">
          “Supermercados que adotam tecnologias baseadas em IA veem um{' '}
          <strong className="text-3xl text-[#F44] font-extrabold text-center">
            aumento de até 30% na receita por cliente e uma fidelização 40%
            maior
          </strong>{' '}
          em comparação com os concorrentes” – McKinsey.
        </p>
      </div>
    </section>
  )
}
