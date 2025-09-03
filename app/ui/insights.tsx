"use client"

import { 
  FireSimple,
  UsersThree,
  Steps,
  NavigationArrow,
  CodeSimple,
  Check
 } from "@phosphor-icons/react";

const items = [
  { icon: <FireSimple weight="duotone" size={24} color="#FF2F2F"/>, name: "Marketing", question: "Missing Out on Sales Opportunities?", title1: "AI-Powered Lead Management", description1: "Mocxha's AI automates lead nurturing and qualification, streamlining the sales process and maximizing conversion rates.", title2: "Enhanced Sales Visibility", description2: "Mocxha provides AI-driven sales forecasting and pipeline analysis, offering clear visibility to optimize sales strategies and drive revenue growth."},
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
    return(
        <div className="py-20">
          <div className="flex flex-col justify-center items-center">
            <p className="pill">Industry Insights</p>
            <h2>
              How Our Integrated Platform Empowers Key Departments
            </h2>
          </div>
          <div className="bg-white rounded-xl flex flex-col m-16 p-4">
            <div className="flex justify-between gap-2 pb-4">
              {items.map((item, i) => (
                <div key={i} className="flex-1 pt-0.5 px-0.5 pb-0 rounded-xl bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
                  <div className="items-center p-5 flex gap-2 rounded-lg justify-center bg-white">
                    {item.icon}
                    <h4>{item.name}</h4>
                  </div>
                </div>
              ))}
            </div>
            {items.map((item, i) => (
              <div key={i} className="flex px-12 py-12 justify-between gap-16">
                <div className="flex flex-col gap-8 items-start w-100">
                  <h4>{item.question}</h4>
                  <button className="btn btn-tertiary">Start 3-day free trial</button>
                </div>
                <div className="flex flex-col gap-4 w-140">
                  <h4>{item.title1}</h4>
                  <p className="text-[#808080]">{item.description1}</p>
                  <hr className="border-[#F1F0EE] my-8"/>
                  <h4>{item.title1}</h4>
                  <p className="text-[#808080]">{item.description1}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 justify-between items-center">
            {features.map((item, i) => (
              <div key={i} className="flex">
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
    )
}