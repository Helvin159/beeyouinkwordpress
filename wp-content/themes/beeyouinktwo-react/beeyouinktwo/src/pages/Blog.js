import React from 'react'
import BlogPosts from '../components/BlogPosts'
import SingleHero from '../components/SingleHero'

const Blog = () => {
	return (
		<div>
			<SingleHero title='My Blog!' subTitle={null} background='null' />
			<BlogPosts />
		</div>
	)
}

export default Blog

