import SideBar from "./compenant/SideBar";
import Navbar from "./compenant/Navbar";
import Main from "./compenant/Main";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [Category, setCategory] = useState([]);
  const [SelectCategory, SetSelectCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term

  const FetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const FetchCategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((res) => setCategory(res))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    FetchData();
    FetchCategory();
  }, []);

  // const FilteredData =
  //   SelectCategory === "all"
  //     ? data
  //     : data.filter((item) => item.category === SelectCategory);

  const FilteredData = data
    .filter(
      (item) => SelectCategory === "all" || item.category === SelectCategory
    ) // Filter by category
    .filter(
      (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    ); // Filter by search term

  return (
    <div className="flex flex-col gap-3 bg-gray-100">
      <div className="fixed w-full">
        <Navbar onSearch={setSearchTerm} />
      </div>
      <div className="flex gap-4 w-full h-auto pb-28 mt-[5%] ">
        <SideBar Category={Category} SelectCategory={SetSelectCategory} />
        <Main data={FilteredData} />
      </div>
    </div>
  );
}

export default App;
