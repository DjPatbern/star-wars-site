import localFont from 'next/font/local';

// ...


export const geologica = localFont({
  src: [
    {
      path: '../../public/fonts/Geologica_Auto-Light.ttf',
      weight: '300',
      style: 'thin',
    },
    {
      path: '../../public/fonts/Geologica-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Geologica-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/fonts/Geologica-SemiBold.ttf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../../public/fonts/Geologica-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-geologica',
});

export const garamond = localFont({
  src: [
    {
      path: '../../public/fonts/EBGaramond-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/EBGaramond-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/fonts/EBGaramond-SemiBold.ttf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../../public/fonts/EBGaramond-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-eb-garamond',
});

