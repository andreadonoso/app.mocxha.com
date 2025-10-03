"use client";

import Image from "next/image";

export default function RADS() {
  return (
    <div id="testimonials" className="flex flex-col items-center py-20">
      <p className="inline-flex bg-[#ffffff] border border-[#DED8D3]/3  shadow-[0_1px_1px_rgba(0,0,0,0.20),0_8px_20px_rgba(0,0,0,0.05)] rounded-[100] px-2 py-2 my-5">
        RADS
      </p>
      <h2>Framework & User Queries</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row pt-12 gap-4">
          <div className="border p-8 rounded-lg border-[#FAD6B7] bg-[#FDF1E7] flex flex-col justify-between">
            <h4>Rapid Recognition</h4>
            <p>Instantly Recognize Sales Opportunities</p>
            <Image
              alt="TBD"
              src="/images/rads/5isFdPfmEQoGtWfyDfQ67HXlIU.avif"
              width={100}
              height={100}
            />
          </div>
          <div className="border p-8 rounded-lg  border-[#DFB7FA] bg-[#F4E7FD] flex flex-col justify-between">
            <h4>Applicable</h4>
            <p>Highly Applicable Inventory Automation</p>
            <Image
              alt="TBD"
              src="/images/rads/rkFjOLlQRYgYiXaX4iqkmZDc.avif"
              width={100}
              height={100}
            />
          </div>
          <div className="border p-8 rounded-lg border-[#f1f0ee] flex flex-col justify-between bg-white">
            <p>
              Is complex inventory management draining your resources? Mocxha's
              flexible automation adapts to your unique inventory needs,
              reducing costs and ensuring optimal stock levels.
            </p>
            <div className="flex items-center mt-8">
              <Image
                alt="TBD"
                src="/images/profiles3/mC7AUlWtqYW1v31VYDxEMgTgxU.jpg"
                width={35}
                height={35}
                className="mr-4 rounded-lg"
              />
              <p>Inventory Specialist</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="border p-8 rounded-lg border-[#f1f0ee] flex flex-col justify-between bg-white">
            <p>
              Struggling with missed sales opportunities? Mocxha's AI-driven
              insights instantly reveal emerging trends, allowing you to
              capitalize on opportunities before competitors.
            </p>
            <div className="flex items-center mt-8">
              <Image
                alt="TBD"
                src="/images/profiles3/OvvbpyjbKuCFO8zv5VOKScAJcA.avif"
                width={35}
                height={35}
                className="mr-3"
              />
              <p>Sales Manager</p>
            </div>
          </div>
          <div className="border p-8 rounded-lg border-[#f1f0ee] flex flex-col justify-between  bg-white">
            <p>
              Are project delays and cost overruns impacting your profitability?
              Mocxha's AI-enhanced project management solutions offer
              streamlined implementation, significantly improving delivery times
              and profitability.
            </p>
            <div className="flex items-center mt-8">
              <Image
                alt="TBD"
                src="/images/profiles3/lGettqdhcKnvyoTl1qUpnGjew.avif"
                width={35}
                height={35}
                className="mr-3"
              />
              <p>Project Coordinator</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="border p-8 rounded-lg border-[#D3E4C4] bg-[#F1FDE7] flex flex-col justify-between">
            <h4>Deployable</h4>
            <p>Rapidly Deployable Marketing Insights</p>
            <Image
              alt="TBD"
              src="/images/rads/e9YmzOzjfUYCTcrfLVjh95JoII.avif"
              width={100}
              height={100}
            />
          </div>
          <div className="border p-8 rounded-lg border-[#f1f0ee] flex flex-col justify-between  bg-white">
            <p>
              Tired of slow, cumbersome marketing reports? Mocxha delivers
              rapid, pre-built marketing insights, providing immediate data on
              campaign effectiveness and customer engagement.
            </p>
            <div className="flex items-center mt-8">
              <Image
                alt="TBD"
                src="/images/profiles3/1vLbGc8R4d4ZPbIcZw13RbjWkMw.avif"
                width={35}
                height={35}
                className="mr-4"
              />
              <p>Marketing Analyst</p>
            </div>
          </div>
          <div className="border p-8 rounded-lg border-[#FAB7B7] bg-[#FDE7E7] flex flex-col justify-between">
            <h4>Solutions</h4>
            <p>AI-Powered Project Solutions, Deployed with Ease</p>
            <Image
              alt="TBD"
              src="/images/rads/Ri0zCSzklvDvjC3YDba31QnQ.avif"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
