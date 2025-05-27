import { useEffect, useState } from "react";

import { apiGET } from "@/actions/api";
import { ApiErrorResponse } from "@/types/api.type";

function useFetch<T = any, M = any>(path: string) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<ApiErrorResponse>();

  const getData = async () => {
    setLoading(true);
    setError(undefined);
    const res = await apiGET<T, M>(path);

    setLoading(false);

    if (!res.success) {
      setError(res.error);

      return console.log(res);
    }

    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, [path]);

  return { isLoading, data, error, refetch: getData };
}

export default useFetch;
