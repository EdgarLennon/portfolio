"use client";

import { useContext } from "react";
import { I18Context } from "@/providers/LanguageProvider";
import { ProjectsData } from "@/constants/ProjectsData";
import ProjectCard from "./common/ProjectCard";

const Projects = () => {
  const context = useContext(I18Context);

  if (!context) {
    return <div>Error: contexto no disponible</div>;
  }

  const currentLanguage = context.language;

  return (
    <section className="w-full md:w-6/12 mx-auto flex flex-wrap justify-center gap-6 p-2">
      <h1 className="font-semibold text-2xl text-gray-500">
        {context?.t.translate("projects.title")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {ProjectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title[currentLanguage] || project.title["en"]} // Obtén la traducción del título
            description={
              project.description[currentLanguage] || project.description["en"]
            } // Obtén la traducción de la descripción
            image={project.image || ""}
            languages={project.languages}
            webLink={project.webLink}
            textButton={project.button[currentLanguage]}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
