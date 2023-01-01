import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../lib/CartContext'
import CartItem from './CartItem'

const CartDropdown = () => {
	const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext)
	const mainElement = document.body.querySelector('main')
	const toggleDropdown = () => {
		setIsCartOpen(() => !isCartOpen)
		mainElement.removeEventListener('click', toggleDropdown)
	}

	const eventListener = () => {
		mainElement.addEventListener('click', toggleDropdown)
	}
	if (isCartOpen) {
		eventListener()
	}

	return (
		<div className={`navigation__cart-drop-down `}>
			<div className='navigation__cart-drop-down__close-btn'>
				<button onClick={toggleDropdown}>X</button>
			</div>
			<div className='navigation__cart-drop-down__cart-items '>
				{
					// console.log(cartItems)
					cartItems ? (
						cartItems.map((i, k) => <CartItem cartItem={i} key={k} />)
					) : (
						<EmptyCart />
					)
				}
			</div>
			<div className='text-center p-2 navigation__cart-drop-down__checkout-btn-container pb-5 pt-4 '>
				<Link className='btn btn-primary' to='/checkout'>
					Go to checkout
				</Link>
			</div>
		</div>
	)
}

const EmptyCart = () => {
	return (
		<div className='navigation__cart-drop-down__empty-cart text-center px-3 py-5'>
			<p className='font-24'>The cart is empty</p>
		</div>
	)
}

export default CartDropdown

