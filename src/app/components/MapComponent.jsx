import React from "react";

export default function MapComponent() {
  return (
    <div className="text-center">
      <h3 className="text-4xl text-white">Veni a visitarnos!</h3>
      <div className="p-4 flex flex-col md:flex-row items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.123471353142!2d-58.51174472509685!3d-34.6263199586907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc832d5ec4d33%3A0xfa5931c13d589ba2!2sPROELEC.%20MATERIALES%20EL%C3%89CTRICOS!5e0!3m2!1ses!2sar!4v1754489279757!5m2!1ses!2sar"
          className="rounded-xl shadow-lg w-3/4 h-64 md:w-1/2 md:h-48"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="text-lg text-center mt-2 md:mt-0 md:ml-6 text-white">
          <p>Estamos en Av Lope de Vega 1484</p>
          <p>Lunes a viernes de 8 a 18hs</p>
          <p>Tel: 21296077</p>
        </div>
      </div>
    </div>
  );
}
