import { HeadMetaData } from "@/components/meta/HeadMetaData";
import DocsLayout from "@/components/templates/DocsLayout";

export default function AccordionPage() {
  return (
    <DocsLayout>
      <HeadMetaData title="Accordion" />
      <div className="w-2/3 flex flex-col gap-5">
        <div className="mx-5 space-y-2">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight">
            Accordion
          </h1>
          <p className="text-base text-muted-foreground">
            shadcn/ui is a set of beautifully-designed, accessible components
            and a code distribution platform. Works with your favorite
            frameworks and AI models. Open Source. Open Code.
          </p>
        </div>
        <div className="flex flex-col w-full">
          <div className="space-y-2">
            <div className="mx-5 grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
