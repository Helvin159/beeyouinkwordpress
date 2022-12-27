import React, { Fragment } from 'react'
import Hero from '../components/Hero'
import PageCollage from '../components/PageCollage'
import RecentArticlesComponent from '../components/RecentArticlesComponent'
import StoryTextComponent from '../components/StoryTextComponent'
import TeamShowCaseComponent from '../components/TeamShowCaseComponent'
import TestimonialsComponent from '../components/TestimonialsComponent/TestimonialsComponent'

const Home = ({ props, wpData }) => {
	return (
		<Fragment>
			<Hero wpData={wpData.hero} />
			<RecentArticlesComponent wpData={wpData.articles} />
			<TestimonialsComponent wpData={wpData.testimonials} />
			<PageCollage featuredPages={props.pages.collage_pages} wpData={wpData} />
			<StoryTextComponent wpData={wpData.story_text} />
			<TeamShowCaseComponent props={props.team} />
		</Fragment>
	)
}

export default Home

