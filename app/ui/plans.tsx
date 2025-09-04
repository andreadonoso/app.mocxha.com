"use client"
import Image from "next/image";
import { Check, CalendarDot, Database } from "@phosphor-icons/react";

const contentBasic = [
  {description: "Unified Platform"},
  {description: "Essential CRM"},
  {description: "Basic Accounting and Finance Management"},
  {description: "Document Management"},
  {description: "Data Analytics"},
  {description: "AI-Powered Automation"},
  {description: "Aida Assisted SMS + Email Campaigns"},
]

const contentPro = [
  {description: "Everything in Basic +"},
  {description: "Advanced Accounting and Financial Reporting"},
  {description: "Enhanced CRM"},
  {description: "Customizable Industry-Specific App(s)"},
  {description: "Bundle Apps"},
  {description: "3rd Party Integrations"},
]

const contentEnterprise = [
  {description: "Everything in Pro +"},
  {description: "Unlimited Apps & Users"},
  {description: "Lifetime Access"},
  {description: "Enterprise Integrations"},
  {description: "On Premise Hosting"},
  {description: "Security Enhancements & Compliance Tools"},
  {description: "Dedicated Support"},
]

export default function Plans() {
    return(
        <div id="pricing" className="flex flex-col items-center py-20">
          <p className="inline-flex bg-[#ffffff] border border-[#DED8D3]/3  shadow-[0_1px_1px_rgba(0,0,0,0.20),0_8px_20px_rgba(0,0,0,0.05)] rounded-[100] px-2 py-2 my-5">Pricing & Plans</p>
          <h2>Affordable Pricing Plans</h2>
          <p>Flexible, transparent pricing to support your team’s productivity and growth at every stage.</p>
          <p className="py-8">Billed Monthly ***SWITCH*** Billed yearly  
            <span className="bg-gradient-to-r from-[#e62e2e] via-[#ef7718] via-[#75239e] to-[#f700ff] bg-clip-text  text-transparent font-bold w-fit">
              30% OFF
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="pb-4 border border-[#dcdbd4] rounded-lg bg-[#E8E4E2]">
              <div className="p-4 border rounded-lg bg-white h-50 flex flex-col justify-between border-black/5">
                <Image
                    alt="TBD"
                    src="/svgs/jgVdpmhK03pQ0sFqgkrmN1u1Y.svg"
                    width={30}
                    height={30}
                  />
                <h6>Basic</h6>
                <p>Best for personal use </p>
                <button  className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-[#000000] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Early Access
                </button>
              </div>
                <div className="px-4 mt-4">
                  {contentBasic.map((item, i) => (
                    <div key={i} className="flex gap-2">
                      <Check/>
                      {item.description}
                    </div>
                  ))}
                </div>
            </div>
            <div className="pb-4 border border-[#dcdbd4] rounded-lg bg-[#E8E4E2]">
              <div className="p-4 border rounded-lg bg-white h-50 flex flex-col justify-between border-black/5">
                <Image
                  alt="TBD"
                  src="/svgs/En4lEj9XDauBGTWPq8rrDGuUk.svg"
                  width={30}
                  height={30}
                />
                <h6>Pro</h6>
                <p>Best for small to mid-sized teams</p>
                <button  className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-[#000000] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Early Access
                </button>
              </div>
              <div className="px-4 mt-4">
                {contentPro.map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <Check/>
                    {item.description}
                  </div>
                ))}
              </div>
            </div>
            <div className="pb-4 border border-[#dcdbd4] rounded-lg bg-[#E8E4E2]">
              <div className="p-4 border rounded-lg bg-white h-50 flex flex-col justify-between border-black/5">
                <Image
                  alt="TBD"
                  src="/svgs/pm0nOe4YNOAoYGJMRClXCtMFWE.svg"
                  width={30}
                  height={30}
                />
                <h6>Enterprise</h6>
                <p>Get a custom demo and see how Mocxha</p>
                <p>aligns with your goals.</p>
                <button  className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-[#000000] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Early Access
                </button>
              </div>
              <div className="px-4 mt-4">
                {contentEnterprise.map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <Check/>
                    {item.description}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row bg-[#E8E4E2] items-center justify-between  rounded-lg p-3 w-full my-8">
            <p>
              Looking for an affordable, customizable, and all in one platform? <span className="bg-gradient-to-r from-[#e62e2e] via-[#ef7718] via-[#75239e] to-[#f700ff] bg-clip-text  text-transparent font-bold w-fit"> Then Mocxha may be it. </span>
            </p>
            <button  className="btn btn-secondary">
              Request Access
            </button>
          </div>
          <div  className="flex">
            <div  className="flex items-center pr-2">
              <CalendarDot/>
              <p>Free 3 days trial</p>
            </div>
            <div  className="flex items-center pl-2">
              <Database/>
              <p>Data migration</p>
            </div>
          </div>
        </div>
    )
}