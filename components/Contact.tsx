"use client";

import Link from "next/link";
import BoxReveal from "./magicui/box-reveal";

export default function Contact() {
  return (
    <section className="w-full md:w-6/12 mx-auto flex flex-col justify-center gap-4 p-2">
      {/* Título con efecto BoxReveal */}
      <BoxReveal>
        <h1 className="font-semibold text-gray-500 text-2xl">Contacto</h1>
      </BoxReveal>

      {/* Sección de Contacto con BoxReveal en los enlaces */}
      <div className="flex flex-col md:flex-row justify-around w-full md:grid-cols-2 gap-2 p-2">
        {/* Columna izquierda */}
        <BoxReveal>
          <div className="flex flex-col gap-2 leading-8">
            <p>
              <span className="font-semibold text-gray-500">Email: </span>
              <Link
                href="mailto:ken.aguirre@gmail.com"
                className="text-gray-500"
              >
                ken.aguirre@gmail.com
              </Link>
            </p>
            <p>
              <span className="font-semibold text-gray-500">Teléfono: </span>
              <Link href="tel:+593992419399" className="text-gray-500">
                +593 99 241 9399
              </Link>
            </p>
            <p>
              <span className="font-semibold text-gray-500">LinkedIn: </span>
              <Link
                href="https://www.linkedin.com/in/ken-michael-aguirre-rosado-b6039032b"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500"
              >
                LinkedIn Profile
              </Link>
            </p>
          </div>
        </BoxReveal>

        {/* Columna derecha */}
        <BoxReveal>
          <div className="flex flex-col gap-2 leading-8">
            <p>
              <span className="font-semibold text-gray-500">GitHub: </span>
              <Link
                href="https://github.com/EdgarLennon"
                target="_blank"
                className="text-gray-500"
              >
                GitHub Profile
              </Link>
            </p>
            <p>
              <span className="font-semibold text-gray-500">Instagram: </span>
              <Link
                href="https://www.instagram.com/kenatiks/"
                target="_blank"
                className="text-gray-500"
              >
                Instagram Profile
              </Link>
            </p>
            <p>
              <span className="font-semibold text-gray-500">Twitter: </span>
              <Link
                href="https://x.com/EcgaRLenoN"
                target="_blank"
                className="text-gray-500"
              >
                Twitter Profile
              </Link>
            </p>
          </div>
        </BoxReveal>
      </div>

      {/* Mensaje final con BoxReveal */}
      <BoxReveal>
        <div>
          <p className="text-center text-xl text-gray-500">
            <span className="font-semibold">
              Disponibilidad de trabajo inmediata
            </span>
          </p>
        </div>
      </BoxReveal>
    </section>
  );
}
