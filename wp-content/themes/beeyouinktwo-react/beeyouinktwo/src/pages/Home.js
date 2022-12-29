import React, { Fragment } from 'react'
import Hero from '../components/Hero'
import PageCollage from '../components/PageCollage'
import RecentArticlesComponent from '../components/RecentArticlesComponent'
// import StoryTextComponent from '../components/StoryTextComponent'
// import TeamShowCaseComponent from '../components/TeamShowCaseComponent'
import TestimonialsComponent from '../components/TestimonialsComponent/TestimonialsComponent'

const Home = ({ props, wpData }) => {
	return (
		<Fragment>
			<Hero wpData={wpData.hero} />
			<RecentArticlesComponent wpData={wpData.articles} />

			<PageCollage featuredPages={props.pages.collage_pages} wpData={wpData} />
			<TestimonialsComponent wpData={wpData.testimonials} />
			{
				//	<StoryTextComponent wpData={wpData.story_text} />
				// <TeamShowCaseComponent wpData={wpData.team} />
			}
		</Fragment>
	)
}

export default Home

