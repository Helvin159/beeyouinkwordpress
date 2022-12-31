import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../lib/CartContext'
import CartItem from './CartItem'

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext)

	return (
		<div className={`navigation__cart-drop-down `}>
			<div>
				{
					// console.log(cartItems)
					cartItems
						? cartItems.map((i, k) => <CartItem cartItem={i} key={k} />)
						: 'Cart is empty'
				}
			</div>
			<div className='text-center p-2'>
				<Link className='btn btn-primary' to='/checkout'>
					Go to Checkout
				</Link>
			</div>
		</div>
	)
}

export default CartDropdown

