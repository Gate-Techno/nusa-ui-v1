import { FC, ReactNode } from "react";
import { SidebarLeft } from "@/components/container/sidebar-left";
import { SidebarRight } from "@/components/container/sidebar-right";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

type SidebarContentItem = {
  title: string;
  href: string;
};

type DocsLayoutProps = {
  children: ReactNode;
  sidebarContents?: SidebarContentItem[];
};

const DocsLayout: FC<DocsLayoutProps> = ({ children, sidebarContents }) => {
  const defaultSidebarContent: SidebarContentItem[] = [
    {
      title: "No Content",
      href: "#",
    },
  ];

  return (
    <div className="bg-gradient min-h-screen">
      <SidebarProvider>
        <SidebarLeft />
        <SidebarInset>
          <header className="sticky top-0 flex h-14 items-center gap-2 bg-transparent px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">Docs</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <main className="px-36">{children}</main>
        </SidebarInset>
        {/* <SidebarRight contents={sidebarContents ?? defaultSidebarContent} /> */}
      </SidebarProvider>
    </div>
  );
};

export default DocsLayout;
