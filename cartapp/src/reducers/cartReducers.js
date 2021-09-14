import { ActionTypes } from "../constants/ActionTypes";

const intialstate=[]
export const cart_reduser = (state=intialstate, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_CART:
        return state
    case ActionTypes.ADD_TO_CART:
      return [...state, action.payload];
    case ActionTypes.REMOVE_FROM_CART: 
      {
          console.log("id==",typeof(action.payload))
          let id=action.payload
          console.log(id)
          console.log([state.filter(item => item.id != action.payload)])
          return  state.filter(item => item.id != action.payload);
      }
    case ActionTypes.CLEAR_CART:
        return []
    case ActionTypes.UPDATE_CART_INCREASE:
        {
          console.log("action-increase",action.payload.id)
          const except_items=state.filter(item => item.id != action.payload.id);
          let cart_item=(state.filter(item=>item.id==action.payload.id))
          cart_item[0].qty=parseInt(action.payload.qty)+1
          console.log("-",cart_item)
          if(except_items.length==0)
              return cart_item
          else
          {
            // console.log("===",cart_item,except_items)
            const cart=[...cart_item,...except_items]
            return cart
          }       
          
        }
    case ActionTypes.UPDATE_CART_DECREASE:
        {
          console.log("action-decrease",action.payload)
          const except_items=state.filter(item => item.id != action.payload.id);
          let cart_item=(state.filter(item=>item.id==action.payload.id))
          cart_item[0].qty=parseInt(action.payload.qty)-1
          console.log("-",cart_item)
          if(except_items.length==0)
              return cart_item
          else
          {
            const cart=[...cart_item,...except_items]
            return cart
          }
        }
    default:
        return state;
  }
};

// for counting elements and price
export const  CartCount=(state={price:0,count:0},action)=>
{
   switch(action.type)
   {
     case ActionTypes.PRICE:
        {
           const products=action.payload
           var price=0
          //  console.log("price---",products)
           products.forEach(element => {
              price+=(element.price*element.qty)
           });
           return {...state,price:price}
        }
      case ActionTypes.PRODUCT_COUNT:
        {
          const products=action.payload
          console.log("count--",products.length)
          const count=products.length
          return {...state,count:count}
       }
      default:
        {
          console.log("de")
          return state
        }
        // console.log("de")
        // return state
   }
}