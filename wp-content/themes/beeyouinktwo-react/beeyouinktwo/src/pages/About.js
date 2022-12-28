import React, { Fragment } from 'react'
import Hero from '../components/Hero'
import PageCollage from '../components/PageCollage'
import RecentArticlesComponent from '../components/RecentArticlesComponent'
import TestimonialsComponent from '../components/TestimonialsComponent/TestimonialsComponent'

const About = ({ props, wpData }) => {
	return (
		<Fragment>
			<Hero wpData={wpData.hero} />
			<TestimonialsComponent wpData={wpData.testimonials} />
			<PageCollage featuredPages={props.pages.collage_pages} wpData={wpData} />
			<RecentArticlesComponent wpData={wpData.articles} />
		</Fragment>
	)
}

export default About

