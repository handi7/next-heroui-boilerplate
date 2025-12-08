"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { apiPOST } from "./api";

import { LoginInput } from "@/types/auth.type";

export async function login(payload: LoginInput, callbackURL?: string) {
  const res = await apiPOST("/auth/login", payload);

  if (!res.success) return res;

  const cookieStore = await cookies();

  if (res.data.access_token) {
    cookieStore.set("access_token", res.data.access_token);
  }

  if (res.data.user) {
    cookieStore.set("user", JSON.stringify(res.data.user));
  }

  redirect(callbackURL || "/dashboard");
}

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete("access_token");
  cookieStore.delete("user");

  redirect("/login");
}
