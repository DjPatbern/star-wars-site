'use client';
// import { useCustomRouter } from '@/src/hooks/useCustomRouter';
// import { useUserContext } from '@/src/stores/user.context';
import { Fragment, ReactNode, useEffect } from 'react';

const GuestGuard = ({ children }: { children: ReactNode }) => {
  // const { push } = useCustomRouter();
  // const { isAuthenticated } = useUserContext();
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     push('/dashboard');
  //   }
  // }, [isAuthenticated, push]);

  return <Fragment>{children}</Fragment>;
};

export default GuestGuard;
