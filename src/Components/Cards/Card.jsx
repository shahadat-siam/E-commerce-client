import { FaShoppingCart, FaStar, FaEye } from "react-icons/fa";
import image from "../../assets/card.png";
import { Tooltip } from "react-tooltip";

const Card = () => {
  return (
    <div className="max-w-6xl my-8 mx-auto">
      <div className="grid grid-cols-2 px-3 md:px-5 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="card p-0 border-[1px] border-gray-200 card-compact shadow-xl relative overflow-hidden group">
          <figure className="relative">
            <img
              className="cursor-pointer transform transition-transform duration-500 ease-in-out "
              src={image}
              alt="img"
            />
            <div className="absolute flex flex-col justify-center items-center gap-3 top-3 right-3 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <div className="bg-white p-1 rounded-full shadow-lg transform transition-transform duration-500 ease-in-out group-hover:translate-y-2 group-hover:scale-110">
                <FaShoppingCart className="hover:text-[#E90074] text-[16px]" /> 
              </div>
              <div className="bg-white p-1 rounded-full shadow-lg transform transition-transform duration-500 ease-in-out group-hover:translate-y-2 group-hover:scale-110">
                <FaEye className="hover:text-[#E90074] text-[16px]" /> 
              </div>
            </div>
          </figure>
          <div className="card-body bg-gray-100">
            <h2 className="card-title font-bold font-sand">Jacket zinch</h2>
            <p className="flex items-center text-[#E3C01C]">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </p>
            <p className="text-start font-semibold">$120.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
