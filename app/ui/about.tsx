"use client";

import {
  DeviceMobileCamera,
  AppStoreLogo,
  GooglePlayLogo,
  Star,
} from "@phosphor-icons/react";

const items = [
  {
    icon: <DeviceMobileCamera size={24} color="white" weight="duotone" />,
    title: "Seamless Integration",
    description: "Unified ERP Platform",
  },
  {
    icon: <AppStoreLogo size={24} color="white" weight="duotone" />,
    title: "Aida AI Power",
    description: "AI-Powered Automation",
  },
  {
    icon: <GooglePlayLogo size={24} color="white" weight="duotone" />,
    title: "Data Insights",
    description: "Real-Time Data Analytics",
  },
  {
    icon: <Star size={24} color="white" weight="duotone" />,
    title: "Tailored Solutions",
    description: "Industry Adaptability",
  },
];

export default function About() {
  return (
    <div id="about" className="flex flex-col py-20 gap-10 bg-[#f4f2f1]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-lg p-10">
        <div className="w-full">
          <p className="pill">About Us</p>
          <h2>Our Vision: A Unified Future for Business Operations</h2>
          <div className="flex flex-col gap-4 pt-4">
            <p>
              Mocxha was founded out of frustration with the fragmented software
              landscape that stifles growth. We saw talented teams hindered by
              data silos, manual processes, and disconnected tools. Our mission
              is to empower businesses with an intelligent, unified operating
              system.
            </p>
            <p>
              By integrating essential functions and leveraging Aida AI, we
              enable companies to achieve peak efficiency, unlock critical
              insights, and scale confidently. We are committed to delivering an
              intuitive, powerful platform that adapts and evolves with your
              success.
            </p>
            <a href="#contact" className="btn btn-primary w-fit">
              Contact Us
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <iframe
            src="https://www.youtube.com/embed/ChCVkytcKgQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-60"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col text-center justify-between items-center gap-2 border border-[#dcdbd4] bg-[#E8E4E2] rounded-xl py-8 w-full"
          >
            <div className="p-[2px] items-center flex justify-center rounded-lg bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
              <div className="black-gradient p-2 rounded-lg">{item.icon}</div>
            </div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
