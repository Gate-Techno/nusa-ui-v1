import Hero from "@/components/container/hero";
import { HeadMetaData } from "@/components/meta/HeadMetaData";
import { PageContainer } from "@/components/elements/PageContainer";
import { SectionContainer } from "@/components/elements/SectionContainer";

export default function Home() {
  return (
    <PageContainer>
      <HeadMetaData title="Home" metaDescription="Home page of Nusa UI" />
      <SectionContainer centerContent>
        <Hero />
      </SectionContainer>
    </PageContainer>
  );
}
