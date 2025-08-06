export default function SocialButton() {
  const telefono = "5491161677668";
  const mensaje = "Hola, quería hacer una consulta sobre sus productos.";

  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full justify-center items-center mt-2 gap-2 bg-green-500 text-white p-4 rounded-md shadow-md hover:bg-green-600 transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M16.003 3C9.38 3 4 8.373 4 15c0 2.565.773 4.944 2.094 6.936L4 29l7.275-2.07A11.92 11.92 0 0016.003 27C22.626 27 28 21.627 28 15S22.626 3 16.003 3zm-.003 21.896a9.885 9.885 0 01-5.011-1.384l-.36-.214-4.317 1.229 1.201-4.204-.233-.389a9.894 9.894 0 01-1.558-5.346c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.482-7.548c-.3-.15-1.775-.875-2.05-.975-.275-.1-.475-.15-.675.15s-.775.975-.95 1.175c-.175.2-.35.225-.65.075a8.238 8.238 0 01-2.425-1.5 9.103 9.103 0 01-1.688-2.063c-.175-.3-.019-.462.131-.612.134-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525s-.675-1.625-.925-2.225c-.244-.586-.493-.5-.675-.5H11.4c-.2 0-.525.075-.8.375s-1.05 1.025-1.05 2.5 1.075 2.9 1.225 3.1c.15.2 2.1 3.2 5.075 4.488.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.775-.725 2.025-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
      </svg>
      <h3 className="text-xl">WhatsApp</h3>
    </a>
  );
}
