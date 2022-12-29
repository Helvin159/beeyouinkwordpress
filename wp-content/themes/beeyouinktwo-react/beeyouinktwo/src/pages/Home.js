import React, { Fragment } from 'react'
import Hero from '../components/Hero'
import PageCollage from '../components/PageCollage'
import RecentArticlesComponent from '../components/RecentArticlesComponent'
// import StoryTextComponent from '../components/StoryTextComponent'
// import TeamShowCaseComponent from '../components/TeamShowCaseComponent'
import TestimonialsComponent from '../components/TestimonialsComponent/TestimonialsComponent'

const Home = () => {
	return (
		<Fragment>
			<Hero />
			<RecentArticlesComponent />
			<PageCollage />
			<TestimonialsComponent />
			{
				// <TeamShowCaseComponent />
				// <StoryTextComponent />
			}
		</Fragment>
	)
}

export default Home

