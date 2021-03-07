import React, { Fragment, useContext } from 'react'
import { cartContextData } from '../Global/CartContext'
import { ProductContextData } from '../Global/ProductContext'
import Banner from './Banner'

const Products = () => {
    const {products} = useContext(ProductContextData)
    const {dispatch} = useContext(cartContextData);
    return (
        <Fragment>
        <Banner />
        <section className="product-data">
        <div className="container">
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4">
                        <div className="product" key={product.id}>
                            <div className="cover">
                                <div className="product-image">
                                    <img src={product.image} alt="not founf" />
                                </div>
                                <div className="product-details">
                                    <div className="product-name">
                                        <h4>{product.name}</h4>
                                    </div>
                                    <div className="product-price">
                                        <h5>&#x20B9; {product.price}.00</h5>
                                    </div>
                                </div>
                                <div className="add-to-cart" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, product}) }>add to cart</div>
                                {product.status === 'hot' ? <div className='hot'>Hot</div> : ''}
                                {product.status === 'new' ? <div className='new'>New</div> : ''}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
        </Fragment>
    )
}

export default Products
