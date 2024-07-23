import { cn } from '@/lib/utils';
import React from 'react';

export const Tab = ({
  isSelected,
  name,
  onClick,
}: {
  isSelected: boolean;
  name: string;
  onClick?(): void;
}) => {
  return (
    <div
      className={cn(
        'p-2 uppercase -mb-0.5 text-xs leading-4 hover:bg-ts-grey-50 cursor-pointer',
        isSelected
          ? 'text-ts-purple border-ts-purple border-b-4'
          : 'text-ts-brown'
      )}
      onClick={onClick}
    >
      <span>{name}</span>
    </div>
  );
};
