"use client"
import { Envelope, Phone, MapPin } from "@phosphor-icons/react";
import Cal, { getCalApi }  from "@calcom/embed-react";

const items = [
  {icon: <Envelope color="#000000" weight="fill" size={24}/>, description: "support@mocxha.com", action: "Email Us", href: "mailto:support@mocxha.com"},
  {icon: <Phone color="#000000" weight="fill" size={24}/>, description: "+1 (954) 328-2024", action: "Call Us", href: "tel:+19543282024"},
  {icon: <MapPin color="#000000" weight="fill" size={24}/>, description: "3510 NW 84th Ave office 340, Plantation, FL 33324", action: "Get Direction", href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("510 NW 84th Ave Suite 340, Plantation, FL 33324")}&travelmode=driving` },
]

export default function Contact() {
    return(
        <div id="contact" className="flex flex-col gap-8 pt-5 pb-8 ">
          <div className="flex flex-col gap-4 justify-between lg:px-22 md:px-15 px-12 ">
            <p className="pill">Contact</p>
            <h2>Ready to Discuss Your Specific Needs? Let's Connect.</h2>
            <p>
              Reach out for inquiries, support, or to schedule your personalized demo. Our team is ready to help you explore the power of Mocxha.
            </p>
            <div className="flex flex-col gap-4 ">
              {items.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-center gap-4 bg-[#E8E4E2] rounded-lg p-3 justify-between">
                  <div className="flex gap-4 items-center sm:w-3/5 w-full md:w-auto">
                    <div>
                      {item.icon}
                    </div>
                    <p>{item.description}</p>
                  </div>
                  <a target="_blank" href={item.href} className="btn btn-primary sm:w-2/5 w-full md:w-40">{item.action}</a>
                </div>
              ))}
            </div>
          </div>
          <div id="meet">
            <Cal  calLink="mocxha" config={{ theme: "dark"}} />
          </div>
        </div>
    )
}