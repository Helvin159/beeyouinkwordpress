import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Slider from 'react-slick'

const SingleProduct = ({ product }) => {
	console.log(product)
	return (
		<Fragment>
			<Container fluid>
				<Row className='p-5 max-w-860 mx-auto'>
					<Col sm={6} className='col-12'>
						<SimpleSlider props={product.images} />
					</Col>
					<Col sm={6} className='col-12'>
						<h2>{product.name}</h2>
						<div dangerouslySetInnerHTML={{ __html: product.description }} />
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
						<div className='slick-slider-product__img'>
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

