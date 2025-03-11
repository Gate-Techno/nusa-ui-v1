import DocsLayout from "@/layouts/DocsLayout";
import { HeadMetaData } from "@/components/layout/HeadMetaData";
export default function InstallationPage() {

  return (
    <DocsLayout>
      <HeadMetaData title="Installation" />
      <div className="mx-5 space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Installation
        </h1>
        <div className="mx-5 grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
      </div>
    </DocsLayout>
  );
}
