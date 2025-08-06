"use client";
import React from "react";
import { motion } from "motion/react";
import proveedores from "@/data/proveedores.json";
import ProveedorCard from "../components/ProveedorCard";

export default function page() {
  return (
    <div className="flex flex-col items-center my-4">
      <h2 className="text-4xl text-[#1B2A41]">Nuestros proveedores</h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
      >
        {proveedores.map((prov, index) => {
          return (
            <ProveedorCard
              title={prov.title}
              logo={prov.logo}
              link={prov.link}
              key={index}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
