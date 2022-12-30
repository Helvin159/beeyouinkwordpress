import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TattooSingleContent = ({ wpData }) => {
	return (
		<Row className='px-xs-5'>
			<Col md={6} className='col-12'>
				<img
					className='img-fluid'
					src={wpData.image}
					alt={wpData.title}
					tabIndex={0}
				/>
			</Col>
			<Col md={6} className='col-12 '>
				<div
					className='max-w-760 mx-auto py-xs-5'
					tabIndex={0}
					dangerouslySetInnerHTML={{ __html: wpData.content }}
				/>
			</Col>
		</Row>
	)
}

export default TattooSingleContent
