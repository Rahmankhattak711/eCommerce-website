import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function ShopNowExclusiveDeal() {
  return (
    <section className="py-8 md:py-16 lg:py-24">
      <div className="container md:!max-w-full">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="font-poppins">
            <p>Explore Luxury Designs -</p>
            <p>Upgrade Your Home</p>
          </div>
          <div className="text-xl mt-8 md:mt-0  md:text-3xl font-bold">
            <h2>Shop Now for Exclusive Deals and</h2>
            <h2>Enjoy Seamless Online Ordering.</h2>
          </div>
        </div>

        {/*  */}
        <div className="flex md:justify-between justify-center flex-wrap mt-4">
          <Card className="mt-6" imageSrc="/images/img4.jpg" altTitle="Serenity Sofa" title="Serenity Sofa" description="Menufacture Hatil" />

          <Card className="mt-6" imageSrc="/images/img5.jpg" altTitle="Parsons Chair" title="Parsons Chair - 4" description="Menufacture Regal"/>

          <Card className="mt-6" imageSrc="/images/img6.jpg" altTitle="Tranquil Bedframe" title="Tranquil Bedframe" description="Menufacture Laxona"/>
        </div>

        <div className=" mt-8 text-center">
        <Button variant="default" btnValue="Shop Our Collections" />

        </div>

      </div>
    </section>
  );
}
