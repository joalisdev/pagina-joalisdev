"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, ShieldCheck, Users, Zap } from "lucide-react";
import { getWhatsAppLink } from "@/data/contact";

type QuoteForm = {
  service: string;
  goal: string;
  stage: string;
  budget: string;
  details: string;
  name: string;
  email: string;
};

const initialForm: QuoteForm = {
  service: "",
  goal: "",
  stage: "",
  budget: "",
  details: "",
  name: "",
  email: "",
};

const benefits = [
  { icon: ShieldCheck, text: "Sin compromiso" },
  { icon: Users, text: "Atención personalizada" },
  { icon: Zap, text: "Respuesta rápida" },
];

const selects = [
  {
    name: "service",
    label: "¿Qué quieres desarrollar?",
    options: ["Página web", "Sistema a medida", "Tienda online", "No estoy seguro"],
  },
  {
    name: "goal",
    label: "¿Para qué necesitas la solución?",
    options: ["Vender más", "Captar clientes", "Automatizar procesos", "Mejorar mi imagen"],
  },
  {
    name: "stage",
    label: "¿En qué etapa estás?",
    options: [
      "Solo tengo la idea",
      "Ya tengo un negocio pero no tengo web",
      "Quiero mejorar mi web o sistema actual",
    ],
  },
  {
    name: "budget",
    label: "¿Cuál es tu presupuesto aproximado?",
    options: ["Menos de $100", "$100 - $300", "$300 - $800", "Más de $800", "Aún no lo sé"],
  },
] as const;

const inputStyles =
  "w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30";

export default function Quote() {
  const [form, setForm] = useState<QuoteForm>(initialForm);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const lines = [
      "¡Hola JoalisDev! 👋 Quiero cotizar un proyecto.",
      "",
      `*Nombre:* ${form.name}`,
      `*Quiero desarrollar:* ${form.service}`,
      `*Para:* ${form.goal}`,
      `*Etapa:* ${form.stage}`,
      `*Presupuesto:* ${form.budget}`,
      `*Detalles:* ${form.details}`,
    ];

    if (form.email) {
      lines.push(`*Correo:* ${form.email}`);
    }

    window.open(getWhatsAppLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setForm(initialForm);
  }

  return (
    <section id="cotizar" className="relative overflow-hidden bg-slate-950 px-6 py-16 text-white lg:py-24">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-2">
          <span className="inline-block rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
            Cotización personalizada
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
            Cuéntanos qué{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              quieres construir
            </span>
          </h2>

          <p className="mt-4 text-slate-400">
            Responde estas preguntas y conoceremos mejor tu proyecto. Así
            podremos orientarte con una propuesta adecuada.
          </p>

          <ul className="mt-8 space-y-4">
            {benefits.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/15">
                  <Icon className="h-5 w-5 text-blue-400" />
                </span>
                <span className="text-slate-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-blue-500/30 bg-slate-900/60 p-6 shadow-2xl shadow-blue-500/10 backdrop-blur-md sm:p-8 lg:col-span-3"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {selects.map(({ name, label, options }) => (
              <label key={name} className="block">
                <span className="mb-2 block text-sm font-medium text-slate-300">{label}</span>
                <div className="relative">
                  <select
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    required
                    className={`${inputStyles} appearance-none pr-10`}
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
              </label>
            ))}
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-medium text-slate-300">
              Cuéntanos brevemente qué necesitas
            </span>
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Escribe aquí..."
              className={`${inputStyles} resize-none`}
            />
          </label>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-300">Nombre</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className={inputStyles}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-300">
                Correo electrónico <span className="text-slate-500">(opcional)</span>
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
                className={inputStyles}
              />
            </label>
          </div>

          <button
            type="submit"
            className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-blue-500 to-indigo-600 px-8 py-4 font-semibold shadow-lg shadow-blue-500/40 transition hover:shadow-blue-500/60"
          >
            Quiero cotizar mi proyecto
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </button>

          <p className="mt-3 text-center text-xs text-slate-500">
            Se abrirá WhatsApp con tu mensaje listo para enviar.
          </p>
        </form>
      </div>
    </section>
  );
}