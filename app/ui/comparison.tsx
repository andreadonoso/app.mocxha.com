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
        <div id="comparison" className="flex flex-col justify-center items-center gap-8 py-20">
          <div className="flex flex-col justify-center items-center">
          <p className="pill">
            Comparison
          </p>
          <h2>
            Mocxha: The Clear Advantage
          </h2>
          <p>
            Move beyond the limitations of patching together multiple software solutions.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <div className="flex flex-col p-10 border border-[#ded8d3] bg-[#e8e4e2] rounded-xl gap-2">
              <h5 className="text-center">OTHER PLATFORMS</h5>
              {otherPlatforms.map((item, i) => (
                <div key={i} className="flex items-center">
                  <MaskSad />
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="pill bg-black text-white h-full">V/S</p>
          <div className="p-0.5 mr-4 rounded-xl bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
            <div className="flex flex-col p-10  rounded-xl gap-2 bg-white">
              <h5 className="text-center">MOCXHA</h5>
              {ourPlatform.map((item, i) => (
                <div key={i} className="flex items-center">
                    <div className="p-0.5 mr-4 rounded-lg bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
                      <div className="p3 rounded-md bg-[#000000]">
                        <Check size={24} color="#ffffff"/>
                      </div>
                    </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="btn btn-primary">See the Difference - Request a Demo</button>
        </div>
    )
}