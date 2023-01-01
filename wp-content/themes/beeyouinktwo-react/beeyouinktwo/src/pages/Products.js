import React, { Fragment } from 'react'
import Container from 'react-bootstrap/esm/Container'
import SingleHero from '../components/SingleHero'
import ProductGallery from '../components/ProductGallery'

const Products = ({ data }) => {
	return (
		<Fragment>
			<SingleHero
				title={'Products'}
				subTitle={null}
				background={data.featured_image}
			/>
			<Container className='py-5'>
				<ProductGallery />
			</Container>
		</Fragment>
	)
}

export default Products

