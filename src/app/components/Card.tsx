import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  className?: string;
  altTitle: string,
  width?: string,
  price?: string
};

export default function Card({ width='w-full', price, title, description, imageSrc,altTitle, className }: CardProps) {
  return (
    <div className={`${className}`}>
      <Image src={imageSrc} alt={altTitle} width={500} height={500} className={`${width} rounded-3xl   object-cover`} />
      <div className="mt-4">
        <div className="flex justify-between items-center">
        <h2 className="md:text-xl text-base font-bold ">{title}</h2>
        <p className="font-poppins">{price}</p>
        </div>
        <p className="text-sm text-gray-600 font-poppins">{description}</p>
      </div>
    </div>
  );
}
