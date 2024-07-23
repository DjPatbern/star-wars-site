// NextTopLoader.tsx
'use client';
import Loader from 'nextjs-toploader';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import * as NProgress from 'nprogress';

export const NextTopLoader = () => {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.done();
  }, [pathname]);

  return <Loader />;
};
