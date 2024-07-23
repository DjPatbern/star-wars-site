import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export const BlogCardSkeleton = () => {
  return (
    <div className="flex-col flex py-1.5 px-1.5 rounded gap-4 border shadow-mood hover:border-ts-green mb-8">
      <div>
        <Skeleton className="h-32 w-44" />
      </div>

      <div>
        <Skeleton className="h-16 w-40" />
      </div>
      <div>
      <Skeleton className="h-14 w-44" />
      </div>
    </div>
  );
};
