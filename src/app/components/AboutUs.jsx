import React from "react";
import HomeComponent from "./HomeComponent";
import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <div className="w-3/4 mt-6 flex flex-col md:flex-row items-center gap-2">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomeComponent
          title={"Nosotros"}
          description={
            "Nos especializamos en brindar soluciones eléctricas confiables y de calidad tanto para hogares como para industrias."
          }
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomeComponent
          title={"Calidad"}
          description={
            "Ofrecemos una amplia variedad de productos eléctricos, desde cables, luminarias y disyuntores, hasta tecnología LED y soluciones de automatización."
          }
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomeComponent
          title={"Atención"}
          description={
            "Nos destacamos por la atención personalizada, el asesoramiento técnico y el compromiso con cada cliente."
          }
        />
      </motion.div>
    </div>
  );
}
