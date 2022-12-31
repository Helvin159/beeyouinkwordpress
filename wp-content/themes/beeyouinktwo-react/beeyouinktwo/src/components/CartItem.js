import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CartItem = ({ cartItem }) => {
	let cartItemPrice = cartItem.price * cartItem.quantity

	return (
		<div>
			<Row className='py-2 px-3'>
				<Col className='col-3'>
					<img
						src={cartItem.images[0].src}
						className='img-fluid max-w-50'
						alt={cartItem.name}
					/>
				</Col>
				<Col className='py-3'>
					<p className='m-0'>
						{cartItem.quantity} X {cartItem.name}
					</p>
				</Col>
				<Col className='col-3 py-3'>
					<p>${cartItemPrice}</p>
				</Col>
			</Row>
		</div>
	)
}

export default CartItem

