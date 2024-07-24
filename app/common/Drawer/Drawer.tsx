'use client';
import React, { ReactNode, createContext } from 'react';
import { cn } from '@/lib/utils';

export const DrawerContext = createContext({} as { onClose?: () => void });

export const Drawer = ({
  children,
  isOpen,
  onClose,
  className,
}: {
  children: ReactNode;
  isOpen: boolean;
  onClose?(): void;
  className?: string;
}) => {

  const overlayClickHandler = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <DrawerContext.Provider value={{ onClose }}>
      <div
        className={cn(
          'fixed top-0 left-0 h-full w-full bg-black/70 z-50 transition-all duration-300',
          className
        )}
        onClick={overlayClickHandler}
      >
        <div
          className={cn(
            'fixed top-0 right-0 z-40 h-screen px-4 pb-4 overflow-y-auto transition-transform duration-300 bg-ts-white w-full max-w-md',
            !isOpen && 'translate-x-full'
          )}
        >
          <div className="relative">{children}</div>
        </div>
      </div>
    </DrawerContext.Provider>
  );
};

DrawerContext.displayName = 'Drawer Context';
