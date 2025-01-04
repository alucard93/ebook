  import Image from 'next/image'
  import grocers from '@/public/grocers.png'
  import microsoft from '@/public/microsft.png'
  import openIa from '@/public/open-ia.png'
  import chatgpt from '@/public/chatgpt.png'

  export default function FooterDesktop() {
    return (
      <section className="pb-14">
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="flex justify-center items-center">
            <Image
              src={grocers}
              alt=""
              height={52}
              width={132}
              className="object-contain"
            />
            <hr className="w-[0.5px] h-8 bg-gray-400 mx-3" />
            <Image
              src={microsoft}
              alt=""
              height={56}
              width={101}
              className="object-contain"
            />
            <hr className="w-[0.5px] h-8 bg-gray-400 mx-3" />
            <Image
              src={openIa}
              alt=""
              height={42}
              width={77}
              className="object-contain"
            />
            <hr className="w-[0.5px] h-8 bg-gray-400 mx-3" />
            <Image
              src={chatgpt}
              alt=""
              height={70}
              width={88}
              className="object-contain"
            />
          </div>
          <div className="w-full">
            <a
              className=" w-full bg-[#F44] h-[56px] mt-5 text-white text-18px font-bold flex items-center justify-center"
              href="https://www.grocers.io/"
            >
              Conheça o Grocers
            </a>
          </div>
        </div>
      </section>
    )
  }
