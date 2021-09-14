import { combineReducers } from "redux";
import { productReducers , selectedProducts } from "./productReducers";
import { CartCount, cart_reduser } from './cartReducers'

export const rootReducers = combineReducers({
    allProducts:productReducers,
    selectedProducts:selectedProducts,
    cart_Products:cart_reduser,
    cartPrice:CartCount,
})