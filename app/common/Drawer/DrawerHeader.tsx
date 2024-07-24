import React from 'react';
import closeIcon from '@/public/svg/close.svg';
import Image from 'next/image';
import { DrawerContext } from './Drawer';

export const DrawerHeader = ({ title }: { title: string }) => {
  return (
    <DrawerContext.Consumer>
      {({ onClose }) => (
        <div className="sticky top-0 z-10 py-4 flex items-center justify-between gap-4">
          <h5 className="text-2xl font-semibold flex-1 text-ts-purple">{title}</h5>
          <button
            type="button"
            className="p-1.5 hover:bg-ts-light-white rounded-xl flex items-center justify-center"
          >
            <Image
              src={closeIcon}
              alt="icon"
              width={24}
              height={24}
              priority
              onClick={onClose}
            />
          </button>
        </div>
      )}
    </DrawerContext.Consumer>
  );
};
