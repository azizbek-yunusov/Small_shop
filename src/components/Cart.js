import { useContext } from "react";
import { ShopContext } from "../context";

export default function Cart() {
  const { order, handleBasketShow = Function.prototype } = useContext(ShopContext);
  
  const quantity = order.length;

  return (
    <div onClick={handleBasketShow} className="cursor-pointer selection:inset-0 z-10 block text-yellow-500 hover:text-red-600 ease-out duration-300">
      <i className="fas fa-cart-arrow-down pt-2 cursor-pointer text-3xl xl:text-4xl sm:text-4xl"></i>
      {quantity ? <span className="inline-block text-xs p-1 px-2 rounded-xl -m-1 bg-red-600 align-top text-white">{quantity}</span> :<span className="inline-block text-xs p-1 px-2 rounded-xl -m-1 bg-red-600 align-top text-white">0</span>}
    </div>
  )
}