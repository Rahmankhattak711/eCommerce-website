import React from "react";
import Button from "../components/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="md:h-[500px] h-[700px] ">
      <div className="container !max-w-full  bg-[#CEDEEB] left-0 w-full h-full flex flex-col justify-center">
        <div className="flex md:flex-row items-center gap-20 flex-col">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Elevate Your Space
            </h1>
            <h1 className="text-4xl md:text-5xl mb-6 font-bold">
              With Our Furniture
            </h1>

            <p className="text-base font-poppins ">
              Discover luxurious, high-quality
            </p>
            <p className="text-base font-poppins ">
              furniture crafted for comfort and style.
            </p>

            <div className="flex gap-4 font-poppins items-center mt-6">
              <Button variant="default" btnValue="Shop Now" />
              <p className="text-xs md:text-base">Free Shipping on Orders Over $100</p>
            </div>
          </div>
          <div className="md:relative">
            <div className="h-44 w-80 md:absolute md:-bottom-72 bottom-0 ">
               <Image src='/images/img1.webp' alt='hero section image' width={500} height={500} className="w-96 rounded-md bg-gray-600 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
