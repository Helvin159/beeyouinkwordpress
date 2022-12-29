import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const Portfolio = ({ wpData }) => {
	console.log(wpData)
	return (
		<div>
			<div className='max-w-920 mx-auto text-center aligncenter pt-5'>
				<h1>My Portfolio of Artwork!</h1>
			</div>
			<Row className='max-w-860 mx-auto'>
				{wpData.map((i, k) => (
					<Col sm={4} className='text-center' key={k}>
						<div className='p-4 '>
							<img className='img-fluid py-3' src={i.image} alt={i.title} />
							<Link to={i.slug}>
								<h4>{i.title}</h4>
							</Link>
						</div>
					</Col>
				))}
			</Row>
		</div>
	)
}

export default Portfolio

