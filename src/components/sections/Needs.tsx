import Image from "next/image";
import { ArrowRight, Globe, Box, ShoppingCart, Lightbulb } from "lucide-react";
import { getWhatsAppLink } from "@/data/contact";

const solutions = [
  {
    icon: Globe,
    title: "Página web",
    description: "Landing pages, páginas corporativas, de servicios, catálogos y más.",
    price: "Desde $99.99",
    button: "Quiero una web",
    image: "/images/web2.jpg",
    message: "¡Hola JoalisDev! Quiero una página web para mi negocio.",
    highlighted: true,
  },
  {
    icon: Box,
    title: "Sistema a medida",
    description: "Paneles administrativos, reservas, gestión, automatizaciones y soluciones personalizadas.",
    price: "Cotización según proyecto",
    button: "Necesito un sistema",
    image: "/images/sistema.jpg",
    message: "¡Hola JoalisDev! Necesito un sistema a medida para mi negocio.",
    highlighted: false,
  },
  {
    icon: ShoppingCart,
    title: "Tienda online",
    description: "Catálogo, carrito, pagos y gestión de productos y pedidos.",
    price: "Cotización según proyecto",
    button: "Quiero vender online",
    image: "/images/asesoria.jpg",
    message: "¡Hola JoalisDev! Quiero una tienda online para mi negocio.",
    highlighted: false,
  },
];

const advisoryLink = getWhatsAppLink(
  "¡Hola JoalisDev! Tengo una idea y quiero asesoría para saber qué necesito."
);

export default function Needs() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-16 text-white lg:py-24">
      {/* Brillo azul de fondo */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
            Soluciones para cada negocio
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            ¿Qué podemos construir{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              para tu negocio?
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Soluciones digitales pensadas para cumplir un objetivo:{" "}
            <span className="font-semibold text-white">
              vender, captar clientes y automatizar.
            </span>
          </p>
        </div>

        {/* Tarjetas */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {solutions.map(
            ({ icon: Icon, title, description, price, button, image, message, highlighted }) => (
              <article
                key={title}
                className={`group relative flex min-h-96 flex-col justify-end overflow-hidden rounded-2xl bg-slate-900 p-6 shadow-xl transition duration-300 hover:-translate-y-1 ${
                  highlighted
                    ? "ring-2 ring-blue-500 shadow-blue-500/30"
                    : "ring-1 ring-white/10 hover:ring-blue-500/50"
                }`}
              >
                {/* Imagen de fondo */}
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover opacity-70 transition duration-500 group-hover:scale-105"
                />

                {/* Capa oscura para que se lea el texto */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/75 to-slate-950/10" />

                {/* Contenido */}
                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-600/40">
                    <Icon className="h-6 w-6" />
                  </span>

                  <h3 className="mt-4 text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{description}</p>
                  <p className="mt-4 text-lg font-bold text-blue-400">{price}</p>

                  <a
                    href={getWhatsAppLink(message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
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
            )
          )}
        </div>

        {/* Línea de asesoría */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:flex-row">
          <Lightbulb className="h-5 w-5 text-blue-400" />
          <p className="text-slate-400">¿No sabes qué necesitas?</p>
          <a
            href={advisoryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 font-semibold text-blue-400 hover:text-blue-300"
          >
            Te asesoramos sin compromiso
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}