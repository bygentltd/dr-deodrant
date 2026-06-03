import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

export const cabinet = localFont({
  src: [
    {
      path: '../../public/fonts/CabinetGrotesk-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CabinetGrotesk-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    //   {
    //   path: '../../public/fonts/CabinetGrotesk-Regular.ttf',
    //   weight: '400',
    //   style: 'normal',
    // },
  ],
  variable: '--font-inter',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
})