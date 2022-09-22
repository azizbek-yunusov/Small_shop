import { useContext } from "react";
import { ShopContext } from "../context";
import ProductsItem from "./ProductsItem";

function ProductsList() {
  const { products = [] } = useContext(ShopContext);

  if (!products.length) {
    return <h3 className="font-mono text-5xl text-zinc-900">page not found</h3>;
  }
  // console.log(products)
  return (
    <div className="grid grid-cols-2 gap-4
                    xl:grid xl:grid-cols-4 xl:gap-4 
                    lg:grid-cols-3 
                    md:grid-cols-2 
                    sm:grid-cols-2">
      {products.map(item => (
        <ProductsItem key={item.id} {...item} />
      ))}
    </div>
  );
}
export default ProductsList