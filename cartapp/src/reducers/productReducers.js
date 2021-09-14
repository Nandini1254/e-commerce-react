import { ActionTypes } from "../constants/ActionTypes"

const intialstate={
    products:[
     
    ],
}
export const productReducers =( state=intialstate ,action) =>{
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:action.payload}
        case ActionTypes.SELECTED_PRODUCTS_BY_SEARCH:
            {
                const product=state
                const search_Items=product.filter((item)=>{
                    item.title.include(action.payload)
                })
                console.log("search_Items")
                return search_Items
            }
        default:
            return state
    }
}

export const selectedProducts = ( state={},action) =>{
    const product=action.payload
    // console.log(action.type)
    // console.log("p1",product)
    switch(action.type){
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state,...product}
       
        case ActionTypes.REMOVE_PRODUCTS:
            return {}
        default:
            return state
    }
}