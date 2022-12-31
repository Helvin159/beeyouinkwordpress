import React, { Fragment } from 'react'

import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Slider from 'react-slick'
import AddToCartBtn from '../components/AddToCartBtn'

const SingleProduct = ({ product }) => {
	console.log(product)
	return (
		<Fragment>
			<Container fluid>
				<div></div>
				<Row className='p-5 max-w-860 mx-auto'>
					<Col sm={6} className='col-12'>
						{product.images.length > 0 ? (
							<SimpleSlider props={product.images} />
						) : (
							<img src={product.images[0].src} alt={product.name} />
						)}
					</Col>
					<Col sm={6} className='col-12'>
						<h2>{product.name}</h2>
						<div dangerouslySetInnerHTML={{ __html: product.description }} />

						<div className='py-2'>
							<ul className='p-0 m-0'>
								<li className='px-0 py-1 m-0'>Price: ${product.price}</li>
								<li className='px-0 py-1 m-0'>
									Stock:
									{product.stock_status === 'instock'
										? ' Available'
										: ' Sold out'}
								</li>
								<li className='px-0 py-1 m-0'>
									<input type='number' id='quantityInput' defaultValue={1} />
								</li>
							</ul>
						</div>
						<AddToCartBtn id={product.id} product={product} />
					</Col>
				</Row>
			</Container>
		</Fragment>
	)
}

const SimpleSlider = ({ props }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
	}

	return (
		<Fragment>
			<div className='slick-slider-product mx-auto  '>
				<Slider {...settings}>
					{props.map((i, k) => (
						<div className='slick-slider-product__img' key={k}>
							<img
								tabIndex={0}
								className=' mx-auto'
								src={i.src}
								alt={i.title}
							/>
						</div>
					))}
				</Slider>
			</div>
		</Fragment>
	)
}

export default SingleProduct

