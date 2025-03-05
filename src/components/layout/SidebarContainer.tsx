import { forwardRef } from "react";
import { AppSidebar } from "@/components/container/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export const SidebarContainer = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    onPage?: string;
    nextPage?: string;
  }
>(({ className, children, onPage, nextPage, ...props }, ref) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">Beranda</BreadcrumbLink>
                </BreadcrumbItem>
                {onPage && <BreadcrumbSeparator className="hidden md:block" />}
                <BreadcrumbItem>
                  <BreadcrumbPage>{onPage}</BreadcrumbPage>
                </BreadcrumbItem>
                {nextPage && <BreadcrumbSeparator className="hidden md:block" />}
                <BreadcrumbItem>
                  <BreadcrumbPage>{nextPage}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main
          ref={ref}
          className={cn("flex flex-col", className)}
          {...props}
        >
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
});

SidebarContainer.displayName = "SidebarContainer";
