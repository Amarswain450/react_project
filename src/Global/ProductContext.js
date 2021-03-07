import React, { createContext, useState } from 'react'
import fruitOne from '../assets/fruit1.jpg'
import fruitTwo from '../assets/fruit2.jpg'
import fruitThree from '../assets/fruit3.jpg'
import fruitFour from '../assets/fruit4.jpg'
import fruitFive from '../assets/fruit5.jpg'
import fruitSix from '../assets/fruit6.jpg'
import fruitSeven from '../assets/fruit7.jpg'
import fruitEight from '../assets/fruit8.jpg'
import fruitNine from '../assets/fruit9.jpg'


export const ProductContextData = createContext();

const ProductContext = (props) => {
    const [products, setProducts] = useState([
        {id: 1, name: 'Black grape', price: 300, image: fruitOne, status: 'hot'},
        {id: 2, name: 'litchi & grape', price: 400, image: fruitTwo, status: 'new'},
        {id: 3, name: 'mix fruits', price: 30, image: fruitThree, status: 'hot'},
        {id: 4, name: 'mix fruits', price: 200, image: fruitFour, status: 'hot'},
        {id: 5, name: 'litchi', price: 40, image: fruitFive, status: 'new'},
        {id: 6, name: 'fruitSix', price: 100, image: fruitSix, status: 'new'},
        {id: 7, name: 'apple', price: 80, image: fruitSeven, status: 'hot'},
        {id: 8, name: 'apple', price: 120, image: fruitEight, status: 'new'},
        {id: 9, name: 'apple', price: 140, image: fruitNine, status: 'new'},
    ]);
    return (
        <ProductContextData.Provider value={{products: [...products]}}>
        {props.children}
        </ProductContextData.Provider>
    )
}

export default ProductContext
