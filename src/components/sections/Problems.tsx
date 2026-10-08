import Image from "next/image";
import { Check, Lightbulb } from "lucide-react";

const problems = [
  "Tus clientes te escriben para preguntar cosas que podrían hacer desde una web.",
  "Llevas procesos en Excel, WhatsApp o cuadernos.",
  "Tienes una idea pero no encuentras un sistema que se adapte a tu negocio.",
  "Tu página actual no genera los resultados que esperabas.",
];

export default function Problems() {
  return (
    <section className="bg-white px-6 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Columna izquierda: texto y checklist */}
        <div className="max-w-xl">
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            ¿Te identificas?
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            ¿Tu negocio todavía depende de{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              procesos manuales?
            </span>
          </h2>

          <ul className="mt-8 space-y-4">
            {problems.map((problem) => (
              <li key={problem} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-md shadow-blue-600/30">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <p className="text-slate-600">{problem}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna derecha: imagen con tarjeta flotante */}
        <div className="relative mb-10 lg:mb-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/20">
            <Image
              src="/images/problemas2.jpg"
              alt="Persona preocupada revisando procesos manuales en su laptop"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Tarjeta flotante */}
          <div className="absolute -bottom-10 left-4 right-4 flex items-start gap-4 rounded-2xl border border-blue-500/30 bg-slate-900/90 p-5 text-white shadow-xl shadow-blue-500/20 backdrop-blur-md sm:left-auto sm:max-w-sm lg:-right-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/15">
              <Lightbulb className="h-6 w-6 text-blue-400" />
            </span>
            <p className="text-sm text-slate-300">
              No necesitas adaptarte a una herramienta.{" "}
              <span className="font-semibold text-white">
                Podemos construirla alrededor de tu negocio.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}