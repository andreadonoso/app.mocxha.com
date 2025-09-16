'use client'

import React, {useState, useRef, useEffect} from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from "next/link";

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
  { name: 'Comparison', href: '#comparison' },
]

export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const TOL = 8;        
    const HIDE_AFTER = 64; 

    const onScroll = () => {
      const y = window.scrollY;

      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const delta = y - lastY.current;

        if (Math.abs(delta) > TOL) {
          if (delta > 0 && y > HIDE_AFTER) setVisible(false); 
          else setVisible(true);                               
        }

        lastY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

    
    return (
        <header
            className={[
                "sticky xl:top-4 top-0 pyinset-x-0 z-50 max-w-7xl mx-auto",
                "transition-transform  duration-300 ease-out",
                "will-change-transform transform-gpu",
                visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
            ].join(" ")}
        >
            <nav aria-label="Global" className={`select-none flex items-center justify-between px-6 xl:mx-4 xl:py-2 xl:px-3 py-6 xl:bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 xl:rounded-lg `}>
                <div className="flex xl:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Mocxha</span>
                        <img 
                            alt="Mocxha logo"
                            src="images/mocxha-logo.png"
                            className="h-8 w-auto transition delay-5 duration-300 ease-in-out hover:scale-108"
                            width="120" 
                            height="32" 
                        />
                    </a>
                </div>
                {visible && (
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
                            className="z-[9999] border border-[#000000]/10 w-60 p-3 mt-4 origin-top-right rounded-xl bg-white text-md text-bold text-black transition duration-200 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                            >
                                {navigation.map((item) => (
                                    <MenuItem key={item.name}>
                                        <a 
                                        href={item.href}
                                        className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 data-focus:bg-black/8 "
                                        >
                                        {item.name}
                                        {/* <kbd className="ml-auto hidden font-sans text-xs text-black/50 group-data-focus:inline">⌘E</kbd> */}
                                        </a>
                                    </MenuItem>
                                ))}
                                <MenuItem >
                                    <a 
                                    href="#meet" 
                                    className="btn btn-primary mt-1 text-center w-full"
                                    >
                                        Request access
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                ) }
                
                <div className="hidden xl:flex xl:gap-x-1">
                    {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="text-base/6 font-medium text-[gray-900] hover:bg-[#ffffff]/50 rounded-md px-3.5 py-2.5">
                        {item.name}
                    </a>
                    ))}
                </div>
                <div className="hidden xl:flex xl:flex-1 xl:justify-end  xl:gap-x-2">
                    <a href="#meet" className="btn btn-primary">
                    Request access
                    </a>
                </div>
            </nav>
        </header>
    )
}