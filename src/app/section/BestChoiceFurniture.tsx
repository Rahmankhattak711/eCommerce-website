import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";

interface props {
  image : string
}

export default function BestChoiceFurniture() {
  const productImages:props[] = [
    {
      image : '/images/img4.jpg',
    },
    {
      image : '/images/img5.jpg',
    },
    {
      image : '/images/img6.jpg',
    }
  ]
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
          <div className="flex w-full md:flex-row flex-col gap-4 mt-10">
          {
              productImages.map((item, index) => (
                <Card
                  key={index}
                  imageSrc={item.image}
                />
              ))
            }
          </div>
      </div>
    </section>
  );
}
