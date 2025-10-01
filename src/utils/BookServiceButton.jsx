import Link from "next/link";
import React from "react";

const BookServiceButton = ({ bgColor = "bg-primary", hoverColor = "hover:bg-primary/90" }) => {
  return (
    <div className="flex justify-center">
      <Link
        href="#"
        className={`inline-flex text-sm sm:text-lg md:text-xl items-center justify-center px-4 lg:px-5 py-3 text-white font-semibold rounded-lg lg:rounded-xl transition-colors shadow-lg ${bgColor} ${hoverColor}`}
      >
        Book Your Service
      </Link>
    </div>
  );
};

export default BookServiceButton;
