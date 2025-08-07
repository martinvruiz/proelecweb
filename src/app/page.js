"use client";
import Image from "next/image";
import { motion } from "motion/react";
import AboutUs from "./components/AboutUs";
import MapComponent from "./components/MapComponent";
import HomeComponent from "./components/HomeComponent";

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
      <div className="w-3/4 flex flex-col items-center">
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
        className="w-3/4 my-2 text-center flex flex-col items-center rounded-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-[#0F1B2B] mt-2 mb-6 text-4xl">
          ¿Porqué elegirnos?
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <HomeComponent
              title={"Calidad y compromiso"}
              description={
                "Trabajamos con primeras marcas y materiales certificados para garantizar instalaciones seguras y duraderas. Elegirnos es apostar por la calidad y la tranquilidad de estar bien asesorado."
              }
              className="w-full"
            />
          </motion.div>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <HomeComponent
              title={"Atención personalizada"}
              description={
                "Entendemos las necesidades de cada cliente, ofreciendo soluciones a medida con trato cercano, ágil y profesional. En PROELEC, tu proyecto importa tanto como a vos."
              }
              className="w-full"
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full bg-[#0F1B2B] p-4 flex flex-col items-center shadow-lg"
      >
        <MapComponent />
      </motion.div>
    </div>
  );
}
