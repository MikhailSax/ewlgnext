import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Modes from "@/components/Modes";
import Advantages from "@/components/Advantages";
import Routes from "@/components/Routes";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Faq from "@/components/Faq";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Advantages />
      <Modes />
      <Routes />
      <Process />
      <Stats />
      <Faq />
      <ApplicationForm />
      <Footer />
    </main>
  );
}
