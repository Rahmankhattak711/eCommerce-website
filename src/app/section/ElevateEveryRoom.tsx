import Image from "next/image";
import React from "react";

export default function ElevateEveryRoom() {
  return (
    <section className="">
      <div className="container max-w-full md:!max-w-full ">
        <div className="bg-[#CEDEEB] md:p-24 p-6 rounded-3xl ">
          <p className=" md:text-5xl text-center text-base font-bold leading-8 ">
            Elevate Every Room with
            <Image
              src="/images/expo1.png"
              alt="expo1"
              width={500}
              height={500}
              className="md:w-10 w-6  md:h-10 inline-block"
            />
            Exquisite Furniture{" "}
            <Image
              src="/images/expo2.png"
              alt="expo1"
              width={500}
              height={500}
              className="md:w-10 w-6  md:h-10 inline-block"
            />{" "}
            Crafted to Reflect{" "}
            <Image
              src="/images/expo3.png"
              alt="expo1"
              width={500}
              height={500}
              className="md:w-10 w-6  md:h-10 inline-block"
            />{" "}
            Your Persona Style,{" "}
            <Image
              src="/images/expo4.png"
              alt="expo1"
              width={500}
              height={500}
              className="md:w-10 w-6  md:h-10 inline-block"
            />{" "}
            Turning{" "}
            <Image
              src="/images/expo5.png"
              alt="expo1"
              width={500}
              height={500}
              className="md:w-10 w-6  md:h-10 inline-block"
            />{" "}
            Ordinary Spaces{" "}
            <Image
              src="/images/expo6.png"
              alt="expo1"
              width={500}
              height={500}
              className="md:w-10 w-6  md:h-10 inline-block"
            />{" "}
            into Extraordinary Sanctuaries
          </p>
        </div>
      </div>
    </section>
  );
}
