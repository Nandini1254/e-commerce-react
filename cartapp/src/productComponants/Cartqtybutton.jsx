import React, { Component, useState } from "react";
import { Button, Typography, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Grid from "@material-ui/core/Grid";
import { useSelector,useDispatch } from "react-redux";
import { change_cart_quantity_decrease, change_cart_quantity_increase, priceCount } from '../actions/cartProductAction'

const Cartqtybutton = (props) => { 
    let data=props
    const product = useSelector((state) => state.cart_Products)
    const dispatch=useDispatch()
    // console.log(data.qty,data)
    const [qty, setQty] = new useState(parseInt(data.qty));

   
    const IncreaseQty = (e) => {
        setQty(qty + 1);
        // console.log(qty+1)
        const id=data.cart_id
        const data1={qty,id}
        // console.log("data_id_qty",data1)
        dispatch(change_cart_quantity_increase(data1))
        dispatch(priceCount(product))      
    };
    const DecreaseQty = (e) => {
        if (qty < 2) {
            setQty(1)
        }
        else {
            setQty(qty - 1);
            const id=data.cart_id     
            const data1={qty,id}
            dispatch(change_cart_quantity_decrease(data1))
            // console.log("data_id_qty",data1)  
            dispatch(priceCount(product))   
        }

    };

    

    return (
        <div className='buttons'>
                <Button onClick={IncreaseQty} className="qty-button">
                    <AddIcon />
                </Button>
                 <div
                    type="text"
                    value={qty}
                    className="qty-contect"
                    id='qty'
                >
                 {qty}
                </div>
                <Button onClick={DecreaseQty}  className="qty-button">
                    <RemoveIcon />
                </Button>  
        </div>
     
    )
}

export default Cartqtybutton
