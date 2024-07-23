import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const excerpt = (str:string, count:number) => {
  if (str.length > count) {
    str = str.substring(0, count) + " ... ";
  }
  return str;
};