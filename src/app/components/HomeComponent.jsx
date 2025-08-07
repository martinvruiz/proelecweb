import React from "react";

export default function HomeComponent({ title, description, className = "" }) {
  return (
    <section
      className={`bg-[#0F1B2B] flex flex-col justify-center text-white py-8 px-6 rounded-lg mx-auto md:h-[250px] mb-6 text-center ${className}`}
    >
      <h2 className="text-3xl font-semibold mb-3">{title}</h2>
      <p className="text-base leading-relaxed">{description}</p>
    </section>
  );
}
