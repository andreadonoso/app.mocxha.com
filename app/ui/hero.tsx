"use client"
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  { name: "Sharepoint", source:"/images/logos/aSlGT0Lvdp13ewMheNQHPjaMqQ.avif" },
  { name: "Intuit", source:"/images/logos/j7fR4mo1E1dnj7BSLFebYcmHJlU.avif" },
  { name: "SAP", source:"/images/logos/x1imAsAqW677OfP36ujSRXTnRDo.avif" },
  { name: "HubSpot", source:"/images/logos/57GJsYrZni46Qhd9fVOmSkTW5x4.avif" },
  { name: "Slack", source:"/images/logos/wcl1RmrEWo0o6HJimzllOjeQQko.png" },
  { name: "Salesforce", source:"/images/logos/QzSBtDMVx2HkNGY28FPPy76BaXI.png" },
  { name: "Tableau", source:"/images/logos/kJwZU1W7uGQ5LHVMnBqHuk10.avif" },
  { name: "Drive", source:"/images/logos/dsVq1g7ZdRgulkl9riBRb7A8Ik.avif" },
  { name: "Bamboo", source:"/images/logos/MbzvTssvfgioT9LcYCFgnm6gKO4.avif" },
  { name: "DropBox", source:"/images/logos/DcnroCcAcrtPokflW1zl2KNcqU.png" },
  { name: "DocuSign", source:"/images/logos/heYXEtdK2eG9uRYKMAcF0ykFnDc.png" },
  { name: "Chargebee", source:"/images/logos/xPv4o4ibMnlHSi8TQfze2G7fKd8.avif" },
  { name: "Notion", source:"/images/logos/0SOElqTkjlh1C6MWjPOnhQWv0Q.avif" },
  { name: "Asana", source:"/images/logos/cRVNxqFEGuIxm62gjiAmhXNvks.avif" },
];


export default function Hero() {
    return(
      <div className="flex flex-col py-15 md:py-30 items-center justify-center text-center">
        <p className="pill-hero">Automate Your Business In One Click</p>
        <h1 className="pt-8 pb-4">Stop Juggling Software. Run Your Entire Business With{" "}
          <span className="bg-gradient-to-r from-[#e62e2e] via-[#ef7718] via-[#75239e] to-[#f700ff] bg-clip-text  text-transparent font-bold w-fit">One AI-Powered Platform</span>
        </h1>
        <p className="text-[#3D3D3D]">Mocxha centralizes your ERP, CRM, Marketing, HR, & Finance. Supercharged by Aida AI for unprecedented automation, insight, and growth. Replace dozens of disconnected tools today.</p>
        <a  href="#contact" className="a btn btn-primary mt-8">Request a Live Demo</a>
        <div className="p-1 my-8 relative h-auto rounded-lg bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
          <img
            src="/images/Lp2DrZG63F3x7ngFdocJez29ukk.jpg"
            alt="Dashboard"
            className="rounded-lg block w-full h-auto "
          />
        </div>
        <p className="text=[#111111] my-8">One Platform to Rule Them All: Consolidate Your Business Software</p>
        <Marquee
          autoFill
          pauseOnClick
          className="[contain:inline-size] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          { logos.map((logo, i) => (
            <div key={i} className="mx-8">
              <Image
                alt={logo.name}
                src={logo.source}
                width={140} 
                height={35}
                className="object-contain w-auto h-[35px] max-w-none"
              />
            </div>
          )) }
        </Marquee>
      </div>
    )
}