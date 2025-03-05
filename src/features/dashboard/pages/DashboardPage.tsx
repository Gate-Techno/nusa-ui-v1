import { HeadMetaData } from "@/components/layout/HeadMetaData";
import { SidebarContainer } from "@/components/layout/SidebarContainer";

export default function DashboardPage() {
  return (
    <SidebarContainer>
      <HeadMetaData title="Beranda" />
      <div className="mx-5 grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
    </SidebarContainer>
  );
}
