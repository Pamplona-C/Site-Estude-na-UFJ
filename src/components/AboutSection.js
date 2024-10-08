import React from 'react';

function AboutSection() {
  return (
    <section className="flex flex-col text-center my-8 gap-10 px-4">
      <h2 className="text-xl md:text-2xl font-bold text-blue-UFJ">A Universidade Federal de Jataí</h2>
      <div className="flex justify-center my-4 gap-4 flex-wrap">
        <img 
          src={require('./../assets/capa-noticias-embed.png')} 
          alt="Image 1" 
          className="w-full sm:w-80 md:w-96 h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
        />
        <img 
          src={require('./../assets/portalUFJ.jpg')} 
          alt="Image 2" 
          className="w-full sm:w-60 md:w-64 h-48 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
        />
        <img 
          src={require('./../assets/UFJ_Pórtico.jpg')} 
          alt="Image 3" 
          className="w-full sm:w-60 md:w-64 h-48 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
        />
        <img 
          src={require('./../assets/portal_2.jpeg')} 
          alt="Image 4" 
          className="w-full sm:w-60 md:w-64 h-48 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
        />
        <img 
          src={require('./../assets/ufj_antiga.jpg')} 
          alt="Image 5" 
          className="w-full sm:w-60 md:w-64 h-48 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
        />
      </div>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto my-4 font-semibold">
        Hoje, a UFJ conta com 25 cursos de graduação, 4 cursos de pós-graduação lato sensu (especializações) e 10 stricto sensu (mestrado e doutorado), sendo 9 cursos de mestrado - Agronomia (produção vegetal), Geografia, Ciências Aplicadas à Saúde, Educação, Biociência Animal, Química, Biodiversidade e Direito (em implantação-2024) e Mestrado Profissional de Matemática (Profmat) e em Educação - e um doutorado, em Geografia.
      </p>
    </section>
  );
}

export default AboutSection;
