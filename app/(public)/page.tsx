"use client";

import Link from "next/link";

import { Button } from "@heroui/react";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { Chip } from "@heroui/react";
import { ArrowRight, Code2, Moon, Smartphone, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-10">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center gap-6 py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />

        <Chip variant="flat" color="primary" size="sm" className="mb-2">
          v1.0.0 Now Available
        </Chip>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
          Build Faster with <br />
          <span className="text-primary">Next.js & HeroUI</span>
        </h1>

        <p className="text-xl text-default-500 max-w-2xl">
          A premium, production-ready boilerplate designed to help you ship modern web applications
          with speed and confidence.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Button
            as={Link}
            href="/docs"
            color="primary"
            size="lg"
            endContent={<ArrowRight size={18} />}
            className="font-semibold"
          >
            Get Started
          </Button>
          <Button
            as={Link}
            target="_blank"
            href="https://github.com/handi7/next-heroui-boilerplate"
            variant="bordered"
            size="lg"
            startContent={<Code2 size={18} />}
          >
            View on GitHub
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <FeatureCard
          icon={<Zap size={24} className="text-warning" />}
          title="Lightning Fast"
          description="Built on Next.js 15 with Turbopack for instant feedback and optimal performance."
        />
        <FeatureCard
          icon={<Moon size={24} className="text-primary" />}
          title="Dark Mode Ready"
          description="Seamless dark mode integration with next-themes and HeroUI's powerful theming system."
        />
        <FeatureCard
          icon={<Smartphone size={24} className="text-success" />}
          title="Fully Responsive"
          description="Mobile-first design ensuring your app looks stunning on any device screen size."
        />
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-4 border-none bg-content1/50 backdrop-blur-lg hover:bg-content1 transition-all duration-300">
      <CardHeader className="flex gap-3">
        <div className="p-2 rounded-lg bg-default-100">{icon}</div>
        <div className="flex flex-col">
          <p className="text-md font-bold">{title}</p>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-default-500">{description}</p>
      </CardBody>
    </Card>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-3xl font-bold text-primary">{value}</h3>
      <p className="text-sm text-default-500 uppercase tracking-wider">{label}</p>
    </div>
  );
}
