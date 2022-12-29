import React, { Fragment, useContext } from 'react'
import { PageContext } from '../lib/pageContext'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const Portfolio = () => {
	const { pageData } = useContext(PageContext)

	return (
		<Fragment>
			<div className='portfolio'>
				<div className='max-w-920 portfolio__header mx-auto text-center aligncenter py-5'>
					<h1>My Artwork!</h1>
				</div>
				<Row className='max-w-860 mx-auto'>
					{pageData.data.tattoo_work.map((i, k) => (
						<Col sm={6} md={4} className='col-12 text-center' key={k}>
							<div>
								<Link to={i.slug}>
									<img className='img-fluid m-0' src={i.image} alt={i.title} />
								</Link>
							</div>
							<div className='py-3 text-left'>
								<Link className='portfolio__links' to={i.slug}>
									<h4 className='p-0 m-0'>{i.title}</h4>
								</Link>
								<Link className='portfolio__links' to={i.artist.post_name}>
									<p>{i.artist.post_title}</p>
								</Link>
							</div>
						</Col>
					))}
				</Row>
			</div>
		</Fragment>
	)
}

export default Portfolio

