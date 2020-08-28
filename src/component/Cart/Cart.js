import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total,prd) => total + prd.price,0)
    const total2 = total.toFixed(2)
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const course = cart[i];
    //      total = total + course;
        
    // }
    const totalCourse = cart.reduce( (total,prd) => total + prd.name,[])
    return (
        <div className='main-cart'>
            <h1 className='cart-head'>CART</h1><hr/>
            <h3>Enrolled Course: <span className='length'>{cart.length}</span></h3><hr/>
            <p><strong>Price:</strong> <span className='length'>{total2}</span> </p>
            <p>{totalCourse}</p>
            <h2>Total:<span className='length'>{total2}</span></h2>
        </div>
    );
};

export default Cart;