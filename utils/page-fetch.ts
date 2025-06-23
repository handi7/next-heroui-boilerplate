import { redirect } from "next/navigation";

interface FetchOptions extends RequestInit {
  authToken?: string;
}

export async function pageFetch(url: string, options: FetchOptions = {}) {
  const { authToken, ...rest } = options;

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    redirect("/login");
  };

  const res = await fetch(url, {
    ...rest,
    headers: {
      ...(rest.headers || {}),
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    },
  });

  if (res.status === 401) handleLogout();

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  return res;
}
