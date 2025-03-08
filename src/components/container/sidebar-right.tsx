import * as React from "react";
import { Plus } from "lucide-react";

import { NavUser } from "@/components/container/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Picerld",
    email: "picerld@local.gg",
    avatar:
      "https://avatars.githubusercontent.com/u/155806349?s=400&u=cb7edbf14c9714664328766409d1ec71449f8430&v=4",
  },
  calendars: [
    {
      name: "My Calendars",
      items: ["Personal", "Work", "Family"],
    },
    {
      name: "Favorites",
      items: ["Holidays", "Birthdays"],
    },
    {
      name: "Other",
      items: ["Travel", "Reminders", "Deadlines"],
    },
  ],
  contents: [
    {
      title: "Open Code",
      href: "#",
    },
    {
      title: "Composition",
      href: "#",
    },
    {
      title: "Distribution",
      href: "#",
    },
    {
      title: "Beautiful Defaults",
      href: "#",
    },
    {
      title: "AI-Ready",
      href: "#",
    },
  ],
};

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky hidden lg:flex top-0 h-svh bg-transparent"
      {...props}
    >
      <SidebarHeader className="h-16 border-sidebar-border">
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent className="mx-4">
        <h3 className="text-base font-semibold my-1">On this page</h3>
        <div className="flex flex-col gap-[0.6rem]">
          {data.contents.map((content) => (
            <a key={content.title} href={content.href}>
              <h4 className="text-sm text-muted-foreground hover:text-white transition-all duration-200">
                {content.title}
              </h4>
            </a>
          ))}
        </div>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>Create your own componens</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
