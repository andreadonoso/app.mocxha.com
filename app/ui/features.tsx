"use client"

import Image from "next/image";

import { Check } from "@phosphor-icons/react";

const features = [
  {description: "Aida AI Integration: Embedded intelligence across modules provides predictive insights, task automation, and enhanced decision support."},
  {description: "On-Premise Hosting Option: Gain ultimate data sovereignty, security control, and simplified compliance management (Available on Enterprise Plan)."},
  {description: "Customizable Dashboards: Tailor your view to monitor critical KPIs and gain instant operational awareness."},
  {description: "Advanced Reporting & Analytics: Generate in-depth, cross-functional reports to uncover trends and optimize strategy effectively."},
];

export default function Features() {
    return(
        <div className="flex flex-col justify-center items-center py-20 gap-10 md:flex-row md:justify-between">
          <div className="flex flex-col justify-center items-center h-">
            <div className="p-4 flex justify-center items-center rounded-xl bg-[#ffffff] border border-[#000000]/5 relative shadow-[0_1px_1px_rgba(0,0,0,0.04),0_10px_30px_rgba(0,0,0,0.10)]
                overflow-hidden">
              <Image
                alt="TBD"
                src="/images/Sq4hkfrKa24ofunLSqMCPK1b38.svg"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="p-10">
            <div className="text-center md:text-start">
              <p className=" inline-flex bg-[#ffffff] border border-[#DED8D3]/3  shadow-[0_1px_1px_rgba(0,0,0,0.20),0_8px_20px_rgba(0,0,0,0.05)] rounded-[100] px-2 py-2 my-5">Powerful Features</p>
              <h2>Optimized for Success</h2>
              <p>Leverage unique capabilities designed for efficiency, control, and insight</p>
              <div className="py-10 flex flex-col gap-2">
                {features.map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="p-0.5 mr-4 rounded-lg bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
                      <div className="p3 rounded-md bg-[#000000]">
                        <Check size={24} color="#ffffff"/>
                      </div>
                    </div>
                    <p>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    )
}