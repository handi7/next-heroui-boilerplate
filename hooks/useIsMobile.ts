"use client";

import { useEffect, useState } from "react";

import useMounted from "./useMounted";

export function useIsMobile(breakpoint: number = 767) {
  const isMounted = useMounted();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!isMounted) return;

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    setIsMobile(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      // Safari
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, [breakpoint]);

  return isMobile;
}
