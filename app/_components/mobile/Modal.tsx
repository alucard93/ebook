import { useEffect } from 'react'
import CloseButton from '../CloseButton'

export default function Modal({ children, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 rounded-[21px] shadow-lg w-full relative">
        <CloseButton onClick={onClose} />
        {children}
      </div>
    </div>
  )
}
