import React, { useContext } from 'react'
import { PageContext } from '../lib/PageContext'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TattooArchiveSingle = ({ wpData }) => {
	const data = useContext(PageContext)

	if (wpData) {
		if (data) {
			return (
				<div className='max-w-1024 mx-auto text-center'>
					<div className='py-5 max-w-920 mx-auto'>
						<h1 tabIndex={0}>{wpData.name}</h1>
						<p tabIndex={0}>{wpData.position}</p>

						<Row className='py-4 max-w-860 mx-auto'>
							<Col sm={6} md={4} className='col-12'>
								<img
									className='img-fluid'
									src={wpData.img_url}
									alt={wpData.name}
									tabIndex={0}
								/>
							</Col>
							<Col sm={6} md={8} className='col-12'>
								<div
									className='max-w-760 mx-auto'
									tabIndex={0}
									dangerouslySetInnerHTML={{ __html: wpData.about }}
								/>
							</Col>
						</Row>
					</div>
				</div>
			)
		}
	}
}

export default TattooArchiveSingle

