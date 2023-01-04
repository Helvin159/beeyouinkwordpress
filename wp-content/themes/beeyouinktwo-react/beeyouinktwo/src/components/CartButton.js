import React, { useContext } from 'react'
import { CartContext } from '../lib/CartContext'

const CartButton = () => {
	const { toggleIsCartOpen } = useContext(CartContext)

	return (
		<div className='py-1 text-center'>
			<button
				className='btn btn-secondary'
				tabIndex={0}
				onClick={toggleIsCartOpen}>
				Cart
			</button>
		</div>
	)
}

export default CartButton

