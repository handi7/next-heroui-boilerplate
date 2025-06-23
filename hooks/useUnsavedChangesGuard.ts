"use client";

import {
  NavigateOptions,
  PrefetchOptions,
} from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

import { useCallback, useEffect } from "react";

function useUnsavedChangesGuard(activate?: boolean) {
  const router = useRouter();

  const confirmLeave = () => window.confirm("Leave site? Changes you made may not be saved.");

  const handleUnload = useCallback(
    (event: BeforeUnloadEvent) => {
      if (activate) {
        event.preventDefault();
        event.returnValue = "";
      }
    },
    [activate],
  );

  const handleNavigation = (
    navigate: (url: string, options?: NavigateOptions) => void,
    url: string,
    options?: NavigateOptions,
  ) => {
    if (!activate || confirmLeave()) {
      navigate(url, options);
    }
  };

  const back = (options?: { force?: boolean }) => {
    if (options?.force || !activate || confirmLeave()) {
      router.back();
    }
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleUnload);

    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [handleUnload]);

  return {
    router: {
      back,
      forward: () => {
        if (!activate || confirmLeave()) router.forward();
      },
      refresh: () => {
        if (!activate || confirmLeave()) router.refresh();
      },
      prefetch: (url: string, options?: PrefetchOptions) => router.prefetch(url, options),
      push: (url: string, options?: NavigateOptions) => handleNavigation(router.push, url, options),
      replace: (url: string, options?: NavigateOptions) =>
        handleNavigation(router.replace, url, options),
    },
  };
}

export default useUnsavedChangesGuard;
