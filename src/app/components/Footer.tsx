import Link from "next/link";
import React from "react";
import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-[#CEDEEB] py-8">
      <div className="container mx-auto px-6 md:max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Furniqlo</h1>
            <p className="mt-2 text-sm text-gray-700 font-poppins md:w-96">
              Discover the finest furniture pieces that blend style and comfort
              seamlessly.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-4 text-sm md:mt-0 font-poppins">
            <Link href="/shop" className="linkStyle">
              Shop
            </Link>
            <Link href="/review" className="linkStyle">
              Review
            </Link>
            <Link href="/about" className="linkStyle">
              About
            </Link>
            <Link href="/contact" className="linkStyle">
              Contact
            </Link>
            <Link href="/cart" className="linkStyle">
              Cart
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-6 border-t pt-4">
          <p className="font-poppins text-sm text-gray-700">
            © 2023 Furniqlo. All rights reserved.
          </p>
          <div className="flex space-x-3 mt-3 md:mt-0">
            <FaCcVisa className="text-blue-600 text-2xl" />
            <FaCcMastercard className="text-red-600 text-2xl" />
            <FaPaypal className="text-blue-500 text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
