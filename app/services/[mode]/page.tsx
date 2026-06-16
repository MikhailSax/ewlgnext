import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceContent from "@/components/ServiceContent";
import ApplicationForm from "@/components/ApplicationForm";
import { getService, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ mode: s.slug }));
}

export function generateMetadata({ params }: { params: { mode: string } }): Metadata {
  const service = getService(params.mode);
  if (!service) return { title: "EWLG" };
  return {
    title: `${service.name} — EWLG · ${service.hero.subtitle}`,
    description: service.hero.intro,
  };
}

export default function ServicePage({ params }: { params: { mode: string } }) {
  const service = getService(params.mode);
  if (!service) notFound();

  return (
    <main className="min-h-screen">
      <Header />
      <ServiceHero service={service} />
      <ServiceContent service={service} />
      <ApplicationForm />
      <Footer />
    </main>
  );
}
