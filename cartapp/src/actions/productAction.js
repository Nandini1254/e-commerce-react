import { ActionTypes } from "../constants/ActionTypes"

export const setProducts= (products) =>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
} 
export const selectProducts= (product) =>{
    // console.log("a",ActionTypes.SELECTED_PRODUCTS)
    return {
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:product
    }
} 
export const select_remove_Products= () =>{
    return {
        type:ActionTypes.REMOVE_PRODUCTS,
    }
} 

export const selectProductsBySearch= (searchTerm) =>{
    return {
        type:ActionTypes.SELECTED_PRODUCTS_BY_SEARCH,
        payload:searchTerm,
    }
} 
