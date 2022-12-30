import React, { Fragment, useContext } from 'react'
import { PageContext } from '../lib/pageContext'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PageCollage = () => {
	const { pageData } = useContext(PageContext)

	if (pageData) {
		return (
			<Fragment>
				<style>
					{`
						.card-${pageData.data.pages.collage_pages.single[0].page}{
							background:url(${pageData.data.pages.collage_pages.single[0].featured_image})
	
	
						}
	
						${pageData.data.pages.featured_pages
							.map(
								(i, k) => `
								.card-${k}{
									${
										k === 1 || k === 2
											? `background:linear-gradient(180deg,rgba(0,0,0,0.5), rgba(0,0,0,1)), url(${i.featured_image});`
											: `background:url(${i.featured_image});`
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
								@media (max-width:575px){

									.card-2{display:none;}
									.card-1{display:none;}
								}
							`
							)
							.join('')}
			`}
				</style>
				<Container fluid className='p-0 PageCollagecomponent'>
					<Row>
						<Col sm={6} className='d-xs-none'>
							<div
								className={`big-card card-${pageData.data.pages.collage_pages.single[0].page}`}>
								<div className='big-card__text'>
									<Link to={pageData.data.pages.collage_pages.single[0].slug}>
										<h3>{pageData.data.pages.collage_pages.single[0].page}</h3>
									</Link>
								</div>
							</div>
						</Col>

						<Col sm={6} className='small-cards-wrapper p-0'>
							<Row>
								{pageData.data.pages.featured_pages.map(
									(i, k) =>
										k <= 3 && (
											<Col sm={6} className='p-0' key={`${k}-${i.page} `}>
												<div className={`small-cards card-${k} `}>
													<div className='small-cards__text'>
														<h3>
															<Link to={i.slug}>{i.page}</Link>
														</h3>
													</div>
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
}

export default PageCollage

