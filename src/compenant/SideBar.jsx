export default function SideBar({ SelectCategory, Category }) {
  return (
    <div className="w-[40%] pl-[10%] py-5 pr-3 ">
      <div className=" h-auto flex flex-col gap-3  ">
        <h1 className="text-center bg-gray-700 w-full px-3 py-2 text-gray-100 rounded-xl text-2xl ">
          Categories module
        </h1>
        <ul className="text-center">
          {Category.map((d, i) => (
            <li
              key={i}
              onClick={() => SelectCategory(d)}
              className="text-gray-700 px-3 py-2 my-2 rounded-xl hover:bg-gray-700 hover:text-gray-100 duration-300"
            >
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
