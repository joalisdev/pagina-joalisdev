import {ArrowRight, MessageSquareText, Search, LayoutTemplate, Code2, Rocket,} from "lucide-react";

const steps = [
  {
    icon: MessageSquareText,
    title: "Cuéntanos",
    description: "Nos explicas qué necesita tu negocio.",
  },
  {
    icon: Search,
    title: "Analizamos",
    description: "Definimos qué solución realmente necesitas.",
  },
  {
    icon: LayoutTemplate,
    title: "Diseñamos",
    description: "Creamos la experiencia y la estructura.",
  },
  {
    icon: Code2,
    title: "Desarrollamos",
    description: "Construimos tu proyecto.",
  },
  {
    icon: Rocket,
    title: "Lanzamos",
    description: "Probamos, ajustamos y ponemos tu solución en funcionamiento.",
  },
];

export default function Process() {
  return (
    <section className="bg-white px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            Nuestro proceso
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            De una idea a una{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              solución funcionando
            </span>
          </h2>
        </div>

        <ol className="mx-auto mt-14 grid max-w-md gap-8 lg:max-w-none lg:grid-cols-5 lg:gap-6">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <li key={title} className="relative flex gap-4 lg:flex-col lg:gap-0">
              {index < steps.length - 1 && (
                <>
                  <span className="absolute -bottom-8 left-6 top-14 w-px bg-blue-200 lg:hidden" />
                  <ArrowRight className="absolute -right-5 top-3.5 hidden h-5 w-5 text-blue-300 lg:block" />
                </>
              )}

              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 shadow-sm">
                <Icon className="h-6 w-6" />
              </span>

              <div className="lg:mt-5">
                <p className="text-sm font-bold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}