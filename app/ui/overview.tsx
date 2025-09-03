"use client"

import { 
  FolderOpen,
  UserCirclePlus,
  Timer,
  Tag,
 } from "@phosphor-icons/react";

 import Marquee from "react-fast-marquee";

const items = [
  { icon: <FolderOpen size={24} weight="duotone"/>, title: "Embedded Aida AI", description: "Leverage predictive analytics, task automation suggestions, and strategic decision support seamlessly integrated across CRM, Marketing, Finance, and Operations."},
  { icon: <UserCirclePlus size={24} weight="duotone"/>, title: "Seamless Integrations", description: "Connect Mocxha with your essential third-party tools (e.g., communication platforms, specialized software) via robust APIs and pre-built connector to maintain a unified workflow."},
  { icon: <Timer size={24} weight="duotone"/>, title: "Flexible On-Premise Hosting", description: "Gain complete data sovereignty, enhanced security control, and simplified compliance management with our Enterprise-level on-premise deployment option."},
  { icon: <Tag size={24} weight="duotone"/>, title: "Industry-Specific Adaptability", description: "Utilize customizable modules and configure workflows to precisely match the unique operational demands of your specific industry."},
]

const features = [
  { color: "#FF2F2F", name: "Seamless Integrations"},
  { color: "#D511FD", name: "Enhanced Inventory Management"},
  { color: "#5DC983", name: "Industry-Specific Tools"},
  { color: "#8A43E1", name: "Scalable Solutions"},
  { color: "#F2BE00", name: "On Premise Hosting"},
  { color: "#5E6AD2", name: "Real-Time Analytics"},
  { color: "#FF2F2F", name: "Unified CRM"},
  { color: "#5DC983", name: "Aida AI Automation"},
]

export default function Overview() {
    return(
        <div className="flex flex-col justify-center items-center py-20 gap-10 md:justify-between bg-[#111111] text-white">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-center items-center gap-4 text-center">
              <div className="rounded-[100px] p-0.5 bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
                <p className="pill m-0 bg-black">HQ Overview</p>
              </div>
              <h2>Key Platform Capabilities: Beyond the Core Modules</h2>
              <p>
                Mocxha integrates powerful, platform-wide features designed for modern business challenges and optimal performance
              </p>
              <button className="btn btn-secondary">Get Started</button>
              <div className="relative mx-6">
                <div className="p-1 my-8 mx-12 relative h-auto rounded-lg bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
                  <img
                    src="/1ERyzT95gIbmR9MufL5vBXNUzc.webp"
                    alt="Dashboard"
                    className="rounded-lg block w-full h-auto "
                  />
                </div>
                <img
                  src="/1SsjIie9Tpxei9scsPnNHYSLGM.avif"
                  alt="Dashboard"
                  className="block absolute md:w-50 md:h-50 w-25 h-25 left-1 md:top-60 top-20 rotate-3"
                />
                <img
                  src="/FJyp3zx5MUI0IcTijk6OdSPVh8.avif"
                  alt="Dashboard"
                  className="block absolute md:w-50 md:h-50 w-25 h-25 right-1 md:top-75 top-30 rotate-357"
                />
              </div>
            </div>
            <div className="md:flex-row flex flex-col">
              {items.map((item, i) => (
                <div key={i} className="p-8">
                  {item.icon}
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="rounded-[100px] p-0.5 bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
                  <p className="pill m-0 bg-black">Other Interesting Features</p>
              </div>
             
                <Marquee
                  autoFill
                  pauseOnClick
                  className="[contain:inline-size] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                  {features.map((item, i) => (
                    <div key={i} className="flex items-center justify-center m-2 p-4 rounded-lg bg-[#1e1e1e] text-white" >
                      <div className="w-2 h-2 mr-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <p>{item.name}</p>
                    </div>
                  ))}
                </Marquee>
              
            </div>
          </div>
        </div>
    )
}