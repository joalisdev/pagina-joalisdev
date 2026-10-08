import Image from "next/image";
import { ArrowRight, ShieldCheck, FileText, Headset } from "lucide-react";
import { getWhatsAppLink } from "@/data/contact";

const perks = [
  { icon: ShieldCheck, text: "Sin compromiso" },
  { icon: FileText, text: "Propuesta a tu medida" },
  { icon: Headset, text: "Atención directa" },
];

const whatsappLink = getWhatsAppLink(
  "¡Hola JoalisDev! Quiero que mi negocio esté en internet. ¿Me ayudan?"
);

export default function FinalCta() {
  return (
    <section className="bg-slate-50 px-6 py-16 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 text-white shadow-2xl shadow-blue-900/20">
        <div className="absolute inset-0 md:left-auto md:w-1/2">
          <Image
            src="/images/final.webp"
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/75 md:hidden" />

          <div className="absolute inset-y-0 left-0 hidden w-2/3 bg-linear-to-r from-slate-950 to-transparent md:block" />
        </div>

        <div className="relative px-6 py-12 sm:px-12 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Tu próximo cliente podría estar buscando tu negocio{" "}
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                ahora mismo.
              </span>
            </h2>

            <p className="mt-4 text-lg text-slate-300">Hagamos que pueda encontrarte.</p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500 to-indigo-600 px-8 py-4 font-semibold shadow-lg shadow-blue-500/40 transition hover:scale-105 hover:shadow-blue-500/60"
            >
              Quiero cotizar mi proyecto
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {perks.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-sm text-slate-300">
                  <Icon className="h-4 w-4 text-blue-400" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}