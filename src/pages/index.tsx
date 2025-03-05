import Hero from "@/components/container/hero";
import { HeadMetaData } from "@/components/layout/HeadMetaData";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionContainer } from "@/components/layout/SectionContainer";

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
