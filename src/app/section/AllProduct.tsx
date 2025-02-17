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
              altTitle="Serenity Sofa"
              title="Serenity Sofa"
              description="Menufacture Hatil"
            />

            <Card
              className="mt-6 md:w-[250px]"
              imageSrc="/images/img4.jpg"
              altTitle="Serenity Sofa"
              title="Serenity Sofa"
              description="Menufacture Hatil"
            />

            <Card
              className="mt-6 md:w-[250px]"
              imageSrc="/images/img5.jpg"
              altTitle="Parsons Chair"
              title="Parsons Chair - 4"
              description="Menufacture Regal"
            />

            <Card
              className="mt-6 md:w-[250px]"
              imageSrc="/images/img6.jpg"
              altTitle="Tranquil Bedframe"
              title="Tranquil Bedframe"
              description="Menufacture Laxona"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              <Card
                className="mt-6"
                imageSrc="/images/img4.jpg"
                altTitle="Serenity Sofa"
                title="Serenity Sofa"
                description="Manufacture Hatil"
              />
              <Card
                className="mt-6"
                imageSrc="/images/img4.jpg"
                altTitle="Serenity Sofa"
                title="Serenity Sofa"
                description="Manufacture Hatil"
              />
              <Card
                className="mt-6"
                imageSrc="/images/img5.jpg"
                altTitle="Parsons Chair"
                title="Parsons Chair - 4"
                description="Manufacture Regal"
              />
              <Card
                className="mt-6"
                imageSrc="/images/img6.jpg"
                altTitle="Tranquil Bedframe"
                title="Tranquil Bedframe"
                description="Manufacture Laxona"
              />
            </div>
            <div>
              <Card
                className="mt-6 w-full h-[24rem] md:h-[28rem] object-cover"
                width="w-full h-full"
                imageSrc="/images/img3.jpg"
                altTitle="Serenity Sofa"
                title="Serenity Sofa"
                description="Manufacture Hatil"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
