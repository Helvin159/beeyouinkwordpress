import React, { Fragment, useContext } from 'react'
import { ProductContext } from '../lib/productContext'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'
import SingleHero from '../components/SingleHero'

const Products = () => {
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
			<SingleHero
				title={'Products'}
				subTitle={'Unique art by Melli!'}
				background={null}
			/>
			<Container className='p-5'>
				<Row className='max-w-1024 mx-auto products-container'>
					{products.map((i, k) => (
						<Col
							sm={6}
							md={4}
							className='col-12 products-container__col'
							key={k}>
							<Link to={i.slug}>
								<div className={`products-container__col__card card-${k}`}>
									<div className='products-container__col__card__title'>
										<Link to={i.slug}>
											<h4>{i.name}</h4>
											<p>${i.price}</p>
										</Link>
									</div>
									<div
										className='products-container__col__card__content'
										dangerouslySetInnerHTML={{ __html: i.short_description }}
									/>
								</div>
							</Link>
						</Col>
					))}
				</Row>
			</Container>
		</Fragment>
	)
}

export default Products

