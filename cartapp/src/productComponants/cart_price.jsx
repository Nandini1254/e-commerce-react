import React ,{ useEffect }from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
const Cart_price = () => {
 
    const price = useSelector((state) => state.cartPrice.price)   

   
    return (
        <div className='price_cart'>
            Total Price: {price}
        </div>
    )
}

export default Cart_price
