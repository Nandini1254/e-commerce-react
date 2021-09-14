import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../actions/productAction'
import { Link } from 'react-router-dom'


const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products)
    const dispatch = useDispatch()
    // console.log("products", products)

    const fetchProducts = async () => {
        const responses = await fetch('https://fakestoreapi.com/products')
        const data = await responses.json()
        // console.log(data)
        if(responses.ok)
        {
            dispatch(setProducts(data))
        }
        else{
            throw Error("error")
        }
        
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    const list = products.map((product) => {
        const id=product.id
        console.log("id",id,product)
        return (
            <>
              {Object.keys(product).length === 0 ?
                (<div><center><strong><h3>Loading...</h3></strong></center></div>) :
                (<div className='' key={product.id}>
                    <Link to={'/products/'+id} >
                        <div className="card">
                            <div className='image'>
                                <img src={product.image} class="ui image product-image" height='200' alt='...' />
                            </div>
                            <div class="content">
                                <div className="title text-center">{product.title}</div>
                                <div className="meta text-center"><b><h4>${product.price}</h4></b></div>
                            </div>

                        </div>
                    </Link>
                </div>)
    }


            </>
        )
    })
    return <>{list}</>
}

const ProductListing = () => {


    return (
        <div className='ui products'>
            <ProductComponent />
        </div>
    )
}

export default ProductListing
