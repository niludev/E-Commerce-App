import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    useEffect (() => {
        console.log(cart)
    }, [cart])


    const addToCart = (product, imageUrl) => {
        const existingProduct = cart.find(item => item.id === product.id)

        if (existingProduct) {
            setCart(cart.map(item => 
                item.id === product.id
                    ? {...item, quantity: (item.quantity || 1) + 1}
                    : item
            ))

        } else {
            const productWithImage = {...product, imageUrl, quantity: 1}
            setCart([...cart, productWithImage])
        }
    }

    const removeFromCart = (produktId) => {
        const existingProduct = cart.find(item => item.id === produktId)

        if(existingProduct && existingProduct.quantity > 1) {
            setCart(cart.map(item => 
                item.id === produktId
                    ? {...item, quantity: item.quantity - 1}
                    : item
            ))
        } else {
            setCart(cart.filter(item => item.id !== produktId))
        }
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return (
        useContext(CartContext)
    )
}