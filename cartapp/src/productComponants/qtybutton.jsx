import React, { Component, useState } from "react";
import { Button, Typography, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Grid from "@material-ui/core/Grid";


const Qtybutton = () => {
    const [qty, setQty] = new useState(1);
    const ChangeQty = (e) => {
        setQty(e.target.value);
    };
    const IncreaseQty = (e) => {
        setQty(qty + 1);
    };
    const DecreaseQty = (e) => {
        if (qty < 2) {
            setQty(1)
        }
        else {
            setQty(qty - 1);
        }

    };
console.log(qty)
    return (
        <div className='buttons'>
                <Button onClick={IncreaseQty} className="qty-button">
                    <AddIcon />
                </Button>
                 <div
                    type="text"
                    value={qty}
                    onChange={ChangeQty}
                    className="qty-contect"
                    id='qty'
                >{qty}</div>
                <Button onClick={DecreaseQty}  className="qty-button">
                    <RemoveIcon />
                </Button>  
        </div>
     
    )
}

export default Qtybutton
