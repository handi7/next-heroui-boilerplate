"use client";

import { Card, CardBody, Chip, Divider } from "@heroui/react";
import { Anchor, Book, Box, FileText, FolderTree, Layers, Server } from "lucide-react";

import Icon from "@/components/shared/Icon";

export default function DocsPage() {
  return (
    <div className="flex flex-col gap-8 py-8 md:py-10">
      <div className="w-full text-center justify-center items-center">
        <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
        <p className="text-lg text-default-500 mt-4">
          Comprehensive guide to the Next.js + HeroUI Boilerplate structure and features.
        </p>
      </div>

      <Divider className="my-4" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sidebar / Table of Contents */}
        <aside className="md:col-span-3 hidden md:block">
          <nav className="flex flex-col gap-2 sticky top-24">
            <a href="#introduction" className="text-primary font-medium">
              Introduction
            </a>
            <a
              href="#structure"
              className="text-default-500 hover:text-foreground transition-colors"
            >
              Project Structure
            </a>
            <a href="#pages" className="text-default-500 hover:text-foreground transition-colors">
              Pages & Routing
            </a>
            <a
              href="#components"
              className="text-default-500 hover:text-foreground transition-colors"
            >
              Components
            </a>
            <a href="#hooks" className="text-default-500 hover:text-foreground transition-colors">
              Hooks
            </a>
            <a href="#actions" className="text-default-500 hover:text-foreground transition-colors">
              Actions & API
            </a>
            <a href="#utils" className="text-default-500 hover:text-foreground transition-colors">
              Utils
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="md:col-span-9 flex flex-col gap-12">
          {/* Introduction */}
          <section id="introduction" className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Icon name="book" size={24} className="text-primary" />
              <h2 className="text-2xl font-bold">Introduction</h2>
            </div>
            <p className="text-default-500">
              This boilerplate is built with Next.js 15, Tailwind CSS, and HeroUI. It follows a
              modular architecture to ensure scalability and maintainability.
            </p>
          </section>

          <Divider />

          {/* Project Structure */}
          <section id="structure" className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Icon name="folder-tree" size={24} className="text-secondary" />
              <h2 className="text-2xl font-bold">Project Structure</h2>
            </div>
            <p className="text-default-500">
              The project is organized into the following key directories:
            </p>
            <div className="grid grid-cols-1 gap-4">
              <StructureItem
                name="app/"
                description="Contains the application routes, layouts, and pages, organized by route groups."
              />
              <StructureItem
                name="components/"
                description="Holds all UI components. 'shared/' contains reusable atoms like inputs and buttons."
              />
              <StructureItem
                name="hooks/"
                description="Custom React hooks for logic reuse across components."
              />
              <StructureItem
                name="actions/"
                description="Server Actions for handling form submissions and data mutations."
              />
              <StructureItem name="utils/" description="Helper functions and utilities." />
              <StructureItem
                name="config/"
                description="Configuration files for the site, fonts, and other static settings."
              />
            </div>
          </section>

          <Divider />

          {/* Pages & Routing */}
          <section id="pages" className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Icon name="layers" size={24} className="text-primary" />
              <h2 className="text-2xl font-bold">Pages & Routing</h2>
            </div>
            <p className="text-default-500">
              The application uses Next.js Route Groups to organize pages without affecting the URL
              structure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StructureItem
                name="(public)"
                description="Publicly accessible pages like the Landing Page (/) and Documentation (/docs)."
              />
              <StructureItem
                name="(auth)"
                description="Authentication related pages like Login (/login)."
              />
              <StructureItem
                name="(private)"
                description="Protected pages requiring authentication, such as the Dashboard (/dashboard)."
              />
              <StructureItem name="(api)" description="API routes for backend integration." />
            </div>
          </section>

          <Divider />

          {/* Components */}
          <section id="components" className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Icon name="box" size={24} className="text-warning" />
              <h2 className="text-2xl font-bold">Components</h2>
            </div>
            <p className="text-default-500">
              Reusable components found in <code className="text-primary">components/shared</code>.
            </p>
            <div className="flex flex-wrap gap-2">
              <Chip variant="flat" color="primary">
                Button
              </Chip>
              <Chip variant="flat" color="primary">
                InputText
              </Chip>
              <Chip variant="flat" color="primary">
                InputSelect
              </Chip>
              <Chip variant="flat" color="primary">
                InputDate
              </Chip>
              <Chip variant="flat" color="primary">
                InputCheckbox
              </Chip>
              <Chip variant="flat" color="primary">
                InputRadio
              </Chip>
              <Chip variant="flat" color="primary">
                InputAutocomplete
              </Chip>
              <Chip variant="flat" color="primary">
                InputNumber
              </Chip>
            </div>
          </section>

          <Divider />

          {/* Hooks */}
          <section id="hooks" className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Icon name="anchor" size={24} className="text-success" />
              <h2 className="text-2xl font-bold">Hooks</h2>
            </div>
            <div className="flex flex-col gap-3">
              <HookItem
                name="useFetch"
                description="Data fetching hook with loading and error states."
              />
              <HookItem
                name="useDebounceCallback"
                description="Delays function execution until after a wait period."
              />
              <HookItem
                name="useLocalStorage"
                description="Manages state synchronized with localStorage."
              />
              <HookItem
                name="useOnlineStatus"
                description="Detects if the user is online or offline."
              />
              <HookItem
                name="useQueryParams"
                description="Simplifies reading and updating URL query parameters."
              />
              <HookItem
                name="useResetScroll"
                description="Resets window scroll position on route change."
              />
              <HookItem
                name="useUnsavedChangesGuard"
                description="Warns users before leaving a page with unsaved changes."
              />
            </div>
          </section>

          <Divider />

          {/* Actions & API */}
          <section id="actions" className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Icon name="server" size={24} className="text-danger" />
              <h2 className="text-2xl font-bold">Actions & API</h2>
            </div>
            <p className="text-default-500">
              Server-side logic located in <code className="text-primary">actions/</code>.
            </p>
            <div className="grid grid-cols-1 gap-3">
              <StructureItem
                name="auth.action.tsx"
                description="Handles user authentication (login, logout) and session management."
              />
              <StructureItem
                name="revalidate.action.tsx"
                description="Server action to revalidate Next.js cache paths."
              />
              <StructureItem
                name="api.ts"
                description="Base API configuration and fetch wrappers for making requests to the backend."
              />
            </div>
          </section>

          <Divider />

          {/* Utils */}
          <section id="utils" className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Icon name="file-text" size={24} className="text-default-600" />
              <h2 className="text-2xl font-bold">Utils</h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <StructureItem
                name="page-fetch.ts"
                description="Utilities for handling pagination and data fetching parameters."
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function StructureItem({ name, description }: { name: string; description: string }) {
  return (
    <Card className="border-none bg-default-50">
      <CardBody>
        <h3 className="font-mono font-bold text-primary">{name}</h3>
        <p className="text-sm text-default-500 mt-1">{description}</p>
      </CardBody>
    </Card>
  );
}

function HookItem({ name, description }: { name: string; description: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-3 rounded-lg hover:bg-default-50 transition-colors">
      <code className="text-primary font-bold min-w-[200px]">{name}</code>
      <p className="text-sm text-default-500">{description}</p>
    </div>
  );
}
