"use client"
import { Envelope, Phone, MapPin } from "@phosphor-icons/react";

const items = [
  {icon: <Envelope color="#000000" weight="fill" size={24}/>, description: "info@mocxha.com", action: "Email Us"},
  {icon: <Phone color="#000000" weight="fill" size={24}/>, description: "+1 (786)-796-6757", action: "Call Us"},
  {icon: <MapPin color="#000000" weight="fill" size={24}/>, description: "3300 NE 192 St, Aventura, FL 33180", action: "Get Direction"},
]

export default function Contact() {
    return(
        <div id="contact" className="py-20 flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-4">
            <p className="pill">Contact</p>
            <h2>Ready to Discuss Your Specific Needs? Let's Connect.</h2>
            <p>
              Reach out for inquiries, support, or to schedule your personalized demo. Our team is ready to help you explore the power of Mocxha.
            </p>
            {items.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center gap-4 bg-[#E8E4E2] rounded-lg p-3 justify-between">
                <div className="flex gap-4">
                  {item.icon}
                  <p>{item.description}</p>
                </div>
                <button className="btn btn-primary sm:w-40 w-full">{item.action}</button>
              </div>
            ))}
          </div>
          {/* The following section will be available in V2 */}
          <div className="bg-[#111111] text-white p-4 flex-1 hidden">
            <h5>30 Min Meeting - Moxcha</h5>
            <p>A quick demo to see if we are the right fit for eachother</p>
            <p>... embed api here...</p>
          </div>
        </div>
    )
}