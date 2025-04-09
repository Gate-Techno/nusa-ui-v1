"use client";

import * as React from "react";
import {
  AudioWaveform,
  Blocks,
  Calendar,
  Command,
  Home,
  Inbox,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react";

import { NavComponents } from "@/components/container/nav-components";
import { NavMain } from "@/components/container/nav-main";
import { NavSecondary } from "@/components/container/nav-secondary";
import { TeamSwitcher } from "@/components/container/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  teams: [
    {
      name: "Nusa UI",
      logo: Command,
      plan: "Pro",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Introduction",
      url: "/",
      icon: Sparkles,
    },
    {
      title: "Installation",
      url: "/installation",
      icon: Home,
    },
    {
      title: "Typography",
      url: "/typography",
      icon: Inbox,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Templates",
      url: "#",
      icon: Blocks,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
  components: [
    {
      name: "Accordion",
      url: "components/accordion",
    },
    {
      name: "Button",
      url: "components/button",
    },
    {
      name: "Alert",
      url: "components/alert",
    },
    {
      name: "Card",
      url: "components/card",
    },
    {
      name: "Carousel",
      url: "components/carousel",
    },
    {
      name: "Form",
      url: "components/form",
    },
    {
      name: "Pagination",
      url: "components/pagination",
    },
    {
      name: "Modal",
      url: "components/modal",
    },
  ],
};

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="lg:pt-20 md:pt-20" {...props}>
      {/* <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader> */}
      <SidebarContent className="px-5">
        <NavMain items={data.navMain} />
        <NavComponents components={data.components} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
