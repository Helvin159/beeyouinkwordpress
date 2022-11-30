import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PortfolioGallery = ({ props }) => {
	console.log(props, 'props')
	return (
		<Row className='max-w-1024 mx-auto portfolio-gallery'>
			{props.map(
				(i, k) =>
					i.acf.show_tattoo_in_gallery && (
						<Col sm={4} key={k} className='portfolio-gallery__col'>
							<div className='portfolio-gallery__col__card'>
								<div className='py-3 max-w-260 mx-auto portfolio-gallery__col__card__img'>
									<img
										className='img-fluid'
										src={i.acf.image}
										alt={i.title.rendered}
									/>
								</div>
								<div className='portfolio-gallery__col__card__copy text-center max-w-260 mx-auto'>
									<h3>{i.title.rendered}</h3>
									<div
										dangerouslySetInnerHTML={{ __html: i.excerpt.rendered }}
									/>
								</div>
							</div>
						</Col>
					)
			)}
		</Row>
	)
}

export default PortfolioGallery

