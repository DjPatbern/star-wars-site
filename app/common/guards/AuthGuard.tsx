'use client';
// import { useUserContext } from '@/src/stores/user.context';
import { Fragment, ReactNode } from 'react';
// import { useCustomRouter } from '@/src/hooks/useCustomRouter';

const AuthGuard = ({ children }: { children: ReactNode }) => {
  // const { push } = useCustomRouter();
  // const { isAuthenticated, isInitialisingUser } = useUserContext();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     push('/');
  //   }
  // }, [isAuthenticated, push]);

  // if (isInitialisingUser) {
  //   return (
  //     <div className="w-screen h-screen flex justify-center items-center">
  //       <Spinner className="w-10 h-10" />
  //     </div>
  //   );
  // }

  return <Fragment>{children}</Fragment>;
};

export default AuthGuard;
