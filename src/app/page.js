"use client";
import Image from "next/image";
import { motion } from "motion/react";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-white w-full">
      <div className="w-full h-[150px] md:h-[250px] bg-[#0F1B2B] flex flex-col md:flex-row items-center justify-center shadow-xl">
        <div className="w-1/2 h-full flex items-center justify-center">
          <Image
            alt="logo proelec"
            src="/proeleclogo.png"
            width={300}
            height={300}
            sizes="100vw"
          />
        </div>
        <div className="w-1/2 p-8 text-white text-center text-5xl hidden md:block">
          <h1>Tu casa de electricidad de confianza</h1>
        </div>
      </div>
      <div className="w-full flex flex-col items-center p-4">
        <AboutUs />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-3/4 bg-[#0F1B2B] text-center flex flex-col items-center p-6 rounded-xl"
      >
        <h3 className="text-3xl text-white font-semibold">
          Hace mas de 20 años presentes
        </h3>
        <p className="text-xl text-white text-center mt-2 md:px-20 px-4">
          A lo largo de nuestra trayectoria, nos consolidamos como una
          referencia en materiales eléctricos, brindando calidad, confianza y
          experiencia.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full bg-[#0F1B2B] mt-6 p-4 flex flex-col items-center shadow-lg"
      >
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
      </motion.div>
    </div>
  );
}
