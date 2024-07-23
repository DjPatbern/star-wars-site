import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

const Card = ({
  children,
  className,
  ...props
}: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'rounded-xl shadow-md flex flex-col items-start',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
