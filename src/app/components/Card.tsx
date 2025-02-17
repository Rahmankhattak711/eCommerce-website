import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  className?: string;
  altTitle: string
};

export default function Card({  title, description, imageSrc,altTitle, className }: CardProps) {
  return (
    <div className={`${className}`}>
      <Image src={imageSrc} alt={altTitle} className="w-80 h-52 rounded-md bg-gray-600  object-cover" />
      <div className="mt-4">
        <h2 className="text-xl font-bold ">{title}</h2>
        <p className="text-sm text-gray-600 ">{description}</p>
      </div>
    </div>
  );
}
