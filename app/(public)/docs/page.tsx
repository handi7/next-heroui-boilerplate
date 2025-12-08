import fs from "fs";
import path from "path";

import MarkdownRenderer from "@/components/docs/MarkdownRenderer";

export default function DocsPage() {
  const readmePath = path.join(process.cwd(), "README.md");
  const content = fs.readFileSync(readmePath, "utf8");

  return (
    <div className="flex flex-col gap-8 py-8 md:py-10">
      <div className="w-full text-center justify-center items-center">
        <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
        <p className="text-lg text-default-500 mt-4">
          Comprehensive guide to the Next.js + HeroUI Boilerplate structure and features.
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <MarkdownRenderer content={content} />
      </div>
    </div>
  );
}
