import React from 'react'
import { useSelector } from 'react-redux'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
const CartCount = () => {
    const count = useSelector((state) => state.cartPrice.count)   
    console.log("count",count)
    return (
        <div className='cart_logo'   >
          <ShoppingCartOutlinedIcon style={{ fontSize: 30 }} className='cart_logo_button' />
          <div className='count' >
              {count}
          </div>
        </div>
    )
}

export default CartCount
