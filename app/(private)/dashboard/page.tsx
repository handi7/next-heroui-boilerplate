"use client";

import { Button, Card, CardBody, CardHeader, Chip, Divider, User } from "@heroui/react";
import { Activity, ArrowUpRight, CreditCard, DollarSign, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-default-500">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Users"
          value="1,234"
          change="+12%"
          icon={<Users className="text-primary" />}
        />
        <StatsCard
          title="Revenue"
          value="$45,678"
          change="+5.2%"
          icon={<DollarSign className="text-success" />}
        />
        <StatsCard
          title="Active Sessions"
          value="567"
          change="-1.5%"
          changeType="negative"
          icon={<Activity className="text-warning" />}
        />
        <StatsCard
          title="Subscriptions"
          value="89"
          change="+8%"
          icon={<CreditCard className="text-secondary" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex justify-between items-center px-6 py-4">
            <h3 className="text-lg font-semibold">Recent Activity</h3>
            <Button size="sm" variant="flat" endContent={<ArrowUpRight size={16} />}>
              View All
            </Button>
          </CardHeader>
          <Divider />
          <CardBody className="px-6 py-4 gap-4">
            <ActivityItem
              user="Tony Reichert"
              action="deployed"
              target="website-v2"
              time="2 mins ago"
              avatar="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
            <ActivityItem
              user="Zoey Lang"
              action="commented on"
              target="Pull Request #45"
              time="15 mins ago"
              avatar="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <ActivityItem
              user="Jane Fisher"
              action="completed"
              target="Onboarding Task"
              time="1 hour ago"
              avatar="https://i.pravatar.cc/150?u=a04258114e29026702d"
            />
            <ActivityItem
              user="William Howard"
              action="updated"
              target="Profile Settings"
              time="3 hours ago"
              avatar="https://i.pravatar.cc/150?u=a048581f4e29026024d"
            />
          </CardBody>
        </Card>

        {/* Quick Actions / Status */}
        <div className="flex flex-col gap-6">
          <Card className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white border-none">
            <CardBody className="p-6">
              <h3 className="text-xl font-bold mb-2">Upgrade to Pro</h3>
              <p className="text-white/80 mb-6">
                Unlock all features and get unlimited access to our support team.
              </p>
              <Button className="bg-white text-primary font-semibold w-full">Upgrade Now</Button>
            </CardBody>
          </Card>

          <Card>
            <CardHeader className="px-6 py-4">
              <h3 className="text-lg font-semibold">System Status</h3>
            </CardHeader>
            <Divider />
            <CardBody className="px-6 py-4 gap-4">
              <div className="flex justify-between items-center">
                <span className="text-default-500">API Status</span>
                <Chip color="success" variant="dot" size="sm">
                  Operational
                </Chip>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-default-500">Database</span>
                <Chip color="success" variant="dot" size="sm">
                  Operational
                </Chip>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-default-500">Storage</span>
                <Chip color="warning" variant="dot" size="sm">
                  Degraded
                </Chip>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

function StatsCard({
  title,
  value,
  change,
  icon,
  changeType = "positive",
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  changeType?: "positive" | "negative";
}) {
  return (
    <Card>
      <CardBody className="flex flex-row items-center justify-between p-4">
        <div className="flex flex-col gap-1">
          <span className="text-default-500 text-sm">{title}</span>
          <span className="text-2xl font-bold">{value}</span>
          <span className={`text-xs ${changeType === "positive" ? "text-success" : "text-danger"}`}>
            {change} from last month
          </span>
        </div>
        <div className="p-3 rounded-lg bg-default-100">{icon}</div>
      </CardBody>
    </Card>
  );
}

function ActivityItem({
  user,
  action,
  target,
  time,
  avatar,
}: {
  user: string;
  action: string;
  target: string;
  time: string;
  avatar: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <User
          name={user}
          description={action}
          avatarProps={{ src: avatar, size: "sm" }}
          classNames={{ name: "font-semibold", description: "text-default-400" }}
        />
        <span className="text-default-500 text-sm">
          {action} <span className="text-foreground font-medium">{target}</span>
        </span>
      </div>
      <span className="text-xs text-default-400">{time}</span>
    </div>
  );
}
