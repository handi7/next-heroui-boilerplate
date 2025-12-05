import { redirect } from "next/navigation";

interface FetchOptions extends RequestInit {
  authToken?: string;
}

export async function pageFetch(url: string, options: FetchOptions = {}) {
  const { authToken, ...rest } = options;

  const res = await fetch(url, {
    ...rest,
    headers: {
      ...(rest.headers || {}),
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    },
  });

  if (res.status === 401) redirect("/logout");

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  return res;
}
