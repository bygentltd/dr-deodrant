import localFont from 'next/font/local'

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
  variable: '--font-cabinet',
})