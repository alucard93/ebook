import { ReactNode, useEffect } from 'react'
import CloseButton from '../CloseButton'

interface ModalProps {
  children: ReactNode
  onClose: () => void
}

export default function Modal({ children, onClose }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 rounded-[21px] shadow-lg w-full relative md:max-w-96">
        <CloseButton onClick={onClose} />
        {children}
      </div>
    </div>
  )
}
