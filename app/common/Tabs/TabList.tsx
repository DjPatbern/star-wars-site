import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export const TabList = ({
  children,
  className,
}: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'border-b-2 border-s-grey px-2 lg:px-6 flex items-center gap-[5.75rem]',
        className
      )}
    >
      {children}
    </div>
  );
};
