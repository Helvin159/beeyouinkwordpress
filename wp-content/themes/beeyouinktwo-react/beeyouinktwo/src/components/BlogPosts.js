import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PageContext } from '../lib/pageContext'

const BlogPosts = () => {
	const { pageData } = useContext(PageContext)
	return (
		<Row className='max-w-860 mx-auto'>
			{pageData.data.blog_posts.map((i, k) => (
				<Col sm={6} md={4} className='col-12 text-center' key={k}>
					{i.image ? (
						<div>
							<Link to={i.slug}>
								<img
									className='img-fluid m-0 max-w-260'
									src={i.image}
									alt={i.title}
								/>
							</Link>
						</div>
					) : (
						''
					)}

					<div className='py-3 text-left'>
						<Link className='portfolio__links' to={i.slug}>
							<h4 className='p-0 m-0'>{i.title}</h4>
						</Link>
						<Link className='portfolio__links' to={i.author}>
							<p>{i.title}</p>
						</Link>
					</div>
				</Col>
			))}
		</Row>
	)
}

export default BlogPosts

