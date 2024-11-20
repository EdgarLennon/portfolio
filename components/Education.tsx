"use client";

import BoxReveal from "./ui/box-reveal";

const institutions = [
  {
    id: 1,
    college: "Escuela BEST",
    duration: "Primaria Básica - 3ro",
  },
  {
    id: 2,
    college: "Dr Juan Antonio Montalvan Cornejo",
    duration: "Primaria 4to - 7mo",
  },
  {
    id: 3,
    college: "Unidad educativa 10 de agosto",
    duration: "Secundaria",
  },
  {
    id: 4,
    college: "Universidad Técnica de Babahoyo",
    duration: "Tercer nivel",
  },
];

export default function Education() {
  return (
    <section className="p-2 flex flex-col justify-between w-full md:w-6/12 gap-2">
      <BoxReveal>
        <h1 className="font-semibold text-2xl text-gray-500">Educación</h1>
      </BoxReveal>

      <div className="p-2 flex flex-row justify-between w-full">
        <div className="flex flex-col gap-[15px]">
          {institutions.map((ins) => (
            <BoxReveal key={ins.id}>
              <h4 className="text-gray-500">{ins.college}</h4>
            </BoxReveal>
          ))}
        </div>
        <div className="flex flex-col gap-[15px]">
          {institutions.map((ins) => (
            <BoxReveal key={`${ins.id}-duration`}>
              <h4 className="text-gray-500">{ins.duration}</h4>
            </BoxReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
