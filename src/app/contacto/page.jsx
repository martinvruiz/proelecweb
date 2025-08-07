"use client";
import React from "react";
import { motion } from "motion/react";
import ContactForm from "../components/ContactForm";
import SocialButton from "../components/SocialButton";

export default function page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center w-full my-4"
    >
      <h2 className="text-4xl text-[#1B2A41] p-4">Contactate con nosotros!</h2>
      <div className="w-full md:max-w-xl max-w-xs flex flex-col items-center ">
        <SocialButton />
        <ContactForm />
      </div>
    </motion.div>
  );
}
