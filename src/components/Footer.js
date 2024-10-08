import React from 'react';
import { FcCalendar, FcBiotech, FcGlobe, FcIdea } from "react-icons/fc";

function Footer() {
  return (
    <footer className="flex flex-wrap justify-center items-center gap-6 py-4 w-full font-sans font-medium mb-12">
      <div className="flex flex-col items-center w-40 sm:w-48 text-center mb-4">
        <FcCalendar className="w-12 h-12"/>
        <p className="text-base sm:text-lg md:text-xl">Eventos e ligas acadêmicas</p>
      </div>
      <div className="flex flex-col items-center w-40 sm:w-48 text-center mb-4">
        <FcBiotech className="w-12 h-12"/>
        <p className="text-base sm:text-lg md:text-xl">Programas de Iniciação Científica</p>
      </div>
      <div className="flex flex-col items-center w-40 sm:w-48 text-center mb-4">
        <FcGlobe className="w-12 h-12"/>
        <p className="text-base sm:text-lg md:text-xl">Convênios de Intercâmbio</p>
      </div>
      <div className="flex flex-col items-center w-40 sm:w-48 text-center mb-4">
        <FcIdea className="w-12 h-12"/>
        <p className="text-base sm:text-lg md:text-xl">Inovação</p>
      </div>
    </footer>
  );
}

export default Footer;
