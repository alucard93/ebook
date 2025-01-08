import React, { FC } from 'react'

type CloseButtonProps = {
  onClick?: () => void
}

const CloseButton: FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <div className="p-4">
      <button
        type="button"
        onClick={onClick}
        aria-label="Close"
        className="absolute top-0 right-4 p-2 bg-transparent border-none cursor-pointer flex items-center justify-center hover:opacity-80 focus:outline-none"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 fill-black"
        >
          <path d="M0.89975 13L6.06575 6.016V7.042L1.20575 0.399999H2.73575L6.82175 5.944L6.22775 5.962L10.3138 0.399999H11.7538L6.94775 6.952V6.016L12.0958 13H10.5478L6.19175 7.078H6.74975L2.42975 13H0.89975Z" />
        </svg>
      </button>
    </div>
  )
}

export default CloseButton
