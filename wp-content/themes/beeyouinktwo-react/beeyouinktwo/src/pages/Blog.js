import React from 'react'
import BlogGallery from '../components/BlogGallery'
import SingleHero from '../components/SingleHero'

const Blog = () => {
	return (
		<div>
			<SingleHero title='My Blog!' subTitle={null} background='null' />
			<BlogGallery />
		</div>
	)
}

export default Blog

