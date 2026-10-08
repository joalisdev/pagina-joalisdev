import Image from "next/image";
import { getWhatsAppLink, TIKTOK_URL } from "@/data/contact";

const whatsappLink = getWhatsAppLink("¡Hola JoalisDev! 👋 Vengo desde su página web.");

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 px-6 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <Image
            src="/images/logo.jpeg"
            alt="JoalisDev - Sistemas y páginas web"
            width={180}
            height={90}
            className="mx-auto h-auto w-36 mix-blend-screen md:mx-0"
          />
          <p className="mt-2 text-sm">Páginas web y sistemas a medida.</p>
        </div>

        <nav className="flex gap-6 text-sm">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-400"
          >
            WhatsApp
          </a>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-400"
          >
            TikTok
          </a>
          <a href="#cotizar" className="transition hover:text-blue-400">
            Cotizar
          </a>
        </nav>
      </div>

      <p className="mx-auto mt-8 max-w-7xl border-t border-slate-800 pt-6 text-center text-xs">
        © {year} JoalisDev. Todos los derechos reservados.
      </p>
    </footer>
  );
}