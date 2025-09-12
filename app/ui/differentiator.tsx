"use client"

import { useState } from 'react';

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
  const [active,setActive] = useState(0);
  const [queue, setQueue] = useState<number[]>([0,1,2]);

  const toggle = (i: number) => {
    setQueue(prev => {
      const [a,b,c] = prev;
      if(i===b) return [b,a,c];
      if(i===c) return [c,a,b]
      return prev;
    });
    setActive(i);
  }

  return(
      <div className="flex flex-col items-center justify-center py-15 md:py-20 ">
        <div className="flex flex-col items-center justify-center gap-4 text-center pb-8">
          <p className="pill">Unique Features</p>
          <h2>Unleash Taskforge's Unique Potential for you</h2>
          <p className="text-[#3D3D3D]">
            Discover Taskforge’s powerful and unique tools that set it apart, offering unmatched efficiency, customization, and collaboration.
          </p>
        </div>
        <div className="md:px-16 relative w-full h-[800px] lg:h-[700px]">
          {items.map((item, i) => (
            <button 
              key={i} 
              onClick={() => toggle(i)} 
              className={ 
                `bg-white rounded-xl shadow-xl w-full will-change-transform absolute transition duration-400 ease-in-out  left-1/2 -translate-x-1/2  ` 
                + (i == queue[0] ? " z-30 translate-y-41 " : " ") 
                + (i == queue[1] ? " z-20 translate-y-20 scale-95  " : "  ") 
                + (i == queue[2] ? " z-10 translate-y-0 scale-90 " : "  ")
              }
            >
              <div className="flex bg-[#F6F5F4] border border-white rounded-xl p-5 gap-4 items-center [&>svg]:block">
                {item.icon}
                <p className="font-bold">{item.name}</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-between pl-8 pt-8 gap-4">
                <div className="flex flex-col gap-4 pt-4 pr-8">
                  <h4>{item.title}</h4>
                  <p className="text-[#4C4C4C] text-sm md:text-lg">{item.description}</p>
                </div>
                <Image
                  alt="TBD"
                  src={item.source}
                  width={500} 
                  height={500}
                  className="object-contain"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
  )
}