import React, {createContext, useReducer} from 'react';
import {CartReducer} from './CartReducer'

export const cartContextData = createContext();

const CartContext = (props) => {
    const [cart, dispatch] = useReducer(CartReducer, {shoppingCart: [], totalPrice: 0, qty: 0});
    return (
        <cartContextData.Provider value={{...cart, dispatch}}>
        {props.children}
        </cartContextData.Provider>
    )
}

export default CartContext
