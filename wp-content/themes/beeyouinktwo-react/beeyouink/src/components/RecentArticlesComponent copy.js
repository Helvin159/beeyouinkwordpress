import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Slider from 'react-slick'

const RecentArticlesComponent = ({ props, wpData }) => {
	console.log(wpData, 'recentarticls')

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
			${props.articles
				.map(
					(i, k) =>
						`
			.recent-article-card-${k}{
				background:url(${i.article_img});
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
							<p>{props.category}</p>
							<h3>{props.headline}</h3>
						</Col>
						<Col className='col-2'>arrows</Col>
					</Row>
				</div>
				<div className='recent-articles__wrapper'>
					<Slider className='recent-articles__wrapper__slider' {...settings}>
						{props.articles.map((i, k) => {
							const date = new Date(i.date)
							const day = date.getDate()
							const month = date.toLocaleString('default', { month: 'short' })
							return (
								<div key={k}>
									<Row className='recent-articles__wrapper__slider__row'>
										<Col className='col-6  recent-articles__wrapper__slider__row__left-card'>
											<h4>{i.title}</h4>
											<p className='left-card-date'>
												{`${month} · `}
												<span className='month-span'>{`${day}`}</span>
											</p>
											<Link to='/'>
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

