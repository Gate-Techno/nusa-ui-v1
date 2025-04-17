import DocsLayout from "@/components/templates/DocsLayout";
import { HeadMetaData } from "@/components/meta/HeadMetaData";

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
      <div className="w-2/3 flex flex-col">
        <div className="mx-5 space-y-2 min-h-screen">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight">
            Introduction
          </h1>
          <p className="text-base text-muted-foreground">
            shadcn/ui is a set of beautifully-designed, accessible components
            and a code distribution platform. Works with your favorite
            frameworks and AI models. Open Source. Open Code.
          </p>
        </div>
        <div className="mx-5 space-y-2 min-h-screen">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight">
            Introduction
          </h1>
          <p className="text-base text-muted-foreground">
            shadcn/ui is a set of beautifully-designed, accessible components
            and a code distribution platform. Works with your favorite
            frameworks and AI models. Open Source. Open Code.
          </p>
        </div>
      </div>
    </DocsLayout>
  );
}
