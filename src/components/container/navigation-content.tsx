import * as React from "react";
import { CalendarDays, Github, HandHeart } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

interface NavigationContentProps
  extends React.ComponentPropsWithoutRef<typeof Sidebar> {
  contents?: {
    title: string;
    href: string;
  }[];
}

export function NavigationContent({ contents, ...props }: NavigationContentProps) {
  return (
    <Sidebar
      collapsible="none"
      className="fixed right-0 top-0 h-svh bg-transparent hidden lg:flex pt-20"
      {...props}
    >
      {/* <SidebarHeader className="h-16 border-sidebar-border">
        <NavUser user={data.user} />
      </SidebarHeader> */}
      <SidebarContent className="mx-4">
        <h3 className="text-base font-semibold my-1">On this page</h3>
        <div className="flex flex-col gap-[0.6rem]">
          {" "}
          {contents?.map((content) => (
            <a key={content.title} href={content.href}>
              <h4 className="text-sm text-white hover:text-muted-foreground transition-all duration-200">
                {content.title}
              </h4>
            </a>
          ))}
        </div>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="mb-2">
          <SidebarMenuItem>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button
                  variant={"neobrutalism"}
                  size={"sm"}
                  className="w-full flex justify-start"
                >
                  <HandHeart className="text-black size-6" />
                  <span className="text-black">Support Us!</span>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@nusaui ❤️</h4>
                    <p className="text-sm">
                      Nusa UI is a free and open-source UI component library for
                      Tailwind CSS.
                    </p>
                    <div className="grid grid-cols-2">
                      <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          baru saja
                        </span>
                      </div>
                      <div className="flex items-center pt-2">
                        <Github className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <Link
                          href={"https://github.com/Gate-Techno/nusa-ui-v1"}
                          target="_blank"
                        >
                          <Button variant={"link"} className="p-0">
                            @nusaui
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
