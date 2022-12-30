import React from 'react'
import BlogPosts from '../components/BlogPosts'

const Blog = () => {
	return (
		<div>
			<div className='max-w-920 mx-auto text-center aligncenter py-5'>
				<h1>My Blog!</h1>
			</div>
			<BlogPosts />
		</div>
	)
}

export default Blog

