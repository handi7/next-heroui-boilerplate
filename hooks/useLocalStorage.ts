"use client";

import { useCallback, useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error("Error reading localStorage key “" + key + "”:", err);

      return initialValue;
    }
  });

  // Set value ke localStorage
  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;

        setStoredValue(valueToStore);
        if (typeof window !== "undefined") {
          localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (err) {
        console.error("Error setting localStorage key “" + key + "”:", err);
      }
    },
    [key, storedValue],
  );

  // Hapus dari localStorage
  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (err) {
      console.error("Error removing localStorage key “" + key + "”:", err);
    }
  }, [key, initialValue]);

  return [storedValue, setValue, remove] as const;
}

export default useLocalStorage;
