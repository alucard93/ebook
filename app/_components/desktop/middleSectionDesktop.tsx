import { abhaya } from '@/app/_lib/fonts'
export default function MiddleSectionDesktop() {
  return (
    <section>
      <div className="flex flex-col gap-6 h-[322px] items-center bg-[#282830] pt-8 pb-12 px-5 ">
        <p
          className={`${abhaya.className} text-[178px] text-[#F44] font-extrabold leading-85 max-h-16`}
        >
          “
        </p>
        <p
          className={`${abhaya.className} text-[34px] leading-8 text-[#FFFEFE] font-extrabold text-center lg:max-w-5xl`}
        >
          Supermercados que adotam tecnologias baseadas em IA veem um{' '}
          <strong
            className={`${abhaya.className} text-[34px] text-[#F44] font-extrabold text-center leading-8`}
          >
            aumento de até 30% na receita por cliente{' '}
          </strong>{' '}
          e uma
          <br />
          <strong
            className={`${abhaya.className} text-[34px] text-[#F44] font-extrabold text-center leading-8`}
          >
            {' '}
            fidelização 40% maior
          </strong>{' '}
          em comparação com os concorrentes <br /> – McKinsey.
        </p>
      </div>
    </section>
  )
}
