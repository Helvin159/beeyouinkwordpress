import { createContext, useState } from 'react'

const addCartItem = (cartItems, productToAdd) => {
	const selectedQuantity = parseInt(
		document.getElementById('quantityInput').value
	)

	// Check if cart has matching items
	if (cartItems !== null) {
		const existingCartItem = cartItems?.find(
			(cartItem) => cartItem.id === productToAdd.id
		)

		if (existingCartItem) {
			return cartItems.map((cartItem) =>
				cartItem.id === productToAdd.id
					? { ...cartItem, quantity: cartItem.quantity + selectedQuantity }
					: cartItem
			)
		}

		return [...cartItems, { ...productToAdd, quantity: selectedQuantity }]
	} else {
		return [{ ...productToAdd, quantity: selectedQuantity }]
	}
}
export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
})

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [cartItems, setCartItems] = useState(null)

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

	const addItemToCart = (productToAdd) => {
		setIsCartOpen(() => !isCartOpen)
		setCartItems(addCartItem(cartItems, productToAdd))
	}
	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		toggleIsCartOpen,
	}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

