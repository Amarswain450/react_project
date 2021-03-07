import React,{useContext} from 'react'
import { cartContextData } from '../Global/CartContext';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const Cart = () => {
    const {shoppingCart, totalPrice, qty, dispatch} = useContext(cartContextData);
    const handleToken = async(token) => {
        const product = {name: 'All Products', price: totalPrice}
        const response = await axios.post('http://localhost:8080/checkout',{
            product,
            token
        });
        console.log(response);
    }
    return (
        <React.Fragment>
        <section className="cart_details">
            <div className="container">
                <div className="row">
                <div className="col-md-8">
                    {shoppingCart.length > 0 ?
                     shoppingCart.map((cart) => (
                        <div className="cart" key={cart.id}>
                             <span className="cart-image"><img src={cart.image} alt="no image" /></span>
                             <span className="cart-product-name">{cart.name}</span>
                             <span className="cart-product-price">&#x20B9; {cart.price}</span>
                             <span className="inc" onClick={() => dispatch({type: 'INC', id: cart.id, cart})}><i className="fas fa-plus"></i></span>
                             <span className="product-quantity">{cart.qty}</span>
                             <span className="dec" onClick={() => dispatch({type: 'DEC', id: cart.id, cart})}><i className="fas fa-minus"></i></span>
                             <span className="product-total-price">&#x20B9; {cart.price * cart.qty}.00</span>
                             <span className="delete-product" onClick={() => dispatch({type: 'DELETE', id: cart.id, cart})}><i className="fas fa-trash"></i></span>
                         </div>
                     )) : 
                     "Sorry your cart is currently empty"}
                </div>
                <div className="col-md-4">
                    {
                        shoppingCart.length > 0 ?
                        shoppingCart.map((cart) => (
                            <div className="summary">
                                <h3>Our Summary</h3>
                                <div className="total-items">
                                    <span className="items">Total Items: </span>
                                    <span className="items-count"> {qty}</span>
                                </div>
                                <div className="total-price-section">
                                    <span className="just-title">Total Price: </span>
                                    <span className="items-price"> &#x20B9; {totalPrice}.00</span>
                                </div>
                                <div className="stripe-section">
                                    <StripeCheckout stripeKey="pk_test_51IS0L5B5q35LjrRg6LTizbawEppMLVnR2MVMOJHaJky0qQdGthrFiTIZLKqlfVTW2QZ7Gjen4CcxhV7acaX2Im0Y00dQloRe2k"
                                    token={handleToken}
                                    billingAddress
                                    shippingAddress
                                    amount={totalPrice * 100}
                                    name="All Products"
                                    >

                                    </StripeCheckout>
                                </div>
                            </div>
                        )) : ""
                    }
                </div>
                </div>
            </div>
        </section>
        </React.Fragment>

    )
}

export default Cart
