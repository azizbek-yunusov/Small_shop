import { useEffect, useContext } from "react";
import { API_URL, API_KEY } from "../config"
import { ShopContext } from "../context";
import Loader from "./Loader";
import ProductsList from "./ProductsList";

function Shop() {
  const {setProducts, loading} = useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      }
    })
    .then(response => response.json())
    .then(data => {setProducts(data.featured)});
  }, []);

  return(
    <div className="container max-w-screen-xl mx-auto content mt-24 px-5 flex justify-center items-center">
      {loading ? <Loader /> : <ProductsList />}
    </div>
  );
}

export default Shop