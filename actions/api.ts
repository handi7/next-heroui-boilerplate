"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { ApiResponse } from "@/types/api.type";

export type RequestInterceptor = (
  url: string,
  options: RequestInit,
) => { url?: string; options?: RequestInit };

export type ResponseInterceptor = <T>(response: Response) => Promise<ApiResponse<T>>;

const BASE_URL = process.env.API_URL;

let refreshed = false;

// Request interceptors
const requestInterceptors: RequestInterceptor[] = [];
const responseInterceptors: ResponseInterceptor[] = [];

export const addRequestInterceptor = async (interceptor: RequestInterceptor) => {
  requestInterceptors.push(interceptor);
};

export const addResponseInterceptor = async (interceptor: ResponseInterceptor) => {
  responseInterceptors.push(interceptor);
};

const request = async <T = any, M = any>(
  url: string,
  options: RequestInit = {},
): Promise<ApiResponse<T, M>> => {
  if (!BASE_URL) {
    console.error("API URL is not defined. Please set the API_URL environment variable.");

    return {
      success: false,
      error: { message: "API URL is not defined" },
    };
  }

  let finalOptions: RequestInit = { ...options };
  let finalUrl: string = `${BASE_URL}${url}`;

  const cookieStore = await cookies();
  const access_token = cookieStore.get("access_token")?.value;
  const refresh_token = cookieStore.get("refresh_token")?.value;

  if (access_token) {
    finalOptions = {
      ...options,
      headers: { ...options.headers, Authorization: `Bearer ${access_token}` },
    };
  }

  // Apply request interceptors
  for (const interceptor of requestInterceptors) {
    const modified = interceptor(finalUrl, finalOptions);

    finalUrl = modified.url || finalUrl;
    finalOptions = modified.options || finalOptions;
  }

  let response = await fetch(finalUrl, finalOptions);

  if (response.status === 401) {
    if (refreshed || !refresh_token) {
      cookieStore.delete("access_token");
      cookieStore.delete("refresh_token");

      return redirect("/login");
    }

    finalOptions.headers = { ...finalOptions.headers, Authorization: `Bearer ${refresh_token}` };

    const res = await fetch(`${BASE_URL}/refresh-token`, finalOptions);

    if (!res.ok) {
      cookieStore.delete("access_token");
      cookieStore.delete("refresh_token");

      return redirect("/login");
    }

    const resData = await res.json();

    cookieStore.set("access_token", resData.data?.access_token);
    cookieStore.set("refresh_token", resData.data?.refresh_token);
    refreshed = true;

    return request(url, options);
  }

  // Apply response interceptors
  for (const interceptor of responseInterceptors) {
    return await interceptor<T>(response);
  }

  // Default handling
  if (!response.ok) {
    const error = await response.json();

    console.error("API Error:", error);

    return error;
  }

  const data = await response.json();

  return data;
};

export const apiGET = async <T = any, M = any>(url: string, options?: RequestInit) =>
  request<T>(url, { method: "GET", ...options });

export const apiPOST = async <T = any>(url: string, body: any, options?: RequestInit) =>
  request<T>(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });

export const apiPUT = async <T = any>(url: string, body: any, options?: RequestInit) =>
  request<T>(url, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });

export const apiDELETE = async <T = any>(url: string, options?: RequestInit) =>
  request<T>(url, { method: "DELETE", ...options });
