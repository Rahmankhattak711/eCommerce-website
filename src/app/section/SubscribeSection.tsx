import React from "react";
import Button from "../components/Button";

export default function SubscribeSection() {
  return (
    <section className="relative z-0  overflow-x-clip overflow-hidden ">
      <div className="absolute inset-0 -z-50  ">
      {/* [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] */}
        <div className="absolute inset-0 -z-30 opacity-10 after:pointer-events-none"></div>
        <div className="ring-class size-[420px] z-40 bg-[#CEDEEB]"></div>
        <div className="ring-class size-[620px] z-30 bg-white"></div>
        <div className="ring-class size-[820px] z-20 bg-[#CEDEEB]"></div>
        <div className="ring-class size-[1020px] z-10 bg-white"></div>
        <div className="ring-class size-[1220px] bg-[#CEDEEB]"></div>
      </div>

      <div className="container md:!max-w-full">
        <div className="h-screen flex flex-col justify-center items-center">
          <h2 className="md:text-3xl text-2xl font-bold">Stay Update With</h2>
          <h2 className="md:text-3xl text-2xl font-bold mb-4">
            Our Latest Designs
          </h2>
          <Button variant="default" btnValue="Subscribe Now" />
        </div>
      </div>
    </section>
  );
}
