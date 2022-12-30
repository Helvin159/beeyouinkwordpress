import React from 'react'
import { PageContext } from '../../lib/pageContext'
import { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Slider from 'react-slick'

const TestimonialsComponent = () => {
	const { pageData } = useContext(PageContext)

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
					{pageData.data.testimonials.map((i, k) => (
						<div
							key={k}
							className='testimonials__slider__slide text-center p-5 px-xs-0 mx-auto'>
							<p
								tabIndex={0}
								className='testimonials__slider__slide__quoteChar font-red'>
								"
							</p>
							<div
								tabIndex={0}
								className='testimonials__slider__slide__quote'
								dangerouslySetInnerHTML={{ __html: i.content }}
							/>
							<p tabIndex={0} className='testimonials__slider__slide__customer'>
								{i.title}
							</p>
						</div>
					))}
				</Slider>
			</div>
		</Container>
	)
}

export default TestimonialsComponent

