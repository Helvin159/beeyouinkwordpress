import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

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
							<p tabIndex={0}>{i.intro_text}</p>
							<h1 tabIndex={0}>{i.heading}</h1>
							<Link tabIndex={0} to={i.slug}>
								View More
							</Link>
						</div>
						<img tabIndex={0} src={i.home_hero_image} alt={i.title} />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default SimpleSlider

