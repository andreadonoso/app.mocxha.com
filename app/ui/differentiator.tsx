"use client"

import { 
  FolderOpen,
  UserSwitch,
  CalendarPlus,
 } from "@phosphor-icons/react";

 import Image from "next/image";

const items = [
  { icon: <UserSwitch color="#FF2F2F" size={24} weight="duotone"/>, name: "Meetings and Collaboration", title: "Seamless Collaboration for Effective Meetings", description: "Easily schedule and manage meetings, collaborate in real-time, and keep everyone aligned for successful team interactions and faster decision-making.", source: "/images/unique_features/iwdYvqussSgtyd4vJilHFOVHXA.svg"},
  { icon: <CalendarPlus color="#00B473" size={24} weight="duotone"/>, name: "Planning and Tracking", title: "Efficient Planning and Real-Time Tracking", description: "Plan tasks, set priorities, and track progress with ease to ensure projects stay on track and deadlines are met with minimal effort.", source: "/images/unique_features/za0PKa2XhNMBz68vOXCVFAMSvQw.svg"},
  { icon: <FolderOpen color="#8A43E1" size={24} weight="duotone"/>, name: "Events and Document Sharing", title: "Organize Events and Share Documents", description: "Effortlessly manage events, share important documents, and collaborate with your team to ensure everything is in one place and easily accessible.", source: "/images/unique_features/fZzxmzkfza5uO1Pv0lCA7KqDY.svg"},
]

export default function Differentiator() {
    return(
        <div className="flex flex-col items-center justify-center py-20">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="pill">Unique Features</p>
            <h2>Unleash Taskforge's Unique Potential for you</h2>
            <p>
              Discover Taskforge’s powerful and unique tools that set it apart, offering unmatched efficiency, customization, and collaboration.
            </p>
          </div>
          <div className="p-16">
            {items.map((item, i) => (
              <div key={i} className="bg-white rounded-xl pb-8 my-8">
                <div className="flex bg-[#F6F5F4] border border-white rounded-xl p-5 gap-4 items-center [&>svg]:block">
                  {item.icon}
                  <p className="font-bold">{item.name}</p>
                </div>
                <div className="flex flex-col lg:flex-row justify-between pl-8 pt-8">
                  <div className="flex flex-col gap-4 pt-4 pr-8">
                    <h4>{item.title}</h4>
                    <p className="text-[#4C4C4C] text-lg">{item.description}</p>
                  </div>
                  <Image
                    alt="TBD"
                    src={item.source}
                    width={500} 
                    height={500}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="font-semibold">
            How Much Could Your Business Gain with Mocxha’s All-in-One Aida AI Automation and Insights?
          </p>
        </div>
    )
}