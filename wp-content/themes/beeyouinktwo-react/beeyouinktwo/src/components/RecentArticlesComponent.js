import React, { Fragment, useContext } from 'react'
import { PageContext } from '../lib/pageContext'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Slider from 'react-slick'

const RecentArticlesComponent = () => {
	const { pageData } = useContext(PageContext)

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
			${pageData.data.articles
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
							<p>Curated Articles</p>
							<h3>Insights and information you need to know about tattoos</h3>
						</Col>
						<Col className='col-2 recent-articles__desktop'>arrows</Col>
					</Row>
				</div>
				<div className='recent-articles__wrapper'>
					{
						// Hidden on mobile
					}
					<Slider
						className='recent-articles__wrapper__slider recent-articles__desktop'
						{...settings}>
						{pageData.data.articles.map((i, k) => {
							const date = new Date(i.article_date)
							const day = date.getDate()
							const month = date.toLocaleString('default', { month: 'short' })
							return (
								<div key={k}>
									<Row className='recent-articles__wrapper__slider__row'>
										<Col className='col-6  recent-articles__wrapper__slider__row__left-card'>
											<h4 tabIndex={0} className='overflow-scroll'>
												{i.title}
											</h4>

											{i.article_date !== '' ? (
												<p tabIndex={0} className='left-card-date'>
													{`${month} · `}
													<span
														tabIndex={0}
														className='month-span'>{`${day}`}</span>
												</p>
											) : (
												<p tabIndex={0} className='left-card-date'>
													No date
												</p>
											)}
											<Link tabIndex={0} to={`${i.slug}`}>
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
					<div className='recent-articles__mobile mx-auto max-w-860'>
						{pageData.data.articles.map((i, k) => {
							const date = new Date(i.article_date)
							const day = date.getDate()
							const month = date.toLocaleString('default', { month: 'short' })
							return (
								<div className='mx-auto text-center my-3 max-w-360' key={k}>
									<div className='py-3'>
										<img
											tabIndex={0}
											className='img-fluid max-w-260'
											src={i.article_image}
											alt={i.title}
										/>
									</div>

									{i.article_date !== '' ? (
										<p tabIndex={0} className='left-card-date'>
											{`${month} · `}
											<span
												tabIndex={0}
												className='month-span'>{`${day}`}</span>
										</p>
									) : (
										<p tabIndex={0} className='left-card-date'>
											No date
										</p>
									)}
									<Link tabIndex={0} to={`${i.slug}`}>
										<h4 tabIndex={0} className='overflow-scroll'>
											{i.title}
										</h4>
									</Link>
									<Link tabIndex={0} to={`${i.slug}`}>
										Read more <span>{' >'}</span>
									</Link>
								</div>
							)
						})}
					</div>
				</div>
			</Container>
		</Fragment>
	)
}

export default RecentArticlesComponent

