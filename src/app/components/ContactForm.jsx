"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    alert("Gracias por contactarnos, te responderemos pronto!");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full text-center mx-auto bg-white p-6 rounded-xl shadow-md space-y-4 my-2"
    >
      <div>
        <label className="block w-full text-sm font-medium text-gray-700 mb-1">
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1B2A41]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1B2A41]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje
        </label>
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          required
          rows="4"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1B2A41]"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-[#1B2A41] text-white md:w-md w-xd px-4 py-2 rounded-md hover:bg-indigo-900 transition-colors"
      >
        Enviar
      </button>
    </form>
  );
}
