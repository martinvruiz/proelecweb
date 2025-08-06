import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-around w-full p-6 bg-[#1B2A41] text-white shadow-sm">
      <ul>
        <Link
          href="/"
          className="text-xl font-bold p-4 hover:text-gray-400 duration-200 "
        >
          Home
        </Link>
        <Link
          href="/proveedores"
          className="text-xl font-bold p-4 hover:text-gray-400 duration-200"
        >
          Proveedores
        </Link>
        <Link
          href="/contacto"
          className="text-xl font-bold p-4 hover:text-gray-400 duration-200"
        >
          Contacto
        </Link>
      </ul>
    </nav>
  );
}
