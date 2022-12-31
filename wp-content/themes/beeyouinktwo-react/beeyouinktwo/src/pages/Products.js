import React, { Fragment } from 'react'
import Container from 'react-bootstrap/esm/Container'
import SingleHero from '../components/SingleHero'
import ProductGallery from '../components/ProductGallery'

const Products = () => {
	return (
		<Fragment>
			<SingleHero
				title={'Products'}
				subTitle={'Unique art by Melli!'}
				background={null}
			/>
			<Container className='p-5'>
				<ProductGallery />
			</Container>
		</Fragment>
	)
}

export default Products

