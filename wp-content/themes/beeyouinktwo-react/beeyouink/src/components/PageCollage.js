import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PageCollage = ({ featuredPages }) => {
	// const isOdd = (num) => {
	// 	return num % 2 === 1 ? true : false
	// }

	return (
		<Fragment>
			<style>
				{`
					.card-${featuredPages.single.page}{
						background:url(${featuredPages.single.img_url})


					}

					${featuredPages.quad
						.map(
							(i, k) => `
							.card-${k}{
								
								${
									k === 1 || k === 2
										? `background:linear-gradient(180deg,rgba(0,0,0,0.5), rgba(0,0,0,1)), url(${i.img_url});`
										: `background:url(${i.img_url});`
								}
								margin:${
									k === 0
										? '0 0 .5rem .5rem'
										: k === 1
										? '0 0 .5rem 1rem'
										: k === 2
										? '0 0 0 .5rem'
										: k === 3 && '0 0 0 1rem'
								};
							}
							
							${
								k === 3
									? `@media (max-width: 575px) {
											.card-${k}{
												margin:${k === 3 ? '.5rem 0 0 1rem' : ''};
											}}`
									: ''
							}
						`
						)
						.join('')}
        `}
			</style>
			<Container fluid className='p-0 PageCollagecomponent'>
				<Row>
					<Col sm={6} className='d-xs-none'>
						<div className={`big-card card-${featuredPages.single.page}`}>
							<div className='big-card__text'>
								<Link to={featuredPages.single.url}>
									<h3>{featuredPages.single.page}</h3>
								</Link>
							</div>
						</div>
					</Col>

					<Col sm={6} className='small-cards-wrapper p-0'>
						<Row>
							{featuredPages.quad.map(
								(i, k) =>
									k <= 3 && (
										<Col sm={6} className='p-0' key={`${k}-${i.page} `}>
											<div className={`small-cards card-${k} `}>
												{(k === 0 || k === 3) && (
													<div className='small-cards__text'>
														<h3>
															<Link to={i.url}>{i.page}</Link>
														</h3>
													</div>
												)}
											</div>
										</Col>
									)
							)}
						</Row>
					</Col>
				</Row>
			</Container>
		</Fragment>
	)
}

export default PageCollage

