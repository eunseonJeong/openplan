"use client";

import { useRef } from "react";

export function useDebouncedFn<T extends (...args: never[]) => void>(fn: T, delay = 500) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
