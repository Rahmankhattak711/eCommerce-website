import React from "react";
import Card from "../components/Card";

export default function AllProduct() {
  return (
    <section className="py-8 md:py-16 lg:py-24">
      <div className="container md:!max-w-full">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">All Products</h1>

          <div className="flex md:justify-between justify-center flex-wrap mt-4">
            <Card
              className="mt-6 md:w-[250px]"
              imageSrc="/images/img4.jpg"
              altTitle="Elegant Sofa"
              title="Elegant Sofa"
              description="Crafted by Hatil Designs"
              price="$ 2500"
            />

            <Card
              className="mt-6 md:w-[250px]"
              imageSrc="/images/img4.jpg"
              altTitle="Modern Sofa"
              title="Modern Sofa"
              description="Premium Hatil Collection"
              price="$ 500"
            />

            <Card
              className="mt-6 md:w-[250px]"
              imageSrc="/images/img5.jpg"
              altTitle="Classic Chair"
              title="Classic Parsons"
              description="Crafted by Regal Furnishings"
              price="$ 200"
            />

            <Card
              className="mt-6 md:w-[250px]"
              imageSrc="/images/img6.jpg"
              altTitle="Cozy Bedframe"
              title="Cozy Bedframe"
              description="Designed by Laxona Interiors"
              price="$ 300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              <Card
                className="mt-6"
                imageSrc="/images/img4.jpg"
                altTitle="Luxury Sofa"
                title="Luxury Sofa"
                description="Exclusive Hatil Design"
                price="$ 200"
              />
              <Card
                className="mt-6"
                imageSrc="/images/img4.jpg"
                altTitle="Comfy Sofa"
                title="Comfy Sofa"
                description="Top-tier Hatil Collection"
                price="$ 700"
              />
              <Card
                className="mt-6"
                imageSrc="/images/img5.jpg"
                altTitle="Elegant Chair"
                title="Elegant Parsons Chair"
                description="Made by Regal Furnishings"
                price="$ 900"
              />
              <Card
                className="mt-6"
                imageSrc="/images/img6.jpg"
                altTitle="Relaxing Bedframe"
                title="Relaxing Bedframe"
                description="Handcrafted by Laxona Interiors"
                price="$ 100"
              />
            </div>
            <div>
              <Card
                className="mt-6 w-full md:pb-0 pb-10 h-[24rem] md:h-[28rem] object-cover"
                width="w-full h-full"
                imageSrc="/images/img3.jpg"
                altTitle="Premium Sofa"
                title="Premium Sofa"
                description="Exclusive Hatil Furniture"
                price="$ 200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
