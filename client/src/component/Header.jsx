import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header({ searchTerm, handleSearch, searchResults }) {
  return (
    <header className="bg-red-500 p-4 flex justify-between items-center">
      <h1>
        <a href="/" className="text-white font-bold text-2xl">
          PokeFight
        </a>
      </h1>

      <nav>
        <ul className="flex space-x-4 text-lg">
          {/* Your other navigation items here */}
        </ul>
      </nav>

      <form className="hidden md:block flex-col items-start">
        <input
          className="bg-white text-gray-500 rounded ml-2 px-4 hover:bg-gray-100"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </form>
    </header>
  );
}

export default Header;
