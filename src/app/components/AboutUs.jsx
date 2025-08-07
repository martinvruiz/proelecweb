import React from "react";
import HomeComponent from "./HomeComponent";
import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <div className="w-full mt-6 flex flex-col md:flex-row items-center gap-2">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="md:w-1/3 w-full"
      >
        <HomeComponent
          title={"Conocenos"}
          description={
            "Nos especializamos en brindar soluciones eléctricas confiables y de calidad tanto para hogares como para industrias."
          }
          className="w-full"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="md:w-1/3 w-full"
      >
        <HomeComponent
          title={"Soluciones"}
          description={
            "Ofrecemos una amplia variedad de productos eléctricos, desde cables, luminarias y disyuntores, hasta tecnología LED y soluciones de automatización."
          }
          className="w-full"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="md:w-1/3 w-full"
      >
        <HomeComponent
          title={"Clientes"}
          description={
            "Nos destacamos por la atención, el asesoramiento técnico y el compromiso con cada uno."
          }
          className="w-full"
        />
      </motion.div>
    </div>
  );
}
