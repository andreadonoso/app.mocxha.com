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
        <div className="flex flex-col-reverse justify-center items-center py-10 md:py-15 gap-10 lg:flex-row">
          <div className="flex flex-col justify-center items-center">
            <div className="p-4 flex justify-center items-center rounded-xl bg-[#ffffff] border border-[#000000]/5 relative shadow-[0_1px_1px_rgba(0,0,0,0.04),0_10px_30px_rgba(0,0,0,0.10)]">
              <Image
                alt="TBD"
                src="/images/Sq4hkfrKa24ofunLSqMCPK1b38.svg"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="flex flex-col px-5 gap-10">
            <div className="text-center lg:text-start">
              <p className="pill">Powerful Features</p>
              <h2>Optimized for Success</h2>
              <p className="text-[#4C4C4C] mt-4">Leverage unique capabilities designed for efficiency, control, and insight</p>
            </div>
            <div className=" flex flex-col gap-2 sm:px-8 md:px-0 text-start items-start justify-start">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex itemss-center justify-center p-px rounded-lg bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
                    <div className="flex items-center justify-center size-6 rounded-lg bg-linear-to-t from-black to-[#7c7c7c]">
                      <Check size={15} color="#ffffff"/>
                    </div>
                  </div>
                  <p className="text-[#4C4C4C] p-0 m-0">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
    )
}