import React from "react";
import vemPraUfj from "../assets/vem_pra_ufj_2.png";
import sisu from "../assets/SISU.png";
import assistenciaEstudantil from "../assets/assistencia_estudantil.jpg";
import guiaDoCalouro from "../assets/guia_do_calouro.png";
import calendarioAcademico from "../assets/calendario_academico.png";

function BannerSection() {
  return (
    <section className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 my-8 transition-opacity">
      <img
        src={vemPraUfj}
        alt="Vem Pra UFJ"
        className="w-32 h-24 sm:w-36 sm:h-28 md:w-40 md:h-32 cursor-pointer rounded-2xl object-cover shadow-md transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
      />
      <img
        src={sisu}
        alt="SISU"
        className="w-32 h-24 sm:w-36 sm:h-28 md:w-40 md:h-32 cursor-pointer rounded-2xl object-contain shadow-md transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
      />
      <img
        src={assistenciaEstudantil}
        alt="Assistência Estudantil"
        className="w-32 h-24 sm:w-36 sm:h-28 md:w-40 md:h-32 cursor-pointer rounded-2xl object-cover shadow-md transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
      />
      <img
        src={guiaDoCalouro}
        alt="Guia do Calouro"
        className="w-32 h-24 sm:w-36 sm:h-28 md:w-40 md:h-32 cursor-pointer rounded-2xl object-cover shadow-md transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
      />
      <img
        src={calendarioAcademico}
        alt="Calendário Acadêmico"
        className="w-32 h-24 sm:w-36 sm:h-28 md:w-40 md:h-32 cursor-pointer rounded-2xl object-cover shadow-md transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
      />
    </section>
  );
}

export default BannerSection;
