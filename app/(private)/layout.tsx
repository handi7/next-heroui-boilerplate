import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import React, { PropsWithChildren } from "react";

import { Navbar } from "@/components/navbar";

async function PrivateLayout({ children }: PropsWithChildren) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("access_token");

  if (!accessToken) {
    redirect("/login");
  }

  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />

      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main>

      <footer className="w-full flex items-center justify-center py-3">
        <Link
          target="_blank"
          className="flex items-center gap-1 text-current"
          href="https://heroui.com?utm_source=next-app-template"
          title="heroui.com homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">HeroUI</p>
        </Link>
      </footer>
    </div>
  );
}

export default PrivateLayout;
