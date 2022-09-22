import { useContext } from "react";
import { ShopContext } from "../context";

export default function BasketItem(props) {
  const { id, name, price, full_background, quantity } = props;

  const { incrementQuantity, decrementQuantity, removeFromBasket } = useContext(ShopContext)

  return (
    <li className="flex p-2 ease-in-out duration-300">
      <div className="h-28 w-28 overflow-hidden rounded-md border border-gray-200">
        <img src={full_background} alt={name} className="h-full w-full object-cover object-center" />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <p>{name}</p>
            </h3>
            <p className="ml-4">{price * quantity}$</p>
          </div>
        </div>
        <div className="flex items-center md:justify-center mt-3">
          <button onClick={() => incrementQuantity(id)} className="w-8 h-8 bg-slate-200 rounded-[50%]"><i className="fa-solid fa-plus"></i></button>
          <p className="mx-3">{quantity}</p>
          <button onClick={() => decrementQuantity(id)} className="w-8 h-8 bg-slate-200 rounded-[50%]"><i className="fas fa-minus"></i></button>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">quantity:{quantity}</p>

          <div className="flex">
            <button onClick={() => removeFromBasket(id)} className="font-medium text-gray-700 border-1 border-slate-300 border-[1px] rounded-lg px-3 py-2">
              <i className="fa-solid fa-trash-can mr-1"></i> delete
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}