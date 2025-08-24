'use client'

import { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from "next/link";

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Comparison', href: '#' },
]

export default function Header() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 max-w-7xl mx-auto">
            <nav aria-label="Global" className="flex items-center justify-between p-9 xl:px-8">
                <div className="flex xl:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Mocxha</span>
                        <img 
                            alt="Mocxha logo"
                            src="images/mocxha-logo.png"
                            className="h-8 w-auto"
                            width="120" 
                            height="32" 
                        />
                    </a>
                </div>
                <div className="xl:hidden -m-2.5">
                    <Menu>
                        <MenuButton className="inline-flex items-center justify-center rounded-md p-2 text-[#ffffff] bg-[#000000] focus:outline-none cursor-pointer">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-7" />
                        </MenuButton>
                        <MenuItems 
                        modal={false}
                        transition
                        anchor="bottom end"
                        className="border border-[#000000]/10 w-52 p-2 mt-2 origin-top-right rounded-xl bg-white text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                        >
                            {navigation.map((item) => (
                                <MenuItem key={item.name}>
                                    <a 
                                    href={item.href}
                                    className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-black/8"
                                    >
                                    {item.name}
                                    <kbd className="ml-auto hidden font-sans text-xs text-black/50 group-data-focus:inline">⌘E</kbd>
                                    </a>
                                </MenuItem>
                            ))}
                            <MenuItem>
                                <a 
                                href="#"
                                className="block mt-1 text-center w-full rounded-md border border-[#111111] px-3.5 py-2.5 text-sm font-semibold text-[#111111] shadow-xs hover:bg-[#000000]/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Start with SEO
                                </a>
                            </MenuItem>
                            <MenuItem >
                                <a 
                                href="#" 
                                className="block mt-1 text-center w-full rounded-md bg-[#000000] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#3D3D3D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Request access
                                </a>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </div>
                <div className="hidden xl:flex xl:gap-x-1">
                    {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="text-base/6 font-medium text-[gray-900] hover:bg-[#ffffff]/50 rounded-md px-3.5 py-2.5">
                        {item.name}
                    </a>
                    ))}
                </div>
                <div className="hidden xl:flex xl:flex-1 xl:justify-end  xl:gap-x-2">
                    <a href="#" className="rounded-md border border-[#111111] px-3.5 py-2.5 text-sm font-semibold text-[#111111] shadow-xs hover:bg-[#ffffff]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Start with SEO
                    </a>
                    <a href="#" className="rounded-md bg-[#000000] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#3D3D3D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Request access
                    </a>
                </div>
            </nav>
        </header>
    )
}