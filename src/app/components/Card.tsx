import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  className?: string;
  altTitle: string,
  width?: string
};

export default function Card({ width='w-full', title, description, imageSrc,altTitle, className }: CardProps) {
  return (
    <div className={`${className}`}>
      <Image src={imageSrc} alt={altTitle} width={500} height={500} className={`${width} rounded-3xl   object-cover`} />
      <div className="mt-4">
        <h2 className="md:text-xl text-base font-bold ">{title}</h2>
        <p className="text-sm text-gray-600 font-poppins">{description}</p>
      </div>
    </div>
  );
}
