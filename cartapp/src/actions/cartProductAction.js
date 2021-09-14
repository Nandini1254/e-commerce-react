import { ActionTypes } from "../constants/ActionTypes";

export const load_cart = (product) =>{
    return{
        type:ActionTypes.LOAD_CART,
        payload:product
    }
}
export const add_to_cart_product = (product) =>{
    return {
        type:ActionTypes.ADD_TO_CART,
        payload:product
    }
}

export const remove_to_cart_product = (product_id) =>{
    return {
        type:ActionTypes.REMOVE_FROM_CART,
        payload:product_id
    }
}

export const clear_cart = ()=>{
    return {
        type:ActionTypes.CLEAR_CART
    }
}


export const change_cart_quantity_increase= (product)=>{
    return {
        type:ActionTypes.UPDATE_CART_INCREASE,
        payload:product
    }
}

export const change_cart_quantity_decrease = (product)=>{
    return {
        type:ActionTypes.UPDATE_CART_DECREASE,
        payload:product
    }
}

export const priceCount = (product)=>{
    // console.log("Action")
    return { 
        type:ActionTypes.PRICE,
        payload:product
    }
}

export const productCount = (product)=>{
    console.log("Action")
    return { 
        type:ActionTypes.PRODUCT_COUNT,
        payload:product
    }
}