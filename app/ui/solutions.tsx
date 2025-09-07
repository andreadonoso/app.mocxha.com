"use client"

import Image from "next/image";

import { TreeStructure, 
        Star, 
        UserCirclePlus, 
        BellRinging,
 } from "@phosphor-icons/react";

export default function Solutions() {
    return(
        <div id="features"className="flex flex-col justify-center items-center py-5 md:py-10 gap-0 md:gap-6 lg:flex-row md:justify-between">
          <div className="sm:px-8">
            <div className="text-center md:text-start">
              <p className=" inline-flex bg-[#ffffff] border border-[#DED8D3]/3  shadow-[0_1px_1px_rgba(0,0,0,0.20),0_8px_20px_rgba(0,0,0,0.05)] rounded-[100] px-2 py-2 my-5">One Tool, Every Solution</p>
              <h2>Unify Operations, Amplify Insights with Mocxha & Aida AI</h2>
            </div>
            <div className="flex text-start">
              <div className="flex flex-col sm:flex-row py-8 ">
                <div className="flex flex-col gap-2 sm:gap-6 pr-8">
                  <div className="py-8 sm:pl-8">
                    <TreeStructure size={32} color="#FF2F2F" weight="duotone"/>
                    <h5 className="pt-5 pb-2">
                      ERP - Unified Platform 
                    </h5>
                    <p className="text-[#4C4C4C]">
                      Streamline operations, manage resources efficiently, and gain complete visibility with a unified data foundation.
                    </p>
                  </div>
                  <div className="py-8 border-[#DED8D3] border-t-1 sm:border-t-0 sm:pl-8">
                    <Star size={32} color="#8A43E1" weight="duotone"/>
                    <h5 className="pt-5 pb-2">
                      AI-Powered CRM & Sales
                    </h5>
                    <p className="text-[#4C4C4C]">
                      Convert more leads, predict customer needs, and accelerate your sales cycle with intelligent automation and personalization.
                    </p>
                    
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:gap-6">
                  <div className="py-8 border-[#DED8D3] border-t-1 sm:border-t-0 sm:border-l-1 sm:pl-8 ">
                    <UserCirclePlus size={32} color="#27B32C" weight="duotone"/>
                    <h5 className="pt-5 pb-2">
                      Accounting & Finance
                    </h5>
                    <p className="text-[#4C4C4C]">
                      Move beyond basic bookkeeping. Gain real-time financial insights, automate reporting, and make data-driven budget decisions.
                    </p>
                  </div>  
                  <div className="py-8 border-[#DED8D3] border-t-1 sm:border-t-0 sm:border-l-1 sm:pl-8 ">
                    <BellRinging size={32} color="#EF7B16" weight="duotone"/>
                    <h5 className="pt-5 pb-0">
                      HR & Employee Appraisals
                    </h5>
                    <p className="text-[#4C4C4C] pt-2">
                      Transform appraisals into strategic tools. Analyze performance trends for optimized development decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-80 h-80 md:w-120 md:h-120 rounded-xl bg-[#ffffff] border border-[#000000]/5 relative shadow-[0_1px_1px_rgba(0,0,0,0.04),0_10px_30px_rgba(0,0,0,0.10)]
                overflow-hidden">
              <Image
                alt="TBD"
                src="/images/6K15qAUSLVdGeHIXMGZEZSAjXy8.webp"
                fill
                className="object-cover w-auto h-[35px] max-w-none"
              />
              <Image
                alt="TBD"
                src="/images/S2y79ijNMziHIZmasqRhPCOuvQ.webp"
                width={340}
                height={200}
                className="absolute bottom-5 left-5 border border-[#000000]/5  shadow-[0_1px_1px_rgba(0,0,0,0.04),0_10px_30px_rgba(0,0,0,0.10)]"
              />
            </div>
          </div>
        </div>
    )
}