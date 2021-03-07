import React,{useContext} from 'react'
import {Link} from "react-router-dom";
import { cartContextData } from '../Global/CartContext';

const Navbar = () => {
    const {qty} = useContext(cartContextData)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Oxygen <span>Farms</span></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link to="cart">
                                            <span className="shoppingCart"><i class="fas fa-cart-plus"></i></span>
                                            <span className="cartCount"> {qty}</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
