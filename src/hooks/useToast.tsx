'use client';
import React from 'react';
import hotToast from 'react-hot-toast';
import closeIcon from '@/public/svg/closeToast.svg';
import failureIcon from '@/public/svg/exclamation.svg';
import successIcon from '@/public/svg/checkmark.svg';
import Image from 'next/image';

export type ToastType = 'success' | 'failure';

export const useToast = () => {
  const toast = (message: string, type: ToastType) =>
    hotToast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-xs w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                priority
                src={type === 'success' ? successIcon : failureIcon}
                alt="toast icon"
                width={20}
                height={20}
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-base font-medium text-gray-900">{message}</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => hotToast.remove(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Image
              priority
              src={closeIcon}
              alt="close icon"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
    ));

  return toast;
};
