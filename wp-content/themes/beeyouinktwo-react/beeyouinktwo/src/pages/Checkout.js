import React, { Fragment, useContext } from 'react'
import SingleHero from '../components/SingleHero'
import { CartContext } from '../lib/CartContext'

const Checkout = () => {
	const { cartItems } = useContext(CartContext)
	return (
		<Fragment>
			<SingleHero title='Checkout' subTitle='Thank you!' background={null} />
			{cartItems ? cartItems.map((i, k) => i.name) : 'Nothing in cart.'}
		</Fragment>
	)
}

export default Checkout

