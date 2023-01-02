import React, { Fragment, useContext } from 'react'

import { ProductContext } from '../lib/ProductContext'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductCard from './ProductCard'

const ProductGallery = () => {
	const { products } = useContext(ProductContext)
	return (
		<Fragment>
			<Row className='max-w-1024 mx-auto products-container'>
				{products.map((i, k) => (
					<Col sm={6} md={4} className='col-12 products-container__col' key={k}>
						<ProductCard data={i} id={k} />
					</Col>
				))}
			</Row>
		</Fragment>
	)
}

export default ProductGallery

