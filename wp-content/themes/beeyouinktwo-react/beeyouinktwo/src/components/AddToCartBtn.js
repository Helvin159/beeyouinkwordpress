import React, { useContext } from 'react'
import { CartContext } from '../lib/CartContext'

const AddToCartBtn = ({ id, product }) => {
	const { addItemToCart } = useContext(CartContext)
	const onClickHandler = () => addItemToCart(product)

	return (
		<button className='btn btn-primary' onClick={onClickHandler}>
			Add To Cart
		</button>
	)
}

export default AddToCartBtn

