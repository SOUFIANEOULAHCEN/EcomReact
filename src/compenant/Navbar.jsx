import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
export default function Navbar({ onSearch }) {
  const [SearchName, SetSearchName] = useState("");

  const handleSearch = () => {
    onSearch(SearchName);
  };

  const handlChange = (e) => {
    e.preventDefault();
    SetSearchName(e.target.value);
  };

  return (
    <div className="w-full">
      <header className="w-full bg-gray-200 border-b-2 border-gray-200 shadow-xl px-[10%] py-4 flex items-center justify-between">
        <div className="flex gap-6 items-center justify-center">
          <h1 className="text-xl font-semibold">Acceuil</h1>
          <input
            className="px-2 py-1 rounded-lg"
            type="text"
            placeholder="Search"
            onChange={handlChange}
          />
          <button
            className="text-gray-700 border border-gray-700 px-6 py-1 rounded-xl hover:text-gray-100 hover:bg-gray-700 duration-700"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div>
          <a href="#">
          <FaCartPlus className="text-gray-700 text-2xl hover:text-3xl duration-300 shadow-xl" />
          </a>
        </div>
      </header>
    </div>
  );
}
