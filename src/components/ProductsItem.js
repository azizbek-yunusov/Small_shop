import { useContext } from "react";
import { ShopContext } from "../context";

function ProductsItem(props) {
  const { id, name, description, price, full_background} = props

  const { addToBasket } = useContext(ShopContext)
  return (
    <div className="card" id={id}>
      <div className="bg-white rounded-xl shadow-xl ease-out duration-300">
        <img className="p-0 rounded-t-lg" src={full_background} alt={name} />
        <div className="sm:px-5 px-1 sm:pb-5 py-2">
          <h5 className="sm:text-xl text-lg font-semibold tracking-tight text-gray-900 sm:mt-3">{name}</h5>
          {/* <h5 className="text-[16px] font-semibold tracking-tight text-gray-700  mt-3">{description}</h5> */}
          <div className="flex sm:justify-between sm:flex-row flex-col items-center sm:mt-6 mt-1">
            <span className="sm:text-2xl text-md font-bold text-gray-900 ">{price}$</span>
            <button onClick={() => addToBasket({id, name, price, full_background})} className="text-slate-100 bg-amber-500 hover:bg-red-600 font-medium rounded-lg sm:text-md sm:px-5 sm:py-2.5 text-sm px-3 py-2 text-center cursor-pointer ease-out duration-300 sm:mt-0 mt-1"><i className="fas fa-cart-plus mr-2 sm:text-lg text-md"></i> Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductsItem