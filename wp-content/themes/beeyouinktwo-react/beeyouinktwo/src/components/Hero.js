import React, { Fragment, useContext } from 'react'
import { PageContext } from '../lib/PageContext'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Slider from 'react-slick'

const Hero = () => {
	const { pageData } = useContext(PageContext)

	if (pageData) {
		return (
			<Container fluid className='px-0 mx-0'>
				<SimpleSlider props={pageData.data.hero} />
			</Container>
		)
	}
}

const SimpleSlider = ({ props }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
	}
	return (
		<div className='hero'>
			<div className='slick-slider-hero'>
				<Slider {...settings}>
					{props.map((i, k) => (
						<Fragment key={k}>
							<style>
								{`
									.slick-slider-hero__card-${k}{
										background:url(${i.custom_size_image});
										background-size:cover;
										background-repeat:no-repeat;
									}
								`}
							</style>
							<div
								className={`slick-slider-hero__card slick-slider-hero__card-${k}`}>
								<div className='slick-slider-hero__card__text'>
									<p tabIndex={0}>{i.intro_text}</p>
									<h1 tabIndex={0}>{i.heading}</h1>
									<Link tabIndex={0} to={i.slug}>
										View More
									</Link>
								</div>
							</div>
						</Fragment>
					))}
				</Slider>
			</div>
		</div>
	)
}

export default Hero

