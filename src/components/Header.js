import React from 'react';

function Header() {
  return (
    <header className="w-full h-80 md:h-96 flex flex-col justify-center bg-ufj text-white text-center p-4 md:p-8">
      <h1 className="text-xl md:text-2xl font-bold mb-4">Inscreva-se</h1>
      <div className="flex justify-center px-2">
        <input 
          outline="none"
          type="text" 
          placeholder="Qual curso você está procurando?" 
          className="px-4 py-2 rounded-3xl border border-blue-700 text-gray-700 w-full max-w-xs md:max-w-md"
        />
      </div>
    </header>
  );
}

export default Header;
