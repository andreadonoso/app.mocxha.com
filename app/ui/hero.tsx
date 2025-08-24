import Image from "next/image";

export default function Hero() {
    return(
        <div className="flex flex-col py-25 md:py-30 items-center justify-center text-center">
          <p className="border bg-[#ffffff]/20 border-[#DED8D3] rounded-[100] px-3 py-1 mt-10">Automate Your Business In One Click</p>
          <h1 className="pt-8 pb-4">Stop Juggling Software. Run Your Entire Business With{" "}
            <span className="bg-gradient-to-r from-[#e62e2e] via-[#ef7718] via-[#75239e] to-[#f700ff] bg-clip-text  text-transparent font-bold w-fit">One AI-Powered Platform</span>
          </h1>
          <p className="text-[#3D3D3D]">Mocxha centralizes your ERP, CRM, Marketing, HR, & Finance. Supercharged by Aida AI for unprecedented automation, insight, and growth. Replace dozens of disconnected tools today.</p>
          <button  className="text-white  mt-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-[#000000] dark:hover:bg-blue-700 dark:focus:ring-blue-800">Request a Live Demo</button>
          <div className="p-1 my-8 relative h-auto rounded-lg bg-[linear-gradient(to_bottom,#FF2F2F_0%,#EF7B16_33%,#8A43E1_66%,#D511FD_100%)]">
            <img
              src="/images/Lp2DrZG63F3x7ngFdocJez29ukk.jpg"
              alt="Dashboard"
              className="rounded-lg block w-full h-auto "
            />
          </div>
          <p className="text=[#111111] mb-8">One Platform to Rule Them All: Consolidate Your Business Software</p>
          <div className="flex overflow-x-hidden">
            <div className="relative h-35 w-129">
            <Image
              src="/images/logos/aSlGT0Lvdp13ewMheNQHPjaMqQ.avif"
              className="object-contain"
              fill={true}
              alt="Sharepoint"
            />
            </div>
            <div className="relative h-35 w-129">
              <Image
                src="/images/logos/j7fR4mo1E1dnj7BSLFebYcmHJlU.avif"
                className="object-contain"
                fill={true}
                alt="Intuit"
              />
              </div>
              <div className="relative h-35 w-129">
              <Image
                src="/images/logos/x1imAsAqW677OfP36ujSRXTnRDo.avif"
                className="object-contain"
                fill={true}
                alt="SAP"
              />
              </div>
              <div className="relative h-35 w-129">
              <Image
                src="/images/logos/57GJsYrZni46Qhd9fVOmSkTW5x4.avif"
                className="object-contain"
                fill={true}
                alt="HubSpot"
              />
              </div>
              <div className="relative h-35 w-129">
              <Image
                src="/images/logos/wcl1RmrEWo0o6HJimzllOjeQQko.png"
                className="object-contain"
                fill={true}
                alt="Slack"
              />
              </div>
              <div className="relative h-35 w-129">
              <Image
                src="/images/logos/QzSBtDMVx2HkNGY28FPPy76BaXI.png"
                className="object-contain"
                fill={true}
                alt="Salesforce"
              />
              </div>
              <div className="relative h-35 w-129">
              <Image
                src="/images/logos/kJwZU1W7uGQ5LHVMnBqHuk10.avif"
                className="object-contain"
                fill={true}
                alt="Tableau"
              />
              </div>
              <div className="relative h-35 w-129">
              <Image
                src="/images/logos/dsVq1g7ZdRgulkl9riBRb7A8Ik.avif"
                className="object-contain"
                fill={true}
                alt="Drive"
              />
              </div>
              <div className="relative h-35 w-129">
              <Image
                src="/images/logos/MbzvTssvfgioT9LcYCFgnm6gKO4.avif"
                className="object-contain"
                fill={true}
                alt="Bamboo"
              />
              </div>
              <div className="relative h-35 w-129">
              <Image
                src="/images/logos/DcnroCcAcrtPokflW1zl2KNcqU.png"
                className="object-contain"
                fill={true}
                alt="DropBox"
              />
              </div>
              <div className="relative h-35 w-100">
              <Image
                src="/images/logos/heYXEtdK2eG9uRYKMAcF0ykFnDc.png"
                className="object-contain"
                fill={true}
                alt="DocuSign"
              />
              </div>
              <div className="relative h-35 w-129">
              <Image
                src="/images/logos/xPv4o4ibMnlHSi8TQfze2G7fKd8.avif"
                className="object-contain"
                fill={true}
                alt="Chargebee"
              />
              </div>
              <div className="relative h-35 w-129">
              <Image
                src="/images/logos/0SOElqTkjlh1C6MWjPOnhQWv0Q.avif"
                className="object-contain"
                fill={true}
                alt="Notion"
              />
              </div>
              <div className="relative h-35 w-129">
              <Image
                src="/images/logos/cRVNxqFEGuIxm62gjiAmhXNvks.avif"
                className="object-contain"
                fill={true}
                alt="Asana"
              />
              </div>
          </div>
        </div>
    )
}