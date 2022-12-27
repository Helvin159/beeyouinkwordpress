import React from 'react'
import Container from 'react-bootstrap/Container'
import Slider from 'react-slick'

const TestimonialsComponent = ({ wpData }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		fade: false,
		autoplay: true,
		autoplaySpeed: 8000,
		pauseOnHover: true,
	}
	return (
		<Container className='testimonials' fluid>
			<div className='testimonials__wrapper max-w-860 mx-auto '>
				<Slider className='testimonials__slider' {...settings}>
					{wpData.map((i, k) => (
						<div
							key={k}
							className='testimonials__slider__slide text-center p-5 px-xs-0 mx-auto'>
							<p className='testimonials__slider__slide__quoteChar font-red'>
								"
							</p>
							<div
								className='testimonials__slider__slide__quote'
								dangerouslySetInnerHTML={{ __html: i.content }}
							/>
							<p className='testimonials__slider__slide__customer'>{i.title}</p>
						</div>
					))}
				</Slider>
			</div>
		</Container>
	)
}

export default TestimonialsComponent
