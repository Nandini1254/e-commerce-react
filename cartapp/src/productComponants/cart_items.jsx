import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Qty from './Cartqtybutton'
import DeleteIcon from '@material-ui/icons/Delete';
import { remove_to_cart_product, clear_cart, load_cart ,priceCount, productCount} from '../actions/cartProductAction'
import  Price from './cart_price'

const Cart_items = () => {
    const product = useSelector((state) => state.cart_Products)
    const dispatch = useDispatch()
    console.log(product)
    const buy_now = (event) => {

        // dispatch(buy_now(data))
    }
    // console.log(product)
    const delete_item = (id) => {
        // console.log("id--", id)
        if (product.length > 1) {
            dispatch(remove_to_cart_product(id))
            const productCart=product.filter(item=>item.id!=id)
            dispatch(priceCount(productCart))
            dispatch(productCount(productCart))
        }
        else {
            dispatch(clear_cart()) 
            const productCart=[]
            dispatch(priceCount(productCart))  
            dispatch(productCount(productCart))      
        }
    }
    useEffect(() => {
        dispatch(load_cart(product))
        dispatch(priceCount(product))
    }, [])

    if (product.length !== 0) {
        console.log(product)
        return (
            <>
                < div className='purchase-div' >
                    <button className='purchase' onClick={buy_now}>Buy Now</button>
                </div>
                <div>
                    {product.map((data, key) => {
                        console.log(typeof (data.qty))
                        return (
                            Object.keys(data).length === 0 ?
                                (<div><center><strong><h3>Loading...</h3></strong></center></div>) :
                                (<div className='product-detail ' id={key}>
                                    <div className='product-item'>
                                        <div className='product-iamge'>
                                            <img src={data.image} className='images' />
                                        </div>
                                        <div className='product-content right'>
                                            <div className='head'>
                                                {data.title}
                                            </div>
                                            <div className='part category'>
                                                {data.category}
                                            </div>
                                            <div className='part price'><strong>${data.price}</strong></div>
                                            <div className='part description'>
                                                {data.description}
                                            </div>

                                            <div class='cart-buttons'>
                                                <div className='cart-qty-button-div'>
                                                    <Qty qty={data.qty} cart_id={data.id} />
                                                </div>
                                                <div className='cart-delete-button-div' onClick={(e) => delete_item(data.id)} id='delete' data_id={data.id}>
                                                    <DeleteIcon />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>)

                        )
                    }

                    )
                    }

                </div>
                <div>
                   <Price />
                </div>
            </>
        )

    }
    else {
        return (
            <div>
                <center>Cart is empty</center>
            </div>
        )
    }


}

export default Cart_items
