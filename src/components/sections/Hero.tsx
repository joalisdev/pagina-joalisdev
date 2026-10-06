import Image from "next/image";
import { ArrowRight, Palette, Code2, ShieldCheck } from "lucide-react";
import { getWhatsAppLink } from "@/data/contact";

const features = [
  { icon: Palette, text: "Diseño profesional" },
  { icon: Code2, text: "Desarrollo a medida" },
  { icon: ShieldCheck, text: "Soporte continuo" },
];

const whatsappLink = getWhatsAppLink(
  "¡Hola JoalisDev! Me interesa cotizar un proyecto para mi negocio."
);

export default function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-slate-950 text-white lg:min-h-screen">
      {/* Imagen: pantalla completa en celular, 60% derecho en desktop */}
      <div className="absolute inset-0 lg:left-auto lg:w-[60%]">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-center"
        />

        {/* Celular: capa oscura encima de toda la imagen */}
        <div className="absolute inset-0 bg-slate-950/75 lg:hidden" />

        {/* Desktop: difumina el borde izquierdo de la imagen */}
        <div className="absolute inset-y-0 left-0 hidden w-1/2 bg-linear-to-r from-slate-950 to-transparent lg:block" />
      </div>

      {/* Degradado abajo para unir con la siguiente sección */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-slate-950 to-transparent" />

      {/* Contenido: arriba en celular, centrado en desktop */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-14 pt-10 lg:py-16">
        <div className="max-w-xl">
          <span className="inline-block rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
            Soluciones digitales para tu negocio
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] sm:text-5xl xl:text-6xl">
            Tu negocio también merece una web{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              que venda.
            </span>
          </h1>

          <p className="mt-5 text-base text-slate-300 lg:text-lg">
            Diseñamos páginas web y desarrollamos sistemas a medida para
            empresas que quieren más clientes, más control y más crecimiento.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500 to-indigo-600 px-8 py-4 font-semibold shadow-lg shadow-blue-500/40 transition hover:scale-105 hover:shadow-blue-500/60"
          >
            Quiero cotizar mi proyecto
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {features.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-sm text-slate-300">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/15 shadow-md shadow-blue-500/20">
                  <Icon className="h-4 w-4 text-blue-400" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}