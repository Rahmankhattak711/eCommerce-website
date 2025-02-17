import React from "react";

interface ButtonProps {
  btnValue: string;
  onClick?: () => void;
  variant?: "default" |  "outline";
  className?: string;
}

export default function Button({ btnValue, onClick, variant = "default", className }: ButtonProps) {
  const variantClasses = {
    default: "bg-gray-900 hover:bg-gray-800 text-white border-gray-900",
    outline: "bg-transparent text-gray-800 border-gray-800 hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`transition-all w-auto py-2 px-4 rounded-md border-[1px] ${variantClasses[variant]} ${className}`}
    >
      {btnValue}
    </button>
  );
}
