'use client';

import Image from "next/image";
import { Envelope, 
        ArrowRight, 
        LinkedinLogo, 
        XLogo,
    InstagramLogo
 } from "@phosphor-icons/react";

export default function Footer() {
    var email = "";
    return (
        <footer className="row-start-3 w-full bg-[#111111] text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 ">
                <div className="pt-16 md:pt-20 ">
                    <div className="flex flex-col items-center justify-center">
                        <h2>Start your 3-day{" "}
                            <span className="bg-gradient-to-r from-[#e62e2e] via-[#ef7718] via-[#75239e] to-[#f700ff] bg-clip-text  text-transparent font-bold w-fit">
                                free trial
                            </span>
                        </h2>
                        <p className="text-[#808080] py-8">Start your free trial now to experience seamless project management without any commitment!</p>
                        <form className="w-80 py-8">
                            <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Enter your email</label>
                            <div className="relative">
                                <input type="email" id="email" className="block w-full p-3 ps-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#1E1E1E] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1E1E1E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
                                <button type="submit" className="text-black absolute end-0.5 bottom-0.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-[#ffffff] dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                            </div>
                        </form>
                    </div>
                    <hr className="my-6 border-gray-700" />
                    <div className="flex w-full justify-between py-12">
                        <div className="flex text-[#808080]">
                            <div className="flex flex-col justify-between">
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
                                <button className="text-[#808080] border border-[#808080] flex items-center justify-between w-55 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 dark:bg-transparent dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <Envelope/>
                                    info@mocxha.com
                                    <ArrowRight/>
                                </button>
                            </div>
                        </div>
                        <div>
                            <h5>Home</h5>
                            <div className="text-[#808080] flex flex-col gap-2">
                                <a
                                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Features
                                </a>
                                <a
                                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Pricing
                                </a>
                                <a
                                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    About
                                </a>
                                <a
                                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Comparison
                                </a>
                                <a
                                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Testimonials
                                </a>
                                <a
                                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    FAQ's
                                </a>
                            </div>
                        </div>
                        <div>
                            <h5>Pages</h5>
                            <div className="text-[#808080] flex flex-col gap-2">
                                <a
                                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Home
                                </a>
                                <a
                                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                        <div>
                            <h5>Social</h5>
                            <div className="text-[#808080] flex flex-col gap-2">
                                <a
                                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[#808080]  justify-start bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 dark:bg-[#1E1E1E] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    href="https://nsextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <LinkedinLogo/>
                                    Linkedin
                                </a>
                                <a
                                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[#808080] justify-start bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 dark:bg-[#1E1E1E] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <XLogo                            />
                                    Twitter / X
                                </a>
                                <a
                                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[#808080] justify-start bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 dark:bg-[#1E1E1E] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <InstagramLogo/>
                                    Instagram
                                </a>
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