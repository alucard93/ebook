import { Montserrat } from 'next/font/google'
import { Abhaya_Libre } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '700'],
})

export const abhaya = Abhaya_Libre({ subsets: ['latin'], weight: ['800'] })
