"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Check, CalendarDot, Database } from "@phosphor-icons/react";

const contentBasic = [
  { description: "Unified Platform" },
  { description: "Essential CRM" },
  { description: "Basic Accounting and Finance Management" },
  { description: "Document Management" },
  { description: "Data Analytics" },
  { description: "AI-Powered Automation" },
  { description: "Aida Assisted SMS + Email Campaigns" },
];

const contentPro = [
  { description: "Everything in Basic +" },
  { description: "Advanced Accounting and Financial Reporting" },
  { description: "Enhanced CRM" },
  { description: "Customizable Industry-Specific App(s)" },
  { description: "Bundle Apps" },
  { description: "3rd Party Integrations" },
];

const contentEnterprise = [
  { description: "Everything in Pro +" },
  { description: "Unlimited Apps & Users" },
  { description: "Lifetime Access" },
  { description: "Enterprise Integrations" },
  { description: "On Premise Hosting" },
  { description: "Security Enhancements & Compliance Tools" },
  { description: "Dedicated Support" },
];

export default function Plans() {
  const [monthly, setMonthly] = useState(false);

  const toggle = () => {
    setMonthly(!monthly);
  };

  return (
    <div
      id="pricing"
      className="flex flex-col items-center pt-5 pb-15 md:pt-10 md:pb-20"
    >
      <p className="inline-flex bg-[#ffffff] border border-[#DED8D3]/3  shadow-[0_1px_1px_rgba(0,0,0,0.20),0_8px_20px_rgba(0,0,0,0.05)] rounded-[100] px-2 py-2 my-5">
        Pricing & Plans
      </p>
      <h2>Affordable Pricing Plans</h2>
      <p className="pt-4 text-[#3D3D3D]">
        Flexible, transparent pricing to support your team’s productivity and
        growth at every stage.
      </p>
      <div className="flex flex-col py-8 items-center ">
        <p
          className={
            "inline-block whitespace-nowrap mx-4 " +
            "transition-opacity duration-300 ease-out " +
            (monthly
              ? "opacity-100"
              : "opacity-0 pointer-events-none select-none ")
          }
        >
          <span className="duration-300 ease-in-out bg-gradient-to-r from-[#e62e2e] via-[#ef7718] via-[#75239e] to-[#f700ff] bg-clip-text  text-transparent font-bold w-fit">
            30% OFF
          </span>
        </p>
        <div className="flex items-center">
          <p
            className={
              "inline-block whitespace-nowrap transition-opacity duration-300 ease-out " +
              (monthly
                ? "opacity-0  pointer-events-none select-none "
                : "opacity-100")
            }
          >
            Billed Monthly
          </p>
          <button onClick={toggle}>
            <div className="mx-4 p-0.5 my-4 relative h-auto rounded-full bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
              <div
                className={
                  monthly
                    ? "relative w-9 h-5 rounded-full bg-white transition-colors duration-200"
                    : "relative w-9 h-5 rounded-full bg-black border transition-colors duration-200"
                }
              >
                <div
                  className={
                    "absolute left-0.5 top-1/2 -translate-y-1/2 size-4 rounded-full transition-transform duration-300 ease-out will-change-transform " +
                    (monthly
                      ? "transition-colors duration-200 bg-black translate-x-3.5"
                      : "transition-colors duration-200 bg-white translate-x-0")
                  }
                ></div>
              </div>
            </div>
          </button>
          <p
            className={
              "whitespace-nowrap" + (monthly ? " text-black" : " text-gray-500")
            }
          >
            Billed yearly
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="card-body">
          <div className="card-white">
            <Image
              alt="TBD"
              src="/svgs/jgVdpmhK03pQ0sFqgkrmN1u1Y.svg"
              width={30}
              height={30}
            />
            <h6>Basic</h6>
            <p className="h-15 ">Best for personal use </p>
            <a href="#meet" className="btn btn-primary">
              Early Access
            </a>
          </div>
          <div className="px-4 mt-4">
            {contentBasic.map((item, i) => (
              <div key={i} className="flex gap-2">
                <Check />
                {item.description}
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full p-[2px] justify-center rounded-3xl bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
          <div className="card-body">
            <div className="card-white">
              <Image
                alt="TBD"
                src="/svgs/En4lEj9XDauBGTWPq8rrDGuUk.svg"
                width={30}
                height={30}
              />
              <h6>Pro</h6>
              <p className="h-15 ">Best for small to mid-sized teams</p>
              <a href="#meet" className="btn btn-primary">
                Early Access
              </a>
            </div>
            <div className="px-4 mt-4">
              {contentPro.map((item, i) => (
                <div key={i} className="flex gap-2">
                  <Check />
                  {item.description}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="card-white">
            <Image
              alt="TBD"
              src="/svgs/pm0nOe4YNOAoYGJMRClXCtMFWE.svg"
              width={30}
              height={30}
            />
            <h6>Enterprise</h6>
            <p className="h-15 ">
              Get a custom demo and see how Mocxha aligns with your goals.
            </p>
            <p></p>
            <a href="#meet" className="btn btn-primary">
              Early Access
            </a>
          </div>
          <div className="px-4 mt-4">
            {contentEnterprise.map((item, i) => (
              <div key={i} className="flex gap-2">
                <Check />
                {item.description}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-[#E8E4E2] items-center justify-between  gap-4 rounded-lg p-3 w-full my-8">
        <p>
          Looking for an affordable, customizable, and all in one platform?{" "}
          <span className="bg-gradient-to-r from-[#e62e2e] via-[#ef7718] via-[#75239e] to-[#f700ff] bg-clip-text  text-transparent font-bold w-fit">
            {" "}
            Then Mocxha may be it.{" "}
          </span>
        </p>
        <a href="#contact" className="btn btn-secondary w-full md:w-auto">
          Get Started
        </a>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Database />
          <p>Data migration</p>
        </div>
      </div>
    </div>
  );
}
