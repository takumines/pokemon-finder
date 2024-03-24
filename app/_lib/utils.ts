import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractIdFromUrl = (url: string): number | undefined => {
  const pattern: RegExp = /(\d+)\/?$/;
  const match = url.match(pattern);

  return match && match[1] ? parseInt(match[1], 10) : undefined;
};
