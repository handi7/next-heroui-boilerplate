import Link from "next/link";

import { Navbar } from "@/components/navbar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-[100dvh]">
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
