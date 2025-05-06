"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavComponents({
  components,
}: {
  components: {
    name: string;
    url: string;
  }[];
}) {

  const pathName = usePathname();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Components</SidebarGroupLabel>
      <SidebarMenu>
        {components.map((item) => {
          const isActive = pathName === `/docs/${item.url === "/" ? "" : item.url}`;

          return (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton isActive={isActive} asChild>
                <Link href={`/docs/${item.url === "/" ? "" : item.url}`}>
                  <span className="text-white">{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
