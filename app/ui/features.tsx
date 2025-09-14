"use client"

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Check, CaretDown } from "@phosphor-icons/react";

const features = [
  {description: "Aida AI Integration: Embedded intelligence across modules provides predictive insights, task automation, and enhanced decision support."},
  {description: "On-Premise Hosting Option: Gain ultimate data sovereignty, security control, and simplified compliance management (Available on Enterprise Plan)."},
  {description: "Customizable Dashboards: Tailor your view to monitor critical KPIs and gain instant operational awareness."},
  {description: "Advanced Reporting & Analytics: Generate in-depth, cross-functional reports to uncover trends and optimize strategy effectively."},
];

const profiles_original = [
  { source: "/images/profiles1/Ak5k2agDTtdBba2G24v5QE1Hqi8.avif"},
  { source: "/images/profiles1/C73JaQknNYyRYvGQWukXPqclJqc.avif"},
  { source: "/images/profiles1/fzKQ5bQ0vj7zhOUIcwAUXMs7Od4.avif"},
  { source: "/images/profiles1/wO1BnpgvlYgarcc8JQl3WU75XA.avif"},
]

const profiles = [...profiles_original, ...profiles_original]

export default function Features() {
    return(
        <div className="flex flex-col-reverse justify-center items-center py-10 md:py-15 gap-10 lg:flex-row">
          <div className="flex-1 flex-col justify-center items-center">
            <div className="relative flex-1 p-4 m-4 flex justify-center items-center rounded-2xl bg-[#ffffff] mask-linear-50 border border-[#000000]/5  shadow-[0_1px_1px_rgba(0,0,0,0.04),0_10px_30px_rgba(0,0,0,0.10)]">
              <Image
                alt="TBD"
                src="/images/Sq4hkfrKa24ofunLSqMCPK1b38.svg"
                width={1000}
                height={1000}
                className="mask-b-from-0%"
              />
              <div className="absolute bottom-0 m-8 flex flex-col justify-center items-center">
                <div className="rounded-full p-[2px] bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
                  <div className="pill m-0 bg-black flex items-center gap-2">
                    <p className="text-white">Assign Task</p>
                    <CaretDown color="#ffffff"/>
                  </div>
                </div>
                <div className="bg-[linear-gradient(to_top,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)] w-0.5 h-4" />
                <div className="rounded-full p-[2px] bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
                  <div className="bg-black rounded-full ">
                    <div className="pill m-0 bg-black">
                      <div className="flex justify-center items-center rounded-full w-[200px] ">
                        <Marquee
                          autoFill
                          pauseOnClick
                          className="select-none [contain:inline-size] rounded-full [mask-image:_linear-gradient(to_right,transparent_0,_black_28px,_black_calc(100%-28px),transparent_100%)]"
                        >
                          { profiles.map((profile, i) => (
                            <Image
                              key={i} 
                              alt="TBD"
                              src={profile.source}
                              width={40}
                              height={40}
                              className="w-[40px] h-[40px] mx-1 rounded-full object-cover"
                            />
                          ))}
                        </Marquee>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-col px-5 gap-10">
            <div className="text-center lg:text-start">
              <p className="pill">Powerful Features</p>
              <h2>Optimized for Success</h2>
              <p className="text-[#4C4C4C] mt-4">Leverage unique capabilities designed for efficiency, control, and insight</p>
            </div>
            <div className=" flex flex-col gap-2 sm:px-8 md:px-0 text-start items-start justify-start">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex itemss-center justify-center p-px rounded-lg bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
                    <div className="black-gradient rounded-lg size-6">
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