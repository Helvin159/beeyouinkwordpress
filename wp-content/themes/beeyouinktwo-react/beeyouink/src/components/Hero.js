import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Slider from 'react-slick'

const Hero = ({ props }) => {
	return (
		<Container fluid className='px-0 mx-0'>
			<SimpleSlider props={props.home.hero_featured_work} />
		</Container>
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
		<div className='slick-slider-hero'>
			<Slider {...settings}>
				{props.map((i, k) => (
					<div key={k} className='slick-slider-hero__card'>
						<div className='slick-slider-hero__card__text'>
							<p>{i.tattoo_style}</p>
							<h1>{i.tattoo}</h1>
							<Link>View More</Link>
						</div>
						<img src={i.img_url} alt={i.tattoo} />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default Hero

