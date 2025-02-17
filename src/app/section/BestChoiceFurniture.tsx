import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";

export default function BestChoiceFurniture() {
  return (
    <section className="py-8 md:py-16 bg-[#F6F6F6] h-auto md:h-[500px]">
      <div className="container md:!max-w-full">
        <div className="flex flex-col gap-6 justify-center items-center">
          <h1 className="md:text-3xl text-2xl font-bold">
            Best Choice Our Furniture
          </h1>
          <div className="flex flex-wrap justify-center gap-2">
            <Button variant="default" btnValue="Special Price" />
            <Button variant="outline" btnValue="New Product" />
            <Button variant="outline" btnValue="Best Sellers" />
          </div>

        </div>
          <div className="flex gap-4 md:flex-row flex-col mt-10">
            <Card imageSrc="/images/img4.jpg" altTitle="Elegant Sofa"/>
            <Card imageSrc="/images/img5.jpg" altTitle="Elegant Sofa"/>
            <Card imageSrc="/images/img6.jpg" altTitle="Elegant Sofa"/>
          </div>
      </div>
    </section>
  );
}
