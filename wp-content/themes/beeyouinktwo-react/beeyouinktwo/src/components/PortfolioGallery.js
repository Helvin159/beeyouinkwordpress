import React, { Fragment } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PortfolioCard from './PortfolioCard'

const PortfolioGallery = ({ props, limit }) => {
	const limitBy = limit - 1

	return (
		<Fragment>
			<Row className='max-w-1024 mx-auto'>
				{props.map((i, k) => {
					if (limitBy !== null && k <= limitBy) {
						return (
							<Col sm={6} md={4} className='col-12 text-center' key={k}>
								<PortfolioCard data={i} id={k} />
							</Col>
						)
					} else {
						return (
							<Col sm={6} md={4} className='col-12 text-center' key={k}>
								<PortfolioCard data={i} id={k} />
							</Col>
						)
					}
				})}
			</Row>
		</Fragment>
	)
}

export default PortfolioGallery

