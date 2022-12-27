import React, { Fragment } from 'react'
import Hero from '../components/Hero'
import PageCollage from '../components/PageCollage'
import RecentArticlesComponent from '../components/RecentArticlesComponent'
import TestimonialsComponent from '../components/TestimonialsComponent/TestimonialsComponent'

const About = ({ props }) => {
	return (
		<Fragment>
			<Hero props={props} />
			<TestimonialsComponent props={props} />
			<PageCollage featuredPages={props.pages.collage_pages} />
			<RecentArticlesComponent props={props.home.recent_articles_component} />
		</Fragment>
	)
}

export default About

