import { FC, ReactNode } from "react";
import { SidebarLeft } from "@/components/container/sidebar-left";
import { NavigationContent } from "@/components/container/navigation-content";
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
import NavbarDocs from "@/components/container/navbar-docs";

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
    <>
      {/* DOCS NAVBAR */}

      <div className="bg-gradient h-screen flex flex-col">
        <NavbarDocs />
        
        <SidebarProvider>
          <SidebarLeft />
          <SidebarInset>
            <header
              className="flex items-center gap-2 bg-transparent px-3 pt-20 pb-3"
              aria-hidden="true"
            >
              <SidebarTrigger />
              <Separator orientation="vertical" className="h-7" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="line-clamp-1 text-white font-semibold text-base">
                      Docs
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </header>
            <main className="p-4 flex-1 overflow-auto">{children}</main>
          </SidebarInset>
          <NavigationContent contents={sidebarContents ?? defaultSidebarContent} />
        </SidebarProvider>
      </div>
    </>
  );
};

export default DocsLayout;
