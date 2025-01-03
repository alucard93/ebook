import { abhaya } from '@/app/_lib/fonts'
export default function MainSectionDesktop() {
  return (
    <section className="h-[450px] flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1
          className={`${abhaya.className} max-w-4xl text-[68px] leading-[57.8px] font-extrabold text-center`}
        >
          Descubra Como a IA Pode Transformar o Futuro dos Supermercados
        </h1>
        <p className="text-18px font-light max-w-2xl text-center">
          Baixe agora nosso ebook exclusivo e veja como a Inteligência
          Artificial <br />
          pode revolucionar a experiência de compra, aumentar a fidelização e
          maximizar os lucros do seu supermercado
        </p>
      </div>
    </section>
  )
}
