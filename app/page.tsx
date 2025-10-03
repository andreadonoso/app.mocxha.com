import Image from "next/image";
import Hero from "@/app/ui/hero";
import Solutions from "@/app/ui/solutions";
import Features from "@/app/ui/features";
import ValueProposition from "@/app/ui/value";
import RADS from "@/app/ui/rads";
import Plans from "@/app/ui/plans";
import About from "@/app/ui/about";
import Comparison from "@/app/ui/comparison";
import Overview from "@/app/ui/overview";
import Differentiator from "@/app/ui/differentiator";
import Insights from "@/app/ui/insights";
import Contact from "@/app/ui/contact";
import FAQs from "@/app/ui/faqs";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col min-h-screen">
        <section className="section">
          <Hero />
        </section>
        <section className="bg-[#F6F5F4]">
          <section className="section">
            <Solutions />
            <Features />
          </section>
        </section>
        <hr className="border-[#E8E4E2]" />
        <hr className="border-[#ffffff]" />
        <section className="section">
          <ValueProposition />
        </section>
        <hr className="border-[#E8E4E2]" />
        <hr className="border-[#ffffff]" />
        <section className="bg-[#F6F5F4]">
          <section className="section">
            <RADS />
            <Plans />
          </section>
        </section>
        <section className="section">
          <About />
          <Comparison />
        </section>
        <Overview />
        <section className="bg-[#F1F0EE]">
          <section className="section">
            <Differentiator />
          </section>
        </section>
        <hr className="border-[#E8E4E2]" />
        <hr className="border-[#ffffff]" />
        <section className="bg-[#F1F0EE]">
          <section className="section">
            <Insights />
            <Contact />
            <FAQs />
          </section>
        </section>
      </main>
    </div>
  );
}
