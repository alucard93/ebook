import Image from 'next/image'
import Modal from './Modal'
import grocers from '@/public/grocers.png'

import microsoft from '@/public/microsft.png'
import openIa from '@/public/open-ia.png'

import chatgpt from '@/public/chatgpt.png'

export default function SuccessModal({
  isVisible,
  onClose,
}: {
  isVisible: boolean
  onClose: () => void
}) {
  if (!isVisible) return null

  return (
    <Modal onClose={onClose}>
      <div className="text-center pb-10">
        <h2 className="text-lg font-bold mb-4 text-gray-800 pb-12">
          ebook enviado
          <br /> para seu email
        </h2>

        <div className="flex flex-col gap-5 justify-center items-center">
          <Image
            src={grocers}
            alt=""
            height={52}
            width={132}
            className="object-contain "
          />

          <h2>
            A Grocers é a plataforma tecnológica que possui tudo que um
            supermercado precisa nos dias de hoje, para o consumidor de hoje
          </h2>
          <div className="flex justify-center items-center">
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
          <div className="w-full max-w-[302px]">
            <a
              className=" w-full bg-[#F44] h-[56px] mt-5 text-white text-18px font-bold flex items-center justify-center"
              href="https://www.grocers.io/"
            >
              Conheça o Grocers
            </a>
          </div>
        </div>
      </div>
    </Modal>
  )
}
