import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector ,useDispatch } from 'react-redux';
import CartCount from './cartCount';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { selectProductsBySearch } from '../actions/productAction';

const logo = 'https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG62.png'
const Header = () => {
       
    const [Toggle, setToggle] = new useState(false);
    const [search, setSearch] = new useState('');
    const dispatch = useDispatch()
    const searchItem = () => {
        const search1 = document.getElementById('search').value
        // console.log("search", search1)
        setSearch(search1)
        dispatch(selectProductsBySearch(search))
    }


    return (
        <div>
            <div className='header-css'>
                <div className='logo'>
                    <img src={logo} className='image-logo' />
                    <div className='logo-name'>StartShop</div>
                </div>

                <div className='menu-icon' >
                    <button onClick={() => { setToggle(!Toggle) }} className='icon'>
                        <MenuIcon className='large' />
                    </button>
                </div>
                <div className=
                >
                    <li>
                        <div class="search-div" >
                            <div className='button_search'>
                                <SearchOutlinedIcon className='icon' />
                            </div>
                            <input className="search" onChange={searchItem} id='search'></input>
                        </div>
                    </li>
                    <li><NavLink className='hover-link' activeClassName='page-active' to='/home' onClick={() => { setToggle(!Toggle) }}>Home</NavLink></li>
                    <li><NavLink className='hover-link' activeClassName='page-active' to="/about" onClick={() => { setToggle(!Toggle) }}>Login</NavLink></li>
                    <li ><NavLink activeClassName='' to='/cart' onClick={() => { setToggle(!Toggle) }}><CartCount /></NavLink></li>
                </div>
            </div>
        </div>
    )
}

export default Header
