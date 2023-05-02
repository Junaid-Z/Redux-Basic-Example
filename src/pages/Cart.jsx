import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
    const myCart = useSelector((state) => { return state.cart })
    console.log(myCart)
    return (
        <>
            <div>Cart</div>
            <Link to={'/products'}>Store</Link>
        </>
    )
}

export default Cart