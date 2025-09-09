"use client"

import { Rocket, SealCheck, SuitcaseSimple, Lightning } from "@phosphor-icons/react";

const features = [
  { imageSrc: <Rocket size={32} color="white" weight="duotone"/>, title: "Streamlined", description: "All in One Business Platform" },
  { imageSrc: <SealCheck size={32} color="white" weight="duotone"/>, title: "10-25%", description: "Profitability & Savings Impact" },
  { imageSrc: <SuitcaseSimple size={32} color="white" weight="duotone"/>, title: "40-80%", description: "Business Valuation Growth" },
  { imageSrc: <Lightning size={32} color="white" weight="duotone"/>, title: "Accelerated", description: "Data-Driven Decisions" },
]

const items = [
  {description: "missed deadlines"},
  {description: "disorganized workflows"},
  {description: "unnecessary complexity"},
  {description: "slow progress"},
  {description: "wasted time"},
  {description: "slow progress"},
  {description: "lack of collaboration"},
  {description: "task overload"},
]
export default function ValueProposition() {
    return(
      <div className="py-15 md:py-20">
        <div className="flex flex-col lg:flex-row justify-center gap-8 py-8 lg:items-center relative">
          <h2 className="text-nowrap">Wave goodbye to</h2>
          <div className="z-0 relative overflow-hidden h-50 [mask-image:_linear-gradient(to_bottom,transparent_0,_black_100px,_black_calc(100%-128px),transparent_100%)]">
            <div className="animate-infinite-scroll flex flex-col gap-4">
                {[...items, ...items].map((item, i) => (
                  <h2 key={i} className=" whitespace-nowrap">
                    <span  className="text-transparent bg-clip-text z-50  h-10 w-fit bg-gradient-to-r from-[#e62e2e] via-[#ef7718] via-[#75239e] to-[#f700ff] font-bold">
                      {item.description}
                    </span>
                  </h2>
                )) }
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-16 pt-16">
          {features.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center w-full h-40 justify-between">
              <div className="p-1 white-gradient rounded-full mb-3">
                <div className="p-1 rounded-full bg-[#F1F0EE]">
                  <div className="p-[2px] rounded-full bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
                    <div className="p-2 black-gradient rounded-full">
                      {item.imageSrc}
                    </div>
                  </div>
                </div>
              </div>
              <h4>
                {item.title}
              </h4>
              <p className="text-[#4C4C4C]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
}