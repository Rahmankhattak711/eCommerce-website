import React from "react";
import Card from "../components/Card";

export default function CreativeInsight() {
  return (
    <section className="py-8 md:py-16 lg:py-24">
      <div className="container md:!max-w-full">
        <div>
          <h1 className="md:text-3xl text-2xl font-bold">Creative Insight &</h1>
          <h1 className="md:text-3xl text-2xl font-bold">
            Home Transformation
          </h1>
          <h1 className="md:text-3xl text-2xl font-bold">
            Ideas for Every Room
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <Card
            className="md:w-[250px]"
            width="h-[250px]"
            imageSrc="/images/bedroom06.jpg"
            altTitle="Elegant Sofa"
          />
          <div className="md:w-[250px] hidden md:block h-[250px]"></div>

          <Card
            className="md:w-[250px]"
            width="h-[250px]"
            imageSrc="/images/bedroom01.jpg"
            altTitle="Elegant Sofa"
          />
          <Card
            className="md:w-[250px]"
            width="h-[250px]"
            imageSrc="/images/bedroom02.jpg"
            altTitle="Elegant Sofa"
          />
          <Card
            className="md:w-[250px]"
            width="h-[250px]"
            imageSrc="/images/bedroom03.jpg"
            altTitle="Elegant Sofa"
          />
          <Card
            className="md:w-[250px]"
            width="h-[250px]"
            imageSrc="/images/bedroom04.jpg"
            altTitle="Elegant Sofa"
          />
          <div className="md:w-[250px] hidden md:block h-[250px]"></div>
          <Card
            className="md:w-[250px]"
            width="h-[250px]"
            imageSrc="/images/bedroom05.jpg"
            altTitle="Elegant Sofa"
          />
        </div>
      </div>
    </section>
  );
}
