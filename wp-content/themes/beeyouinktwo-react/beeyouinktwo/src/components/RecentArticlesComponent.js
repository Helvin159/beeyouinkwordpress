import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Slider from 'react-slick'

const RecentArticlesComponent = ({ wpData }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 600,
		slidesToShow: 2,
		slidesToScroll: 1,
		centerMode: true,
		adaptiveHeight: false,
		fade: false,
		autoplay: true,
		autoplaySpeed: 10000,
		pauseOnHover: true,
		arrows: false,
	}
	return (
		<Fragment>
			<style>{`
			${wpData
				.map(
					(i, k) =>
						`
			.recent-article-card-${k}{
				background:url(${i.article_image});
				background-position:center center;
				background-size:cover;

			}
			`
				)
				.join('')}
			`}</style>
			<Container className='recent-articles' fluid>
				<div className='recent-articles__header'>
					<Row>
						<Col className='col-10'>
							<p>News</p>
							<h3>Everything you need to know about tattoos</h3>
						</Col>
						<Col className='col-2'>arrows</Col>
					</Row>
				</div>
				<div className='recent-articles__wrapper'>
					<Slider className='recent-articles__wrapper__slider' {...settings}>
						{wpData.map((i, k) => {
							const date = new Date(i.article_date)
							const day = date.getDate()
							const month = date.toLocaleString('default', { month: 'short' })
							return (
								<div key={k}>
									<Row className='recent-articles__wrapper__slider__row'>
										<Col className='col-6  recent-articles__wrapper__slider__row__left-card'>
											<h4 className='overflow-scroll'>{i.title}</h4>

											{i.article_date !== '' ? (
												<p className='left-card-date'>
													{`${month} · `}
													<span className='month-span'>{`${day}`}</span>
												</p>
											) : (
												<p className='left-card-date'>No date</p>
											)}
											<Link to={`${i.slug}`}>
												Read more <span>{' >'}</span>
											</Link>
										</Col>

										<Col
											className={`col-6  recent-articles__wrapper__slider__row__right-card recent-article-card-${k}`}></Col>
									</Row>
								</div>
							)
						})}
					</Slider>
				</div>
			</Container>
		</Fragment>
	)
}

export default RecentArticlesComponent

