import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import React, { PropsWithChildren } from "react";

async function AuthLayout({ children }: PropsWithChildren) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("access_token");

  if (accessToken) {
    redirect("/");
  }

  return <>{children}</>;
}

export default AuthLayout;
