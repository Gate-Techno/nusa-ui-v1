import DocsLayout from "@/layouts/DocsLayout";
import { HeadMetaData } from "@/components/layout/HeadMetaData";

export default function DocsPage() {
  const sidebarContents = [
    { title: "Open Code", href: "#" },
    { title: "Composition", href: "#" },
    { title: "Distribution", href: "#" },
    { title: "Beautiful Defaults", href: "#" },
    { title: "AI-Ready", href: "#" },
  ];

  return (
    <DocsLayout sidebarContents={sidebarContents}>
      <HeadMetaData title="Docs" />
      <div className="mx-5 space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Introduction
        </h1>
        <p className="text-base text-muted-foreground w-2/3">
          shadcn/ui is a set of beautifully-designed, accessible components and
          a code distribution platform. Works with your favorite frameworks and
          AI models. Open Source. Open Code.
        </p>
      </div>
    </DocsLayout>
  );
}
