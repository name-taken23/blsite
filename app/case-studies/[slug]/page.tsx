import { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/PageShell";
import CaseStudyContent from "@/components/case-studies/CaseStudyContent";
import { getCaseStudy, getAllCaseStudies } from "@/lib/case-studies";
import { siteConfig, getArticleSchema, getBreadcrumbSchema } from "@/lib/seo";

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  
  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  const canonical = new URL(`/case-studies/${slug}`, siteConfig.url).toString();
  const formattedTitle = `${caseStudy.title} | Case Study | BlackLake`;
  const imageUrl = new URL(caseStudy.image, siteConfig.url).toString();

  return {
    title: formattedTitle,
    description: caseStudy.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: formattedTitle,
      description: caseStudy.description,
      type: "article",
      url: canonical,
      images: [imageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: formattedTitle,
      description: caseStudy.description,
      images: [imageUrl],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const articleSchema = getArticleSchema({
    title: caseStudy.title,
    description: caseStudy.description,
    image: caseStudy.image,
    publishedAt: new Date().toISOString(), // In a real app, this should be in the case study object
    path: `/case-studies/${slug}`,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Work", url: "/work" },
    { name: "Case Study", url: `/case-studies/${slug}` },
  ]);

  return (
    <PageShell>
      <Script
        id={`case-study-article-jsonld-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id={`case-study-breadcrumb-jsonld-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CaseStudyContent caseStudy={caseStudy} />
    </PageShell>
  );
}
