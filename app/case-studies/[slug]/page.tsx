import { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/PageShell";
import CaseStudyContent from "@/components/case-studies/CaseStudyContent";
import { getCaseStudy, getAllCaseStudies } from "@/lib/case-studies";
import { siteConfig } from "@/lib/seo";

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

  const canonical = new URL(`/case-studies/${slug}`, siteConfig.url).toString();
  const imageUrl = new URL(caseStudy.image, siteConfig.url).toString();
  const logoUrl = new URL("/logo.png", siteConfig.url).toString();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.description,
    image: [imageUrl],
    author: {
      "@type": "Organization",
      name: "BlackLake",
    },
    publisher: {
      "@type": "Organization",
      name: "BlackLake",
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: new URL("/work", siteConfig.url).toString(),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: caseStudy.title,
        item: canonical,
      },
    ],
  };

  return (
    <PageShell>
      <Script
        id={`case-study-article-jsonld-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Script
        id={`case-study-breadcrumb-jsonld-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CaseStudyContent caseStudy={caseStudy} />
    </PageShell>
  );
}
