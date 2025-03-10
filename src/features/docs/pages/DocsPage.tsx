import { SidebarLeft } from "@/components/container/sidebar-left";
import { SidebarRight } from "@/components/container/sidebar-right";
import { HeadMetaData } from "@/components/layout/HeadMetaData";
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

export default function DocsPage() {
  const contents = [
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
  ];

  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">Docs</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <HeadMetaData title="Docs" />
        <div className="mx-5 space-y-2">
          <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
            Introduction
          </h1>
          <p className="text-base text-muted-foreground w-2/3">
            shadcn/ui is a set of beautifully-designed, accessible components
            and a code distribution platform. Works with your favorite
            frameworks and AI models. Open Source. Open Code.
          </p>
        </div>
      </SidebarInset>
      <SidebarRight contents={contents} />
    </SidebarProvider>
  );
}
