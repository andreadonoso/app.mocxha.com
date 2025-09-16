"use client"

import React, {useState} from 'react';

import { 
  FireSimple,
  UsersThree,
  Steps,
  NavigationArrow,
  CodeSimple,
  Check
 } from "@phosphor-icons/react";

const items = [
  { icon: <FireSimple weight="duotone" size={24} color="#FF2F2F" />, name: "Marketing", question: "Missing Out on Sales Opportunities?", title1: "AI-Powered Lead Management", description1: "Mocxha's AI automates lead nurturing and qualification, streamlining the sales process and maximizing conversion rates.", title2: "Enhanced Sales Visibility", description2: "Mocxha provides AI-driven sales forecasting and pipeline analysis, offering clear visibility to optimize sales strategies and drive revenue growth."},
  { icon: <UsersThree weight="duotone" size={24} color="#8A43E1"/>, name: "Management", question: "Overwhelmed by Operational Inefficiencies?", title1: "AI-Driven Workflow Automation", description1: "Mocxha automates routine tasks and workflows with AI, significantly reducing manual effort and increasing operational efficiency across departments.", title2: "Unified Data Insights", description2: "Mocxha provides AI-driven dashboards and reporting, delivering real-time insights from unified data to empower informed decision-making and streamline operations."},
  { icon: <Steps weight="duotone" size={24} color="#34A770"/>, name: "Sales", question: "Struggling with Disconnected Marketing Data?", title1: "AI-Enhanced Data Unification", description1: "Mocxha uses AI to unify marketing data, providing a comprehensive view of campaign performance and customer behavior for improved marketing strategies.", title2: "AI-Driven Actionable Analytics", description2: "Mocxha's AI-powered analytics deliver actionable insights, optimizing marketing ROI and addressing the challenges of data fragmentation."},
  { icon: <NavigationArrow weight="duotone" size={24} color="#D511FD"/>, name: "Projects", question: "Projects Falling Behind Schedule?", title1: "AI-Optimized Project Planning", description1: "Mocxha enhances project planning with AI-driven resource allocation, timeline optimization, and risk assessment for efficient project execution.", title2: "AI-Powered Collaboration", description2: "Mocxha facilitates seamless collaboration with AI-driven communication tools and workflow automation, ensuring projects stay on track and within budget."},
  { icon: <CodeSimple weight="duotone" size={24} color="#EF7B16"/>, name: "Inventory", question: "Inventory Management Causing Headaches?", title1: "AI-Powered Inventory Forecasting", description1: "Mocxha uses AI to optimize inventory levels through predictive forecasting, minimizing stockouts and overstocking to reduce costs.", title2: "AI-Driven Real-Time Visibility", description2: "Mocxha provides AI-powered real-time inventory visibility, ensuring accurate data and enabling efficient inventory management to prevent losses."},
]

const features = [
  { description: "AI-Powered Automation"},
  { description: "Unified Platform Integration"},
  { description: "Tailored Business Solutions"},
  { description: "Security Measures & Compliance"},
]
export default function Insights() {

  const [active,setActive] = useState(0);
  
  const toggle = (i: number) => setActive(i);

    return(
        <div className="pt-5 pb-10 md:pt-10 md:pb-15 text-center">
          <div className="flex flex-col justify-center items-center pb-10">
            <p className="font-semibold pt-8 pb-10 md:pb-20">
              How Much Could Your Business Gain with Mocxha’s All-in-One Aida AI Automation and Insights?
            </p>
            <p className="pill">Industry Insights</p>
            <h2>
              How Our Integrated Platform Empowers Key Departments
            </h2>
          </div>
          <div className="bg-white rounded-xl md:flex-row lg:flex-col flex flex-col items-center p-4 m-4 gap-4 lg:gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-1 w-full md:w-1/3 lg:w-full items-center ">
              {items.map((item, i) => (
                <div key={i} className="relative overflow-hidden">
                <button key={i} onClick={() => toggle(i)} className={`w-full button p-px before:z-0 before:rounded-md before:content-[''] before:absolute before:inset-0 before:transition-opacity before:duration-400 before:ease-in-out before:bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]` + ( items[i].title1 == items[active].title1 ? ` before:opacity-100 ` : ` before:opacity-0`) }>
                  <div className={`relative z-0.5 flex rounded-md p-2 md:p-5 gap-4 items-center justify-center opacity-100 ` + ( items[i].title1 == items[active].title1 ? `  bg-white` : ` bg-[#F6F5F4]`)}>
                    <div>
                      {item.icon}
                    </div>
                    <p className={`transition-colors duration-400` + ( items[i].title1 == items[active].title1 ? ` text-black` : ` text-gray-500  `)}>{item.name}</p>
                  </div>
                </button>
                </div>
              ))}
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 text-start  w-full md:w-2/3 lg:w-full p-4 lg:pb-8 lg:px-12 ">
              <div className="flex flex-col items-start gap-2 lg:w-1/3 w-full">
                <h6 className="lg:h-10 h-8">{items[active].question}</h6>
                <a href="#meet" className="btn btn-tertiary">Request access</a>
              </div>
              <div className="flex flex-col gap-3 lg:w-2/3 w-full">
                <h6>{items[active].title1}</h6>
                <p className="text-[#808080] text-sm md:h-15">{items[active].description1}</p>
                <hr className="border-[#F1F0EE] "/>
                <h6>{items[active].title2}</h6>
                <p className="text-[#808080] text-sm md:h-15">{items[active].description2}</p>
              </div>
            </div>
          </div>
          <div className="px-8 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((item, i) => (
                <div key={i} className="flex items-center text-start gap-4">
                 <div className="flex itemss-center justify-center p-px rounded-lg bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
                    <div className="black-gradient rounded-lg size-6">
                      <Check size={15} color="#ffffff"/>
                    </div>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    )
}