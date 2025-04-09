"use client";

import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const pathName = usePathname();

  console.log("kamu berada di:", pathName);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Getting Started</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isActive =
            pathName === `/docs${item.url === "/" ? "" : item.url}`;

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton isActive={isActive} asChild>
                <Link href={`/docs${item.url === "/" ? "" : item.url}`}>
                  <item.icon />
                  <span className="text-white">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
