"use client";
import Image from "next/image";
import React, { useState } from "react";

const faqData = [
  {
    question: "What materials are commonly used in modern furniture design?",
    answer:
      "Modern furniture often uses materials like wood, metal, glass, and synthetic fabrics for durability and aesthetics.",
  },
  {
    question: "How do I choose the right sofa for my living room?",
    answer:
      "Consider the size of your room, your decor style, and the sofa’s comfort and material before purchasing.",
  },
  {
    question: "What is the best way to maintain wooden furniture?",
    answer:
      "Use a soft cloth for regular dusting, avoid direct sunlight, and apply wood polish periodically.",
  },
  {
    question: "Are there eco-friendly options for furniture?",
    answer:
      "Yes, look for furniture made from recycled materials or sustainably sourced wood and non-toxic finishes.",
  },
  {
    question: "How can I maximize storage in a small space with furniture?",
    answer:
      "Opt for multifunctional furniture like beds with storage drawers, foldable tables, and vertical shelves.",
  },
];

export default function AskQuestion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick =(index)=>{
    setOpenIndex((prevIndex)=> prevIndex === index ? null : index)
  }

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-[#F6F6F6] md:h-[550px] h-auto flex items-center">
      <div className="container md:!max-w-full ">
        <h1 className="md:text-3xl text-2xl font-bold mb-8">Frequently Asked Questions</h1>
        <div className="flex md:flex-row flex-col gap-4 items-center">
          <div className="md:w-[30%]">
            <Image
              src="/images/img2.jpg"
              alt="ask question"
              width={500}
              height={500}
              className="md:h-80 w-full h-1/2 rounded-3xl md:w-72 object-cover"
            />
          </div>
          <div className="md:w-[70%]">
            <ul className="flex flex-col gap-6">
              {faqData.map((item, index) => (
                <li key={index}>
                  <strong
                    onClick={() => handleClick(index)}
                    className="cursor-pointer font-bold text-xl"
                  >
                    {item.question}
                  </strong>
                  {openIndex === index && (
                    <p className="font-poppins w-full md:w-[85%] px-4 py-2 rounded-md bg-[#CEDEEB]">{item.answer}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
