import React, { Fragment } from 'react'
import Hero from '../components/Hero'
import TikTokEmbed from '../components/TikTokEmbed'
// import PageCollage from '../components/PageCollage'
// import RecentArticlesComponent from '../components/RecentArticlesComponent'
// import TestimonialsComponent from '../components/TestimonialsComponent/TestimonialsComponent'

const About = ({ props, wpData }) => {
	return (
		<Fragment>
			<Hero wpData={wpData.hero} />
			<TikTokEmbed />
		</Fragment>
	)
}

export default About

