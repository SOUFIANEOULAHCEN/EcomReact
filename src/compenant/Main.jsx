import { MdAddBox } from "react-icons/md";
export default function Main(props) {
  return (
    <div className="w-full h-auto grid grid-cols-3 gap-y-10 pr-[10%] py-5 ">
      {props.data.map((d) => (
        <div
          className="grid grid-rows-[auto_1fr_auto] max-h-[400px] max-w-[300px] rounded-xl shadow-lg overflow-hidden"
          key={d.id}
        >
          {" "}
          {/* Add a key prop */}
          <div className="text-center bg-gray-700 text-gray-100 text-xl py-2 rounded-t-xl">
            {/* {d.title} */}
            {d.title.length > 20 ? d.title.substring(0, 20) + "..." : d.title}
          </div>
          <div className="flex items-center justify-center w-full h-52 my-2">
            <img
              src={d.image}
              className="w-full h-full object-cover"
              alt={d.title} // Added alt text for accessibility
            />
          </div>
          <div className="flex items-center justify-center gap-3 py-2 px-3 bg-gray-100">
            <button className="border-2 border-gray-700 text-gray-700 font-semibold px-6 py-2 rounded-xl duration-500">
              {d.price} {" Dh"}
            </button>
            <button className="flex items-center gap-2 justify-center bg-gray-800 px-6 py-2 text-gray-100 rounded-xl hover:bg-gray-500 duration-500">
            <MdAddBox  /> {'Ajouter'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
