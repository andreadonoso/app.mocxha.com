"use client"

import {
MaskSad,
Check
} from "@phosphor-icons/react";

const otherPlatforms = [
  {description: "Complex, Inefficient Workflows"},
  {description: "Slow, Lagging Progress Tracking"},
  {description: "Clunky, Difficult User Interfaces"},
  {description: "Manual Data Entry & Errors"},
  {description: "Lack of Seamless Integration"},
  {description: "Limited Insights, Reactive Decisions"},
  {description: "Basic, Fragmented Reporting"},
  {description: "Time-Consuming Manual Actions"},
  {description: "Data Security & Control Concerns"},
]

const ourPlatform = [
  {description: "AI-Driven Workflow Automation Across Functions"},
  {description: "Real-Time Progress Updates & Visibility"},
  {description: "Intuitive, Modern User Experience"},
  {description: "Reduced Manual Work, Enhanced Data Accuracy"},
  {description: "Seamless Integrations & Unified Data Model"},
  {description: "Aida AI-Driven Predictive Insights"},
  {description: "Comprehensive, Customizable Reporting Suite"},
  {description: "Powerful Bulk Action & Automation Capabilities"},
  {description: "Secure On-Premise Hosting Option"},
]

export default function Comparison() {
    return(
        <div id="comparison" className="flex flex-col justify-center items-center gap-8 pt-5 pb-15 md:pt-10 md:pb-20">
          <div className="flex flex-col justify-center items-center text-center">
            <p className="pill">
              Comparison
            </p>
            <h2>
              Mocxha: The Clear Advantage
            </h2>
            <p className="text-[#3D3D3D] pt-4">
              Move beyond the limitations of patching together multiple software solutions.
            </p>
          </div>  
          <div className="flex flex-col items-center md:flex-row gap-4 md:justify-start md:items-start ">
            <div className="flex flex-col  border border-[#ded8d3] bg-[#e8e4e2] rounded-xl gap-2 w-full">
              <h5 className="text-center pt-8 pb-4">OTHER PLATFORMS</h5>
              <hr className="border-[#DED8D3]" />
              <div className="p-8 flex flex-col gap-4">
                {otherPlatforms.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <MaskSad size={20} weight="duotone" color="#111111"/>
                    <p className="text-[#4C4C4C]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center md:items-start ">
              <p className="pill bg-black text-white w-fit">V/S</p>
            </div>
            <div className="w-full p-0.5 rounded-xl bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
              <div className="flex flex-col rounded-xl gap-2 bg-white">
                <h5 className="text-center  pt-8 pb-4">MOCXHA</h5>
                <hr className="border-[#DED8D3]" />
                <div className="p-8 flex flex-col gap-4">
                  {ourPlatform.map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className="flex itemss-center justify-center p-px rounded-lg bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
                          <div className="black-gradient rounded-lg size-6">
                            <Check size={15} color="#ffffff"/>
                          </div>
                        </div>
                      <p className="text-[#4C4C4C]">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <a href="#contact" className="btn btn-primary mt-4">See the Difference - Request a Demo</a>
        </div>
    )
}