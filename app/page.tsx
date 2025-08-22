import Image from "next/image";
import Header from "@/app/ui/header";
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
import Footer from "@/app/ui/footer";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:p-20 max-w-7xl mx-auto text-center">
      <Header/>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
        <Hero/>
        <Solutions/>
        <Features/>
        <ValueProposition/>
        <RADS/>
        <Plans/>
        <About/>
        <Comparison/>
        <Overview/>
        <Differentiator/>
        <Insights/>
        <Contact/>
        <FAQs/>
      </main>
      <Footer/>
    </div>
  );
}
