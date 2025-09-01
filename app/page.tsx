import Image from "next/image";
import Hero from "@/app/ui/hero";
import Solutions from "@/app/ui/solutions";
import Features from "@/app/ui/features";
import ValueProposition from "@/app/ui/value";
import RADS from "@/app/ui/rads"
import Plans from "@/app/ui/plans"
import About from "@/app/ui/about"
import Comparison from "@/app/ui/comparison"
import Overview from "@/app/ui/overview"
import Differentiator from "@/app/ui/differentiator"
import Insights from "@/app/ui/insights"
import Contact from "@/app/ui/contact"
import FAQs from "@/app/ui/faqs";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col overflow-x-hidden min-h-screen ">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Hero/>
          <Solutions/>
          <Features/>
          <ValueProposition/>
          <RADS/>
          <Plans/>
          <About/>
          <Comparison/>
        </div>
        <Overview/>
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Differentiator/>
          <Insights/>
          <Contact/>
          <FAQs/>
        </div>
      </main>
    </div>
  );
}
