"use client"

import { Rocket, SealCheck, SuitcaseSimple, Lightning } from "@phosphor-icons/react";

const features = [
  { imageSrc: <Rocket size={24} color="white" weight="duotone"/>, title: "Streamlined", description: "All in One Business Platform" },
  { imageSrc: <SealCheck size={24} color="white" weight="duotone"/>, title: "10-25%", description: "Profitability & Savings Impact" },
  { imageSrc: <SuitcaseSimple size={24} color="white" weight="duotone"/>, title: "40-80%", description: "Business Valuation Growth" },
  { imageSrc: <Lightning size={24} color="white" weight="duotone"/>, title: "Accelerated", description: "Data-Driven Decisions" },
]
export default function ValueProposition() {
    return(
        <div className="py-20">
          <div className="flex-col sm:flex-rowpb-12 justify-between">
            <h2> <span className="bg-gradient-to-r from-[#e62e2e] via-[#ef7718] via-[#75239e] to-[#f700ff] bg-clip-text  text-transparent font-bold w-fit">Wave goodbye to</span></h2>
            <div>
              <h2>missed deadlines</h2>
              <h2>disorganized workflows</h2>
              <h2>unnecessary complexity</h2>
              <h2>slow progress</h2>
              <h2>wasted time</h2>
              <h2>slow progress</h2>
              <h2>lack of collaboration</h2>
              <h2>task overload</h2>
            </div>  
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            {features.map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center">
                <div className="p-0.5 mr-4 rounded-full bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
                  <div className="p-2 rounded-full bg-[#000000]">
                    {item.imageSrc}
                  </div>
                </div>
                <h4>
                  {item.title}
                </h4>
                <p>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
    )
}