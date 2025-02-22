"use client";
import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";

export default function ProductDetail() {
  const [dark, setDark] = useState(false);
  return (
    <div
      className={`
    ${dark ? "bg-slate-800 text-white" : "bg-slate-200 text-black"}

    h-screen flex items-center justify-center
    `}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam neque
        nam praesentium obcaecati, aliquid illo suscipit iste expedita
        perspiciatis atque dolores, quasi voluptatum ad! Quibusdam vero eligendi
        illo quia deleniti!
      </p>
      <button onClick={() => setDark(!dark)}>
        {dark ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}
