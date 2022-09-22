import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext()

const initialState = {
  products: [],
  loading: true,
  order: [],
  isBasketShow: false
}

export const ContextProvider = ({children}) => {
  const [value, dispatch] = useReducer(reducer, initialState)

  value.addToBasket = (item) => {
    dispatch({type: 'ADD_TO_BASKET', payload: item})
  } 

  value.incrementQuantity = (itemID) => {
    dispatch({type: 'INCREMENT_QUANTITY', payload: {id: itemID}})
  }

  value.decrementQuantity = (itemID) => {
    dispatch({type: 'DECREMENT_QUANTITY', payload: {id: itemID}})
  }
  value.handleBasketShow = () => {
    dispatch({type: 'TOGGLE_BASKET_SHOW'})
  } 

  value.removeFromBasket = (itemID) => {
    dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemID}})
  }

  value.setProducts = (data) => {
    dispatch({type: 'SET_PRODUCTS', payload: data})
  }

  return(
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}