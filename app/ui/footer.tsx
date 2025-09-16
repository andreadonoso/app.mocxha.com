'use client';

import Image from "next/image";
import { Envelope, 
        ArrowRight, 
        LinkedinLogo, 
        XLogo,
    InstagramLogo
 } from "@phosphor-icons/react";

 const homeLinks = [
    { name: "Features", address: "#features" },
    { name: "Pricing", address: "#pricing" },
    { name: "About", address: "#about" },
    { name: "Comparison", address: "#comparison" },
    { name: "Testimonials", address: "#testimonials" },
    { name: "FAQ's", address: "#" },
]

const pagesLinks = [
    { name: "Home", address: "#" },
    { name: "Privacy Policy", address: "#" },
]

const socialLinks = [
    { name: "Linkedin", icon: <LinkedinLogo size={24} weight="duotone"/>, address: "#" },
    { name: "Twittter / X", icon: <XLogo size={24} weight="duotone"/>, address: "#" },
    { name: "Instagram", icon: <InstagramLogo size={24} weight="duotone"/>, address: "#" },
]


export default function Footer() {
    var email = "";
    return (
        <footer className="row-start-3 w-full bg-[#111111] text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 ">
                <div className="pt-16 md:pt-20 ">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h2>Start your 3-day{" "}
                            <span className="bg-gradient-to-r from-[#e62e2e] via-[#ef7718] via-[#75239e] to-[#f700ff] bg-clip-text  text-transparent font-bold w-fit">
                                free trial
                            </span>
                        </h2>
                        <p className="text-[#808080] py-8">Start your free trial now to experience seamless project management without any commitment!</p>
                        <form className="w-80 py-8">
                            <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Enter your email</label>
                            <div className="relative">
                                <input type="email" id="email" className="block w-full p-3 ps-2.5 text-sm border border-gray-300 rounded-lg bg-[#1E1E1E] placeholder-gray-400 text-white" placeholder="Enter your email" required />
                                <button type="submit" className="btn btn-secondary absolute end-0.5 bottom-0.5 font-medium rounded-lg text-sm px-5 py-3 ">Get started</button>
                            </div>
                        </form>
                    </div>
                    <hr className="my-6 border-gray-700" />
                    <div className="flex flex-col md:flex-row w-full justify-between py-12 ">
                        <div className="flex text-[#808080] justify-center">
                            <div className="flex flex-col sm:flex-row md:flex-col gap-12 items-center sm:justify-between">
                                <div className="items-center flex">
                                    <img 
                                        alt="Mocxha logo"
                                        src="images/mocxha-logo.png"
                                        className="h-8 w-auto px-5"
                                        width="120" 
                                        height="32" 
                                    />
                                    <p>Simplifying Projects and Achieving Goals.</p>
                                </div>
                                <a href="mailto:support@mocxha.com" className="btn btn-primary group flex gap-2 items-center justify-between md:mx-0 mx-4 rounded-lg text-[#808080] border border-[#808080]  bg-transparent">
                                    <Envelope size={24} weight="duotone"/>
                                    support@mocxha.com
                                    <ArrowRight size={24} className="transition delay-1 duration-300 ease-in-out group-hover:translate-x-1"/>
                                </a>
                            </div>
                        </div>
                        <hr className="my-20 border-gray-700 md:hidden"/>
                        <div className="flex w-full justify-between md:justify-around">
                            <div>
                                <h5>Home</h5>
                                <div className="text-[#808080]">
                                    { homeLinks.map((item) => (
                                        <a 
                                            key={item.name}
                                            className="flex items-center gap-2 hover:text-white"
                                            href={item.address}
                                            rel="noopener noreferrer"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h5>Pages</h5>
                                <div className="text-[#808080] flex flex-col gap-2">
                                    { pagesLinks.map((item) => (
                                        <a 
                                            key={item.name}
                                            className="flex items-center gap-2 hover:text-white"
                                            href={item.address}
                                            rel="noopener noreferrer"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h5>Social</h5>
                                <div className="text-[#808080] flex flex-col gap-2">
                                    { socialLinks.map((item) => (
                                        <a 
                                            key={item.name}
                                            className="flex items-center gap-2 hover:text-white text-[#808080]  justify-start font-medium rounded-lg text-sm px-4 py-2 bg-[#1E1E1E] transition delay-1 duration-300 ease-in-out active:scale-95 select-none"
                                            href={item.address}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {item.icon}
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-700"/>
                </div>
                <div className="flex w-full justify-between text-[#808080] pb-4 md:pb-4 ">
                    <p>© 2025 Mocxha. All rights reserved.</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}