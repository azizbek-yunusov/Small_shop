import * as React from "react";
import { useContext } from "react";
import { ShopContext } from "../context";
import Cart from "./Cart";
import BasketList from "./BasketList";

export default function Header(props) {
  const { id, name, description, price, full_background} = props

  const {order, isBasketShow} = useContext(ShopContext);
  // console.log(useContext(ShopContext))
  console.log(order);

  return (
    <nav className="border-gray-200 px-2 sm:px-4 bg-gray-800 fixed top-0 left-0 w-full">
      <div className="container my-0 px-[15px] flex flex-wrap justify-between items-center mx-auto h-16 xl:h-20 sm:h-16 md:16">
        <a href="31" className="flex items-center">
          <span className="self-center sm:text-3xl text-xl font-semibold text-lime-50 ">React Shop</span>
        </a>
        
        <Cart quantity={order.length} id={id} name={name} description={description} full_background={full_background} price={price} />
        {isBasketShow && <BasketList />}
      </div>
    </nav>
  );
}