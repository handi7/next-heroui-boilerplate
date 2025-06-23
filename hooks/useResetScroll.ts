"use client";

import { usePathname } from "next/navigation";

import { useEffect } from "react";

export function useResetScroll() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
}
