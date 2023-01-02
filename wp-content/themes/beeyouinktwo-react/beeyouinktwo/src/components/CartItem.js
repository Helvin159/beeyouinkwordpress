import React, { Fragment } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const CartItem = ({ cartItem }) => {
	return (
		<Fragment>
			<Row className='py-2 px-3'>
				<Col className='col-3'>
					<Link to={cartItem.slug}>
						<img
							src={cartItem.images[0].src}
							className='img-fluid max-w-50'
							alt={cartItem.name}
						/>
					</Link>
				</Col>
				<Col className='py-3 col-5'>
					<Link className='m-0 ' to={cartItem.slug}>
						{cartItem.name}
					</Link>
				</Col>
				<Col className='col-4 py-3'>
					<p>
						{cartItem.quantity} &#10005; ${cartItem.price}
					</p>
				</Col>
			</Row>
		</Fragment>
	)
}

export default CartItem

