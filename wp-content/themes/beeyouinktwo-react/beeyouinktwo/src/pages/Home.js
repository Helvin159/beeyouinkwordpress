import React, { Fragment, useContext } from 'react'
import { PageContext } from '../lib/pageContext'
import Hero from '../components/Hero'
import PageCollage from '../components/PageCollage'
import PortfolioGallery from '../components/PortfolioGallery'
import RecentArticlesComponent from '../components/RecentArticlesComponent'
// import StoryTextComponent from '../components/StoryTextComponent'
// import TeamShowCaseComponent from '../components/TeamShowCaseComponent'
import TestimonialsComponent from '../components/TestimonialsComponent/TestimonialsComponent'
import SectionTitle from '../components/SectionTitle'
import ViewMoreBtn from '../components/ViewMoreBtn'

const Home = () => {
	const { pageData } = useContext(PageContext)
	const { data } = pageData

	return (
		<Fragment>
			<Hero />
			<SectionTitle title='Some of my previous work' />
			<PortfolioGallery limit={6} props={data.tattoo_work} />
			<ViewMoreBtn slug='/portfolio' />
			<PageCollage />
			<TestimonialsComponent />
			{
				// <RecentArticlesComponent />
				// <TeamShowCaseComponent />
				// <StoryTextComponent />
			}
		</Fragment>
	)
}

export default Home

