import Image from "next/image";

export default function ProveedorCard({ title, logo, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 hover:shadow-xl hover:scale-105 transition-all"
    >
      <div className="relative w-32 h-32 mb-2">
        <Image
          src={logo}
          alt={`Logo de ${title}`}
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full bg-[#1B2A41] p-2 rounded-xl">
        <p className="text-center font-medium  text-white">{title}</p>
      </div>
    </a>
  );
}
