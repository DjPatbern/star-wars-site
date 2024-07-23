import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React, { PropsWithChildren } from 'react';
import nothingIcon from '@/public/svg/nothing.svg';

type Props = {
  imageSrc?: StaticImport;
  imgProps?: any;
  text: string;
};

const EmptyComponent = ({
  imageSrc = nothingIcon,
  imgProps,
  text,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div className="flex flex-col items-center justify-center my-12 w-full p-2">
      <Image
        src={imageSrc}
        alt="nothing icon"
        className="object-contain mb-8 m-auto"
        priority
        {...imgProps}
      />
      <p className="text-center text-lg font-medium text-[#353535] mb-12 lg:px-10">
        {text}
      </p>
      {children}
    </div>
  );
};

export default EmptyComponent;
