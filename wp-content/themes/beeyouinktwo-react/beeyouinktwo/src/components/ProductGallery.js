import React, { Fragment, useContext } from 'react'

import { ProductContext } from '../lib/productContext'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductCard from './ProductCard'

const ProductGallery = () => {
	const { products } = useContext(ProductContext)
	return (
		<Fragment>
			<style>
				{products.map(
					(i, k) => `
                    .card-${k}{
                        background-image: ${`url(${i.images[0].src})`}
                    }
                    
                    .card-${k}:hover{
                        background-image: ${`linear-gradient(90deg,rgba(0, 0, 0, 0.75),
                        rgba(0, 0, 0, 0.75)),url(${i.images[0].src})`}
                    }

                    `
				)}
			</style>
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

