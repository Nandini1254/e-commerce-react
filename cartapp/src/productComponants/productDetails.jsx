import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { selectProducts, select_remove_Products } from '../actions/productAction'
import { add_to_cart_product ,productCount } from '../actions/cartProductAction'
import { useDispatch, useSelector } from 'react-redux'
import Qty from './qtybutton'
import CloseIcon from '@material-ui/icons/Close';

const CheckAlert = () => {


    const closeModal = () => {
        document.getElementById('cart_modal').style.left = "-100%";
    }
    return (
        <div className='Alert_Cart' id='cart_modal'>
            <div className='close-button'>
                <CloseIcon className='button-close' onClick={closeModal} />
            </div>
            <div className='text'>
                This Item is already in cart
            </div>
        </div>
    )
}

const ProductDetails = () => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.selectedProducts)
    const cart_product = useSelector((state) => state.cart_Products)
    // console.log(product)

    const { id } = useParams()
    // console.log(id)

    const [IsAddedCheck, setIsAddedCheck] = useState(false)

    const AddToCart = () => {
       let ISAdded=false;
        if (cart_product.length!=0) {
           ISAdded = cart_product.find((data) => { return data.id === product.id })
            if (ISAdded) {          // console.log("not added")
                setIsAddedCheck(true)
                if ((document.getElementById('cart_modal'))) {
                    console.log(document.getElementById('cart_modal'))
                    document.getElementById('cart_modal').style.left = "50%";
                    // xyz = 'class2'
                }
            }
            else {
                const qty = document.getElementById('qty').getAttribute('value')    
                const cart_product_item = { ...product, qty: qty }
                dispatch(add_to_cart_product(cart_product_item))
                const cart=[...cart_product,cart_product_item]
                dispatch(productCount(cart))         
            }
        }
        else
        {
            const qty = document.getElementById('qty').getAttribute('value')
            console.log(qty)
            const cart_product_item = { ...product, qty: qty }
            dispatch(add_to_cart_product(cart_product_item))
            const cart=[...cart_product,cart_product_item]
            dispatch(productCount(cart))   
        }
     
        // console.log("qty",qty)

    }
    const fetching = async (id) => {
        const response = await fetch('https://fakestoreapi.com/products/' + id)
        const data = await response.json()
        dispatch(selectProducts(data))
        // console.log(data)  
    }

    useEffect(() => {
        fetching(id)
        return () => {
            dispatch(select_remove_Products())
        }
    }, [])




    return (
        <div >
            {Object.keys(product).length === 0 ?
                (<div><center><strong><h3>Loading...</h3></strong></center></div>) :
                (<div className='product-detail '>
                    <div className='product-item'>
                        <div className='product-iamge'>
                            <img src={product.image} className='images' />
                        </div>
                        <div className='product-content right'>
                            <div className='head'>
                                {product.title}
                            </div>
                            <div className='part category'>
                                {product.category}
                            </div>
                            <div className='part price'><strong>${product.price}</strong></div>
                            <div className='part description'>
                                {product.description}
                            </div>

                            <div className='part qty-button-div'>
                                <Qty />
                            </div>
                            <div className='part add_to_cart-button-div'>
                                <button className='add_to_cart' onClick={() => AddToCart(product)}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>)}
            {IsAddedCheck ?
                <div>
                    <CheckAlert />
                </div> :
                <div></div>
            }

        </div>
    )
}

export default ProductDetails
