"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io"; // Close icon

interface Props {
  name: string;
  href: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerLinks: Props[] = [
    { name: "Shop", href: "/" },
    { name: "Reviews", href: "/" },
    { name: "About", href: "/" },
    { name: "Contact", href: "/" },
    { name: "Cart", href: "/" },
  ];

  return (
    <section className="w-full relative z-50">
      <div className="container !max-w-full backdrop-blur-sm fixed">
        <nav className="w-full relative z-50 flex justify-between items-center h-20 ">
          <Link href="/" className="text-2xl md:text-3xl md:px-0 px-4">Furniqlo</Link>

          <div className="md:flex md:gap-8 hidden font-poppins">
            {headerLinks.map((link) => (
              <Link key={link.name} href={link.href} className="linkStyle last:ml-44 first:mr-44">
                {link.name}
              </Link>
            ))}
          </div>

          <button className="absolute right-0 md:hidden block" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <IoMdClose className="menuButtonStyle p-1" /> : <CiMenuFries className="menuButtonStyle p-1" />}
          </button>
        </nav>

        {isOpen && (
          <div className="bg-[#CEDEEB] absolute top-0 left-0 w-full transition-all duration-700 font-poppins">
            <div className="flex flex-col gap-6 py-10 px-8">
              {headerLinks.map((link) => (
                <Link key={link.name} href={link.href} className="linkStyle first:mt-14" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
