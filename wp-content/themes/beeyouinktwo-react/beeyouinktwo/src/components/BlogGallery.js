import React, { useContext } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PageContext } from '../lib/PageContext'
import BlogCard from './BlogCard'

const BlogGallery = () => {
	const { pageData } = useContext(PageContext)

	return (
		<Row className='max-w-860 mx-auto py-5'>
			{pageData.data.blog_posts.map((i, k) => (
				<Col sm={6} md={4} className='col-12 text-center' key={k}>
					<BlogCard data={i} id={k} />
				</Col>
			))}
		</Row>
	)
}

export default BlogGallery

