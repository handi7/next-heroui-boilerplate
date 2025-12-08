"use client";

import "highlight.js/styles/github-dark.css";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Function to transform image paths
  const transformImageUri = (uri: string) => {
    if (uri.startsWith("./public/")) {
      return uri.replace("./public/", "/");
    }
    return uri;
  };

  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        urlTransform={transformImageUri}
        components={{
          img: ({ node, ...props }) => (
            <img {...props} className="rounded-lg border border-default-200 shadow-sm" />
          ),
          a: ({ node, ...props }) => (
            <a
              {...props}
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            />
          ),
          pre: ({ node, ...props }) => (
            <pre {...props} className="bg-default-100 p-4 rounded-lg overflow-x-auto" />
          ),
          code: ({ node, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return !match ? (
              <code
                {...props}
                className="bg-default-100 px-1 py-0.5 rounded text-sm text-danger font-mono"
              >
                {children}
              </code>
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
