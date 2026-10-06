import Image from "next/image";
import { ArrowRight, Globe, Box, Lightbulb } from "lucide-react";
import { getWhatsAppLink } from "@/data/contact";

const needs = [
  {
    icon: Globe,
    title: "Página web",
    description: "Quiero presentar mi negocio y conseguir clientes.",
    button: "Quiero una web",
    image: "/images/web2.jpg",
    message: "¡Hola JoalisDev! Quiero una página web para mi negocio.",
    highlighted: true,
  },
  {
    icon: Box,
    title: "Sistema a medida",
    description: "Necesito digitalizar o automatizar procesos de mi negocio.",
    button: "Necesito un sistema",
    image: "/images/sistema.jpg",
    message: "¡Hola JoalisDev! Necesito un sistema a medida para mi negocio.",
    highlighted: false,
  },
  {
    icon: Lightbulb,
    title: "No estoy seguro",
    description: "Tengo una idea y quiero saber cuál es la mejor solución.",
    button: "Quiero asesoría",
    image: "/images/asesoria.jpg",
    message: "¡Hola JoalisDev! Tengo una idea y quiero asesoría para saber qué necesito.",
    highlighted: false,
  },
];

export default function Needs() {
  return (
    <section className="bg-slate-50 px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
       
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Empieza aquí
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            ¿Qué necesitas <span className="text-blue-600">desarrollar?</span>
          </h2>
          <p className="mt-3 text-slate-600">
            Elige la opción que mejor se adapte a tu negocio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {needs.map(({ icon: Icon, title, description, button, image, message, highlighted }) => (
            <article
              key={title}
              className={`group relative flex min-h-80 flex-col justify-end overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-xl transition duration-300 hover:-translate-y-1 ${
                highlighted ? "ring-2 ring-blue-500 shadow-blue-500/30" : ""
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover opacity-70 transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/75 to-slate-950/10" />

    
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-600/40">
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{description}</p>

                <a
                  href={getWhatsAppLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                    highlighted
                      ? "bg-linear-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60"
                      : "border border-white/40 hover:border-blue-400 hover:bg-blue-500/10"
                  }`}
                >
                  {button}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}