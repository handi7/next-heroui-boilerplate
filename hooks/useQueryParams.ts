"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { useMemo } from "react";

type QueryValue = string | number | boolean | null | undefined;
type QueryObject = Record<string, QueryValue>;

function useQueryParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = useMemo(() => new URLSearchParams(searchParams.toString()), [searchParams]);

  const get = (key: string): string | null => query.get(key);

  const compare = (key: string, expected: string): boolean => get(key) === expected;

  const update = (updates: QueryObject) => {
    const params = new URLSearchParams(query.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === undefined || value === "") {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    });

    router.replace(`?${params.toString()}`);
  };

  const clear = (keys: string[]) => {
    const params = new URLSearchParams(query.toString());

    keys.forEach((key) => params.delete(key));
    router.replace(`?${params.toString()}`);
  };

  const setAndClear = (updates: QueryObject, keysToDelete: string[]) => {
    const params = new URLSearchParams(query.toString());

    keysToDelete.forEach((key) => params.delete(key));

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === undefined || value === "") {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    });

    router.replace(`?${params.toString()}`);
  };

  return {
    query,
    get,
    compare,
    update,
    clear,
    setAndClear,
  };
}

export default useQueryParams;
